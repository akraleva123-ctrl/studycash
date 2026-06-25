import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import OpenAI from "openai";
import { demoGenerate } from "../../../lib/demoGenerator";

const FREE_LIMIT = 5;

export async function POST(req) {
  try {
    const { topic, mode = "short" } = await req.json();

    if (!topic || String(topic).trim().length < 3) {
      return NextResponse.json({ error: "NO_TOPIC", message: "Въведи тема или текст." }, { status: 400 });
    }

    const cookieStore = cookies();
    const paid = cookieStore.get("studycash_paid")?.value;
    const used = Number(cookieStore.get("studycash_used")?.value || "0");

    if (!paid && used >= FREE_LIMIT) {
      return NextResponse.json({ error: "FREE_LIMIT_REACHED", message: "Free лимитът свърши." }, { status: 402 });
    }

    let output = "";
    let demo = false;

    if (!process.env.OPENAI_API_KEY) {
      output = demoGenerate({ topic, mode });
      demo = true;
    } else {
      const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
      const completion = await client.chat.completions.create({
        model: process.env.OPENAI_MODEL || "gpt-4o-mini",
        temperature: 0.35,
        messages: [
          {
            role: "system",
            content: "Ти си StudyCash: правиш подредени учебни материали на български за студенти. Пиши ясно, изпитно, без измислени факти. Ако липсва информация, кажи какво липсва."
          },
          {
            role: "user",
            content: `Тип резултат: ${mode}. Материал/тема: ${topic}`
          }
        ]
      });
      output = completion.choices?.[0]?.message?.content || demoGenerate({ topic, mode });
    }

    const response = NextResponse.json({ output, demo });

    if (!paid) {
      response.cookies.set("studycash_used", String(used + 1), {
        httpOnly: true,
        sameSite: "lax",
        secure: process.env.NODE_ENV === "production",
        maxAge: 60 * 60 * 24 * 365
      });
    }

    return response;
  } catch (error) {
    return NextResponse.json({
      error: "SERVER_ERROR",
      message: "Сървърна грешка при генерацията."
    }, { status: 500 });
  }
}
