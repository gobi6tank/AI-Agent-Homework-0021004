# 作業 5：新增 SQL 老師

謝宜村｜工號 0021004｜Group 5

**目前狀態：完整可執行專案已重建；模型與外部服務正式驗收證據尚待在可連外的課程環境執行。**

## 原始基底

Repository：`kaochenlong/ai-agent-js-v8`  
指定分支：`5.1-agents-md`  
鎖定 commit：`a2f4bc28e25089c90e9eecccb1b511d6ce9c8b5b`

本資料夾已整理為可獨立安裝與執行的繳交專案；`BASELINE.md` 記錄指定 branch、commit 與本題修改。

## 選擇與實作

只在原 main.js 新增 SQL Agent 與 handoffs 成員，並修改此專案根目錄唯一生效的 AGENTS.md。原三位老師、Python 書籍 RAG、YouBike、Netflix、Tenlong MCP 都保留。

## 安裝及環境

在此題專案根目錄執行 `npm install`，複製原 `.env.example` 為 `.env`，只在公司核准的本機環境填入仍有效的授權金鑰。不要貼進程式、README、截圖或版本控制。課程原模型名稱保留；帳號無存取權、金鑰失效、額度或連線有問題時，記錄錯誤並停止，不持續重跑。

## 驗收方式

務必先 `cd` 到本題專案根目錄（`homework5-sql-teacher`），再執行 `npm start`。啟動印出的 `[AGENTS.md] 已載入 ...` 應指向此處的 `AGENTS.md`，不要從外層直接跑 `node src/hw5/main.js`。

測三種問題：

1. 「請用 SQL 依 customer_id 統計 SUM(amount)，並解釋 GROUP BY。」預期 SQL 老師。
2. 「請解釋 Python list comprehension，給一個平方數的例子。」預期 Python 老師。
3. 「現在台灣幾點？」預期班導師自己使用時間工具。

每段都保留 SDK 實際印出的 `[由 XX 回答]`；不能把預期老師手動當成執行結果。為獨立核對三種路由，可每次結束 `exit` 再啟動新程序。原程式的 MCP 啟動与工具相依保留，不關閉來冒充原課程功能完整可用。`npm test` 執行原課程測試；其結果須另外記錄，不能與修補包的本機測試混用。

## 測試結果

修補包測試與外部服務驗收是不同範圍。本包已完成語法與靜態檢查；外部服務驗收仍需在可連外環境執行。無實測紀錄的項目維持未完成。

<!-- REAL_RESULTS_START -->
尚未執行真實服務驗收。此處沒有捏造對話、相似度分數或成功截圖。
<!-- REAL_RESULTS_END -->
