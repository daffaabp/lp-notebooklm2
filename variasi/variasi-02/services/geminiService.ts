import { GoogleGenAI, Type } from "@google/genai";

// Initialize Gemini Client
// Note: process.env.API_KEY is assumed to be available in the environment
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const generateResearchGaps = async (topic: string): Promise<string[]> => {
  if (!process.env.API_KEY) {
    console.warn("API Key missing, returning mock data for demo purposes.");
    return [
      "Analisis Bibliometrik: Tren global pada topik ini dalam 5 tahun terakhir.",
      "Studi Komparatif: Perbandingan implementasi di negara berkembang vs maju.",
      "Integrasi AI: Bagaimana kecerdasan buatan dapat mengoptimalkan proses ini."
    ];
  }

  try {
    const model = "gemini-3-flash-preview";
    const prompt = `
      You are an academic research consultant for PhD and Masters students in Indonesia.
      The user is interested in the topic: "${topic}".
      
      Generate 3 specific, concise, and academically sound "Research Gap" or "Novelty" ideas related to this topic.
      Return the response as a JSON array of strings. Do not include markdown formatting like \`\`\`json.
      
      Example output format:
      ["Idea 1...", "Idea 2...", "Idea 3..."]
    `;

    const response = await ai.models.generateContent({
      model: model,
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.STRING
          }
        }
      }
    });

    const text = response.text;
    if (!text) return [];

    const ideas = JSON.parse(text) as string[];
    return ideas;

  } catch (error) {
    console.error("Gemini API Error:", error);
    return [
      "Gagal menghubungi asisten AI. Silakan coba lagi nanti.",
      "Tips: Fokus pada variabel yang belum banyak diteliti.",
      "Tips: Coba gabungkan metode kualitatif dan kuantitatif."
    ];
  }
};