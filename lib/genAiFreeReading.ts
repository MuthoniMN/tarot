import { GoogleGenAI } from "@google/genai";

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

if (!GEMINI_API_KEY) {
    throw new Error("GEMINI_API_KEY environment variable is not set");
}

const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

export async function generateFreeReading(prompt: string): Promise<string> {
    try {
        const response = await ai.models.generateContent({
            model: "gemini-2.0-flash-001",
            contents: prompt,
        });

        return response.text;
    } catch (error) {
        console.error("Error generating free reading:", error);
        throw new Error("Failed to generate free reading");
    }
}
