import { NextResponse } from "next/server";
import OpenAI from "openai";
import { demoGenerate } from "../../../lib/demoGenerator";

function buildPrompt(topic, mode) {
  const modeMap = {
    short: "кратък, но много силен изпитен отговор",
    long: "разширена изпитна разработка",
    quiz: "тестови въпроси с верни отговори и кратки обяснения",
    cards: "флашкарти за учене"
  };

  return `Ти си StudyCash — smart study engine за студенти по медицина, дентална медицина и тежки университетски специалности.

Направи ${modeMap[mode] || modeMap.short} на български език.

Пиши подредено, изпитно и полезно. Използвай структура:
1. Определение
2. Етиология
3. Патогенеза
4. Клинична картина
5. Диагностика
6. Лечение
7. Усложнения
8. Капани на преподавателя
9. Как да го кажа на устен изпит

Не измисляй конкретни факти, ако темата не ги съдържа. Обяснявай логично и академично, но разбираемо.

Тема/материал:
${topic}`;
}

async function callGemini({ topic, mode }) {
  const model = process.env.GEMINI_MODEL || "gemini-3.1-flash-lite";
  const prompt = buildPrompt(topic, mode);

  const res = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${process.env.GEMINI_API_KEY}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [
          {
            parts: [{ text: prompt }]
          }
        ],
        generationConfig: {
          temperature: 0.35,
          maxOutputTokens: 2000
        }
      })
    }
  );

  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(errorText);
  }

  const data = await res.json();
  return data?.candidates?.[0]?.content?.parts?.map(p => p.text).join("\n") || "";
}

async function callOpenAI({ topic, mode }) {
  const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

  const completion = await client.chat.completions.create({
    model: process.env.OPENAI_MODEL || "gpt-4o-mini",
    temperature: 0.35,
    messages: [
      {
        role: "system",
        content: "Ти си StudyCash: правиш подредени учебни материали на български за студенти."
      },
      {
        role: "user",
        content: buildPrompt(topic, mode)
      }
    ]
  });

  return completion.choices?.[0]?.message?.content || "";
}

export async function POST(req) {
  try {
    const { topic, mode = "short" } = await req.json();

    if (!topic || String(topic).trim().length < 3) {
      return NextResponse.json(
        { error: "NO_TOPIC", message: "Въведи тема или текст." },
        { status: 400 }
      );
    }

    let output = "";
    let provider = "demo";

    if (process.env.GEMINI_API_KEY) {
      output = await callGemini({ topic, mode });
      provider = "gemini";
    } else if (process.env.OPENAI_API_KEY) {
      output = await callOpenAI({ topic, mode });
      provider = "openai";
    } else {
      output = demoGenerate({ topic, mode });
      provider = "demo";
    }

    return NextResponse.json({
      output,
      provider
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error: "AI_ERROR",
        message: "AI генерацията не успя. Провери GEMINI_API_KEY и GEMINI_MODEL във Vercel."
      },
      { status: 500 }
    );
  }
}
