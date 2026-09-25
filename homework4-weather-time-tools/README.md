# 作業 4：時間與天氣工具

謝宜村｜工號 0021004｜Group 5

**目前狀態：完整可執行專案已重建；模型與外部服務正式驗收證據尚待在可連外的課程環境執行。**

## 原始基底

Repository：`kaochenlong/ai-agent-js-v8`  
指定分支：`2.5-tool-calling-current-time`  
鎖定 commit：`5ca9ffc72ad4fe0a3583164d5788550047c30f8e`

本資料夾已整理為可獨立安裝與執行的繳交專案；`BASELINE.md` 記錄指定 branch、commit 與本題修改。

## 選擇與實作

只修改 function_call.js 的系統指令、問題輸入與結果顯示。保留原 weather/current_time/youbike 工具及八輪上限。

## 安裝及環境

在此題專案根目錄執行 `npm install`，複製原 `.env.example` 為 `.env`，只在公司核准的本機環境填入仍有效的授權金鑰。不要貼進程式、README、截圖或版本控制。課程原模型名稱保留；帳號無存取權、金鑰失效、額度或連線有問題時，記錄錯誤並停止，不持續重跑。

## 驗收方式

設定 OPENAI_API_KEY 與原天氣服務的 OPENWEATHER_API_KEY。每次只執行一次：

```powershell
node function_call.js "現在幾點？"
node function_call.js "台北天氣如何？"
node function_call.js "現在幾點？台北天氣好嗎？"
```

逐項核對模型實際選擇：第一題時間工具、第二題天氣工具、第三題兩個工具皆有且回答整合結果。不要強制 tool_choice 或手動代印成功標籤。工具失敗應記錄失敗；不可用假天氣代替。把三題實際終端輸出貼在下方。

## 測試結果

修補包測試與外部服務驗收是不同範圍。本包已完成語法與靜態檢查；外部服務驗收仍需在可連外環境執行。無實測紀錄的項目維持未完成。

<!-- REAL_RESULTS_START -->
尚未執行真實服務驗收。此處沒有捏造對話、相似度分數或成功截圖。
<!-- REAL_RESULTS_END -->
