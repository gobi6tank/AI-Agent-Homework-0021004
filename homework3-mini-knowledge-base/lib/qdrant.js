import { QdrantClient } from "@qdrant/js-client-rest";
import { QDRANT_URL, QDRANT_API_KEY } from "../config.js";
import { client } from "./openai.js";

export const qdrant = new QdrantClient({
  url: QDRANT_URL,
  ...(QDRANT_API_KEY && { apiKey: QDRANT_API_KEY }),
  checkCompatibility: false,
});

export const NETFLIX_COLLECTION = "netflix";
export const LANGUAGES_COLLECTION = "hw_0021004_languages_v2";

export const EMBEDDING_DIM = 1536;
export const EMBEDDING_MODEL = "text-embedding-3-small";

export async function embed(text) {
  const res = await client.embeddings.create({
    model: EMBEDDING_MODEL,
    input: text,
  });

  return res.data[0].embedding;
}

// 保留課程原本的 Netflix 搜尋功能，但改用目前 Qdrant client 的 query API
export async function searchNetflix(query, limit = 5) {
  const vector = await embed(query);

  const response = await qdrant.query(NETFLIX_COLLECTION, {
    query: vector,
    limit,
    with_payload: true,
  });

  return response.points.map((r) => ({
    score: r.score,
    title: r.payload.title,
    type: r.payload.type,
    release_year: r.payload.release_year,
    description: r.payload.description,
    listed_in: r.payload.listed_in,
  }));
}

// 作業 3：搜尋自己的程式語言知識庫
export async function searchLanguages(query, limit = 3) {
  if (typeof query !== "string" || !query.trim() || query.length > 500) {
    throw new Error("查詢須為 1–500 字的字串");
  }

  const vector = await embed(query);

  const response = await qdrant.query(LANGUAGES_COLLECTION, {
    query: vector,
    limit,
    with_payload: true,
  });

  return response.points.map((r) => ({
    score: r.score,
    title: r.payload.title,
    content: r.payload.content,
  }));
}