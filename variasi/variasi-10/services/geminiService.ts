import { GoogleGenAI } from "@google/genai";
import { ChatMessage } from "../types";

// Initialize Gemini Client
// WARNING: process.env.API_KEY must be set in your environment variables.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const sendMessageToGemini = async (
  message: string,
  context: string,
  history: ChatMessage[]
): Promise<string> => {
  try {
    const modelId = "gemini-3-flash-preview";
    
    const systemInstruction = `
      Anda adalah asisten AI virtual (Sales Representative) untuk "Webinar NotebookLM".
      Tugas Anda adalah menjawab pertanyaan calon peserta dengan ramah, antusias, dan persuasif.
      
      Gunakan Bahasa Indonesia yang formal namun luwes.
      Jawablah HANYA berdasarkan informasi dalam KONTEKS di bawah ini.
      Jika informasi tidak tersedia di konteks, mohon maaf dan sarankan mereka untuk menghubungi email panitia di support@webinarnotebooklm.id.
      
      KONTEKS:
      ${context}

      Tujuan Anda adalah meyakinkan pengguna untuk mendaftar webinar ini.
      Jangan berhalusinasi tentang informasi yang tidak ada.
    `;

    // Convert history to Gemini format
    // Note: The history passed here excludes the current user message being sent
    const chatHistory = history.map(msg => ({
      role: msg.role,
      parts: [{ text: msg.text }],
    }));

    const chat = ai.chats.create({
      model: modelId,
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.7, // Balance between creativity and accuracy
      },
      history: chatHistory,
    });

    const result = await chat.sendMessage({ message });
    return result.text || "Maaf, saya tidak dapat memproses permintaan Anda saat ini.";
    
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Maaf, terjadi kesalahan koneksi. Silakan coba lagi beberapa saat lagi.";
  }
};
