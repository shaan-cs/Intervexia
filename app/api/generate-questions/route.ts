import Groq from "groq-sdk";
import { NextResponse } from "next/server";

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

export async function POST(req: Request) {
  try {
    const { role, topic, difficulty } = await req.json();

    // Llama-3.3-70b-versatile (Best free & fast model in 2026)
    const completion = await groq.chat.completions.create({
      messages: [
        {
          role: "system",
          content: `You are an expert ${role} examiner. Generate 10 MCQ questions for ${topic} at ${difficulty} level. Return ONLY a raw JSON array. format: [{"question":"","options":["","","",""],"correct":0,"explanation":""}]`
        },
        {
          role: "user",
          content: `Generate 10 questions for ${topic}.`
        }
      ],
      model: "llama-3.3-70b-versatile",
      response_format: { type: "json_object" } // Force JSON mode
    });

    const content = completion.choices[0]?.message?.content;
    
    if (!content) throw new Error("AI returned empty response");

    // Groq sometimes wraps in an object, let's extract the array
    const parsedData = JSON.parse(content);
    const questions = Array.isArray(parsedData) ? parsedData : parsedData.questions;

    return NextResponse.json(questions);

  } catch (error: any) {
    console.error("Groq Engine Error:", error.message);
    
    // Safety Fallback (Empty screen na dikhe)
    return NextResponse.json([
      {
        question: "Bhai, AI server busy hai. Ek baar refresh karke dekho?",
        options: ["Try Again", "Refresh", "Go Back", "Wait"],
        correct: 0,
        explanation: "API temporarily unreachable."
      }
    ]);
  }
}