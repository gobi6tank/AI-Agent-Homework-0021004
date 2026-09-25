# Evidence

## 實際驗收結果

### 測試 1：時間
問題：`現在幾點？`

實際呼叫：

    [呼叫 tool] get_current_time({})

結果：成功取得台灣目前時間。

### 測試 2：天氣
問題：`台北天氣如何？`

實際呼叫：

    [呼叫 tool] get_weather({"city":"Taipei"})

工具結果包含：
- temperature: 25.73
- humidity: 63
- description: 晴

### 測試 3：時間 + 天氣
問題：`現在幾點？台北天氣好嗎？`

同一輪實際呼叫：

    [呼叫 tool] get_current_time({})
    [呼叫 tool] get_weather({"city":"Taipei"})

AI 成功將時間與台北天氣整合成一個回答。

### 截圖證據

![HW4 Weather and Time Tools](evidence/hw4-weather-time-tools.png)

### 驗收結論

- 時間問題會選擇時間工具
- 天氣問題會選擇天氣工具
- 同時詢問時間與天氣時，會呼叫兩個工具
- AI 能整合兩個工具結果後回答