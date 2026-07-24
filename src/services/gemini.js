import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: import.meta.env.VITE_GEMINI_API_KEY,
});


export async function askGemini(prompt) {

  try {

    const response = await ai.models.generateContent({

      model: "gemini-3.5-flash-lite",

      contents: prompt,

    });


    return response.text;


  } catch (error) {

    console.error("Gemini Error:", error);


    if (error.message.includes("503")) {

      return "Gemini is busy right now. Please try again after a few seconds.";

    }


    return error.message;

  }

}