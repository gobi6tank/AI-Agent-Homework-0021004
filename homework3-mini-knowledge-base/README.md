# 作業 3：程式語言迷你知識庫

謝宜村｜工號 0021004｜Group 5

**目前狀態：HW3 已完成 Qdrant Cloud 真實驗收；5 筆知識已成功寫入專屬 collection，3 組語意搜尋與相似度分數皆已取得並記錄於 README。**

## 原始基底

Repository：`kaochenlong/ai-agent-js-v8`  
指定分支：`3.2-rag-search-text`  
鎖定 commit：`f53b48b70bc2223d0ca08e7d2ad690a08f46eaa2`

本資料夾已整理為可獨立安裝與執行的繳交專案；`BASELINE.md` 記錄指定 branch、commit 與本題修改。

## 選擇與實作

保留 lib/qdrant.js 的 Netflix 邏輯，新增自己的 collection 與 searchLanguages()。新增五筆資料、灌入腳本、搜尋測試。

## 安裝及環境

在此題專案根目錄執行 `npm install`，複製原 `.env.example` 為 `.env`，只在公司核准的本機環境填入仍有效的授權金鑰。不要貼進程式、README、截圖或版本控制。課程原模型名稱保留；帳號無存取權、金鑰失效、額度或連線有問題時，記錄錯誤並停止，不持續重跑。

## 驗收方式

設定本題 `.env` 的 OPENAI_API_KEY、QDRANT_URL；雲端 Qdrant 視需要設定 QDRANT_API_KEY。只執行自己的腳本，不執行 embed-netflix.js。

```powershell
node scripts/embed-languages.js
node scripts/search-languages.js
```

灌入為五筆資料的一次批次 embedding；搜尋為三個問題，不是無界掃描。新 collection 為 `hw_0021004_languages_v2`，不刪或改 Netflix。若 collection 已存在，預設停止；檢查後確定需要更新同五筆，才用 `node scripts/embed-languages.js --confirm-upsert`。

搜尋全部成功後，腳本把三次真實結果與相似度分數寫進本 README，另存 `evidence/hw3-real-search.json`。預期首項依序為 Python、JavaScript、Go；須人工檢查，不把「有回傳」當成「結果正確」。資料簡介是本作業自建內容，不是外部權威知識庫。

## 測試結果

目前狀態：HW3 已完成 Qdrant Cloud 真實驗收，5 筆知識已成功寫入專屬 collection，3 組語意搜尋與相似度分數皆已取得。

<!-- REAL_RESULTS_START -->
## 實際搜尋紀錄
擷取時間：2026-09-25T09:16:13.410Z
Collection：hw_0021004_languages_v2

### 我想做資料分析與機器學習，該學哪種語言？
| 名次 | 結果 | 相似度分數 |
|---|---|---|
| 1 | Python | 0.5646644 |
| 2 | Java | 0.41077238 |
| 3 | Ruby | 0.36150542 |

### 我要處理瀏覽器按鈕事件與表單互動，應用哪種語言？
| 名次 | 結果 | 相似度分數 |
|---|---|---|
| 1 | JavaScript | 0.60576105 |
| 2 | Ruby | 0.43361384 |
| 3 | Java | 0.40072992 |

### 我想用 goroutine 和 channel 建立並行雲端服務，該選哪種語言？
| 名次 | 結果 | 相似度分數 |
|---|---|---|
| 1 | Go | 0.683155 |
| 2 | JavaScript | 0.35489547 |
| 3 | Java | 0.34931195 |

以上為 Qdrant 真實回傳；是否符合問題仍須人工查核，程式不把『有回傳』自動判為『答對』。
<!-- REAL_RESULTS_END -->
