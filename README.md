# AI Agent 開發實戰課程 v8｜課後作業

謝宜村 YiTsiun Hsieh｜工號 0021004｜Group 5

本資料夾包含 5 個可獨立安裝與執行的作業專案。每題依題目指定的課程分支與 commit 重建，並只加入該題需要的修改。

## 五題基底

| 題目 | 專案資料夾 | 指定分支 | 鎖定 commit |
|---|---|---|---|
| 1 | `homework1-role-chatbot` | `1.4-openai-api-with-memory` | `8582bca6938551d1cb7f83dd8c6d12469d1e461f` |
| 2 | `homework2-calculator-tool` | `2.5-tool-calling-current-time` | `5ca9ffc72ad4fe0a3583164d5788550047c30f8e` |
| 3 | `homework3-mini-knowledge-base` | `3.2-rag-search-text` | `f53b48b70bc2223d0ca08e7d2ad690a08f46eaa2` |
| 4 | `homework4-weather-time-tools` | `2.5-tool-calling-current-time` | `5ca9ffc72ad4fe0a3583164d5788550047c30f8e` |
| 5 | `homework5-sql-teacher` | `5.1-agents-md` | `a2f4bc28e25089c90e9eecccb1b511d6ce9c8b5b` |

`SOURCE_MANIFEST.json` 列出每題基底與修改檔。

## 安全

- 真實 API Key 不在本壓縮檔內。
- 每題 `.env.example` 只有欄位名稱；請複製成 `.env` 再填入有效金鑰。
- `.env`、`.history/` 與執行證據檔預設不進版控。
- 先前曾貼在聊天中的共用 API Key 不應再寫入任何作業檔；正式執行前建議使用課程仍有效且已確認未外洩的金鑰。

## 安裝方式

每題獨立執行：

```powershell
cd homework1-role-chatbot
copy .env.example .env
npm install
npm start
```

其餘題目請看各自 `README.md`。

## 目前完成狀態

程式碼、資料、README、指定分支/commit 紀錄與本機靜態驗證已完成。由於目前執行環境無法直接連線 GitHub / OpenAI / Qdrant / OpenWeather，以下「真實外部服務驗收證據」仍必須在可連外的課程電腦執行後貼回各題 README：

1. 作業 1：5 輪以上真實模型對話。
2. 作業 2：AI 真正呼叫 `calculate` 的終端截圖。
3. 作業 3：3 次 Qdrant 真實搜尋結果與相似度分數。
4. 作業 4：時間、天氣、時間+天氣三種真實工具選擇結果。
5. 作業 5：3 段真實 handoff，均保留 `[由 XX 回答]`。

請勿用模擬輸出、預期值或手動文字取代上述驗收證據。
