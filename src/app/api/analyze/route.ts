// src/app/api/analyze/route.ts
import { NextResponse } from "next/server";
import { openai } from "@/lib/openai";
import fs from "fs";
import path from "path";

// ✅ Memoize the prompt content
const promptTemplate = fs.readFileSync(
    path.join(process.cwd(), "src", "prompts", "analyze-resume.prompt.txt"),
    "utf-8"
  );

export async function POST(req: Request) {
  const { resume, jobDescription, tones } = await req.json();

  if (!resume || !jobDescription) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  const finalPrompt = promptTemplate
    .replace("{{resume}}", resume)
    .replace("{{jobDescription}}", jobDescription)
    .replace("{{tone}}", tones?.join(", ") || "Professiqonal");

    try {
        const completion = await openai.chat.completions.create({
            model: "meta-llama/llama-3.3-8b-instruct:free",
          messages: [
            {
              role: "system",
              content: "You are a helpful AI career assistant.",
            },
            {
              role: "user",
              content: finalPrompt,
            },
          ],
        });
      
        console.log("Completion:", JSON.stringify(completion, null, 2));
        const content = completion.choices[0].message.content;
        return NextResponse.json({ result: content });
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        console.error("OpenAI error:", error);
        return NextResponse.json({ error: "AI analysis failed." }, { status: 500 });
      }
}
