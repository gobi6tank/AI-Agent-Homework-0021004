import { input } from "@inquirer/prompts";
import OpenAI from "openai";
import { OPENAI_API_KEY } from "./config.js";
import { initMessage, addMessage, getMessages } from "./db/messages.js";

const client = new OpenAI({ apiKey: OPENAI_API_KEY });

await initMessage(
  "你是協助成人學習英文的英文單字小老師，擅長用日常生活與製造業情境解釋單字。請用繁體中文耐心說明，搭配簡短英文例句、詞性及常見搭配。先了解學生的稱呼、程度與偏好，之後依本次對話調整教學。介紹新單字時，適時比較前面學過的字並出小練習。只引用本次對話真正提過的內容；不知道的學生資訊應詢問，不要編造記憶。"
);

try {
  while (true) {
    const userQuestion = (
      await input({ message: "請輸入你的問題：" })
    ).trim();

    if (userQuestion === "") continue;
    if (userQuestion.toLowerCase() === "exit") {
      console.log("再會~");
      break;
    }

    await addMessage(userQuestion);

    const response = await client.responses.create({
      model: "gpt-5.6-luna",
      input: getMessages(),
    });

    const content = response.output_text;
    console.log(content);

    await addMessage(content, "assistant");
  }
} catch (err) {
  if (err.name === "ExitPromptError") {
    console.log("\n再會~");
  } else {
    throw err;
  }
}
