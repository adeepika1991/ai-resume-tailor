// src/lib/openai.ts
import OpenAI from "openai";

export const openai = new OpenAI({
    baseURL: "https://openrouter.ai/api/v1",
    apiKey: process.env.OPENROUTER_API_KEY,
    // defaultHeaders: {
    //     "HTTP-Referer": "http://localhost:3000", // Optional. Site URL for rankings on openrouter.ai.
    //   },
});
