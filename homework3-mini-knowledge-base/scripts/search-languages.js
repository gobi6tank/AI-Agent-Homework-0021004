import { mkdir, readFile, writeFile } from "node:fs/promises";
import { searchLanguages, LANGUAGES_COLLECTION } from "../lib/qdrant.js";

const queries = [
  "我想做資料分析與機器學習，該學哪種語言？",
  "我要處理瀏覽器按鈕事件與表單互動，應用哪種語言？",
  "我想用 goroutine 和 channel 建立並行雲端服務，該選哪種語言？",
];
async function main() {
  const evidence = { collected_at: new Date().toISOString(), collection: LANGUAGES_COLLECTION, queries: [] };
  for (const query of queries) {
    const results = await searchLanguages(query);
    if (!results.length || results.some((r) => !Number.isFinite(r.score))) {
      throw new Error("搜尋無結果或缺少有效分數；不寫入完成紀錄");
    }
    evidence.queries.push({ query, results });
    console.log(`\n問題：${query}`);
    console.table(results.map(({title, score}) => ({title, score})));
  }
  const dir = new URL("../evidence/", import.meta.url);
  await mkdir(dir, { recursive: true });
  await writeFile(new URL("hw3-real-search.json", dir), JSON.stringify(evidence, null, 2) + "\n");
  const report = ["## 實際搜尋紀錄", `擷取時間：${evidence.collected_at}`, `Collection：${evidence.collection}`, ""];
  for (const item of evidence.queries) {
    report.push(`### ${item.query}`, "| 名次 | 結果 | 相似度分數 |", "|---|---|---|");
    item.results.forEach((r, i) => report.push(`| ${i + 1} | ${r.title} | ${r.score} |`));
    report.push("");
  }
  report.push("以上為 Qdrant 真實回傳；是否符合問題仍須人工查核，程式不把『有回傳』自動判為『答對』。");
  const readmeUrl = new URL("../README.md", import.meta.url);
  const readme = await readFile(readmeUrl, "utf8");
  const start = "<!-- REAL_RESULTS_START -->", end = "<!-- REAL_RESULTS_END -->";
  const a = readme.indexOf(start), b = readme.indexOf(end);
  if (a < 0 || b < a) throw new Error("README 缺結果標記；JSON 已保存，未改 README");
  await writeFile(readmeUrl, readme.slice(0, a + start.length) + "\n" + report.join("\n") + "\n" + readme.slice(b));
  console.log("已保存 JSON 並將三次真實結果寫入 README；請檢查排序是否合理。");
}
main().catch((err) => { console.error(err.message); process.exitCode = 1; });
