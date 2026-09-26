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

- 真實 API Key 不在本 Repository 中。
- 每題 `.env.example` 只有欄位名稱；請複製成 `.env` 再填入有效金鑰。
- `.env`、`.history/` 與 `node_modules/` 不進版控；經確認不含敏感資訊的驗收 evidence 則保留於 Repository 供作業查核。

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

五題作業皆已完成程式實作與真實驗收，相關執行紀錄已放入各題 README 與 `evidence/`。

| 作業 | 主題 | 真實驗收結果 |
|---|---|---|
| HW1 | Memory／角色聊天機器人 | PASS：完成 6 輪真實對話，AI 能延續 Tank、B1 與製造業情境 |
| HW2 | Function Calling／計算機 | PASS：AI 實際呼叫 `calculate`，結果 20、1020 正確 |
| HW3 | Qdrant Semantic Search | PASS：5 筆知識寫入專屬 collection，完成 3 組真實搜尋與 similarity score |
| HW4 | Weather + Time Multi-Tool | PASS：時間、天氣及雙工具整合皆實際呼叫成功 |
| HW5 | Agent Handoff／SQL 老師 | PASS：SQL、Python、班導師三種 routing 均實際驗證成功 |

所有真實 API Key、`.env`、`.history/` 與 `node_modules/` 均未提交至 Repository。
