import { readFile, readdir } from "node:fs/promises";
import { join } from "node:path";
import assert from "node:assert/strict";

const root = process.cwd();
async function text(path) { return readFile(join(root, path), "utf8"); }

const hw1 = await text("homework1-role-chatbot/main.js");
assert(hw1.includes("英文單字小老師"));
assert(hw1.length > 50);

const hw2Index = await text("homework2-calculator-tool/tools/index.js");
const hw2Tool = await text("homework2-calculator-tool/tools/calculate.js");
assert(hw2Index.includes('calculateTool'));
assert(hw2Tool.includes('name: "calculate"'));
assert(hw2Tool.includes('z.object'));

const languages = JSON.parse(await text("homework3-mini-knowledge-base/data/languages.json"));
assert.equal(languages.length, 5);
assert.equal(new Set(languages.map(x => x.id)).size, 5);

const hw4 = await text("homework4-weather-time-tools/function_call.js");
assert(hw4.includes("get_current_time"));
assert(hw4.includes("get_weather"));

const hw5 = await text("homework5-sql-teacher/main.js");
const agents = await text("homework5-sql-teacher/AGENTS.md");
assert(hw5.includes('name: "SQL 老師"'));
assert(hw5.includes("sqlTeacher"));
assert(agents.includes("SQL 老師"));

console.log("STATIC_VALIDATION_OK");
