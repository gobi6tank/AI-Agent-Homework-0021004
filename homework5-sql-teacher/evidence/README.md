# Evidence

## 實際 Agent Handoff 驗收結果

### 測試 1：SQL 問題

問題：

`請用 SQL 依 customer_id 統計 SUM(amount)，並解釋 GROUP BY。`

結果：

`[由 SQL 老師 回答]`

判定：SQL 問題成功 handoff 給 SQL 老師。

---

### 測試 2：Python 問題

問題：

`請解釋 Python list comprehension，並給一個平方數的例子。`

結果：

`[由 Python 老師 回答]`

判定：Python 問題成功 handoff 給原本的 Python 老師。

---

### 測試 3：班導師自己處理

問題：

`現在台灣幾點？`

結果：

`[由 班導師 回答]`

判定：時間問題沒有被錯誤轉交給 SQL 老師，班導師自行處理。

---

### 截圖證據

![HW5 SQL Handoff](evidence/hw5-sql-handoff.png)

![HW5 Python Handoff](evidence/hw5-python-handoff.png)

![HW5 Homeroom Time](evidence/hw5-homeroom-time.png)

### 驗收結論

- 新增的 SQL 老師可正確接收 SQL / 資料庫問題
- Python 問題仍交給 Python 老師
- 工具型問題仍由班導師自行處理
- `AGENTS.md` 的 routing 規則已實際生效