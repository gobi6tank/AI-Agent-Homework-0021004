import { readFile } from "node:fs/promises";
import { client } from "../lib/openai.js";
import {
  qdrant, LANGUAGES_COLLECTION, EMBEDDING_DIM, EMBEDDING_MODEL,
} from "../lib/qdrant.js";

// 只處理作業指定的五筆；不執行 Netflix 的大量灌入，不刪任何 collection。
async function main() {
  const rows = JSON.parse(await readFile(new URL("../data/languages.json", import.meta.url), "utf8"));
  if (rows.length !== 5 || new Set(rows.map((x) => x.id)).size !== 5 ||
      rows.some((x) => !Number.isInteger(x.id) || !x.title || !x.content)) {
    throw new Error("必須正好五筆、有唯一整數 ID 且含 title/content");
  }
  const exists = (await qdrant.collectionExists(LANGUAGES_COLLECTION)).exists;
  if (exists) {
    if (!process.argv.includes("--confirm-upsert")) {
      throw new Error("自己的 collection 已存在。先檢查資料；確定需更新同五筆時才加 --confirm-upsert，不會自動重建或刪除。");
    }
    const info = await qdrant.getCollection(LANGUAGES_COLLECTION);
    const cfg = info.config.params.vectors;
    if (cfg.size !== EMBEDDING_DIM || cfg.distance !== "Cosine") {
      throw new Error("collection 的維度或距離設定不同，已停止；不會覆寫");
    }
  }
  // 一次批次 embedding，不對每笔建立無界迴圈。
  const response = await client.embeddings.create({
    model: EMBEDDING_MODEL,
    input: rows.map((r) => `${r.title} | ${r.content}`),
  });
  const items = [...response.data].sort((a, b) => a.index - b.index);
  if (items.length !== 5 || items.some((x, i) => x.index !== i ||
      x.embedding.length !== EMBEDDING_DIM || !x.embedding.every(Number.isFinite))) {
    throw new Error("embedding 回傳筆數、index 或維度不正確，停止寫入");
  }
  if (!exists) {
    await qdrant.createCollection(LANGUAGES_COLLECTION, {
      vectors: { size: EMBEDDING_DIM, distance: "Cosine" },
    });
  }
  await qdrant.upsert(LANGUAGES_COLLECTION, {
    wait: true,
    points: rows.map((r, i) => ({
      id: r.id, vector: items[i].embedding,
      payload: { title: r.title, content: r.content },
    })),
  });
  const count = await qdrant.count(LANGUAGES_COLLECTION, { exact: true });
  if (count.count !== 5) throw new Error(`collection 有 ${count.count} 筆，應為 5；請檢查，不自動刪除`);
  console.log(`已寫入 ${count.count} 筆至 ${LANGUAGES_COLLECTION}`);
}
main().catch((err) => { console.error(err.message); process.exitCode = 1; });
