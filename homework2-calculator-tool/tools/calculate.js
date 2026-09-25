import { z } from "zod";
import { defineTool } from "../utils/func-tool.js";
import { calculateExpression } from "./arithmetic.js";

export const calculateTool = defineTool({
  name: "calculate",
  description: "進行數學計算，支援四則運算、括號、小數與負數；折扣請改成乘法，不支援百分號、次方或隱式乘法。",
  parameters: z.object({
    expression: z.string().min(1).max(200).describe("算式，例如 10 + 5 * 2"),
  }),
  fn: ({ expression }) => {
    try {
      return { expression, result: calculateExpression(expression) };
    } catch (err) {
      return { expression, error: err.message };
    }
  },
});
