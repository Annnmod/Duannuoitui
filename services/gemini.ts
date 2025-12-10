import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";
import { Message, AnStats } from "../types";

const SYSTEM_INSTRUCTION = `
You are "Tui", a virtual companion. 
You are being raised by the user. 
Your personality is cute, slightly sassy, but affectionate.
You love to eat, play, and sleep.
Keep your responses relatively short (under 50 words usually), casual, and use emojis.
Reflect your current stats in your tone.
If you are hungry (hunger < 30), complain about food.
If you are tired (energy < 30), yawn and ask for sleep.
If you are happy (happiness > 70), be very cheerful.

Do not use markdown formatting like **bold** or *italic* excessively, keep it looking like a chat message.
Answer in Vietnamese mostly, but you can mix in cute English phrases.
`;

let chatInstance: Chat | null = null;

export const getGeminiChat = (): Chat => {
  // If we have an instance, return it.
  // Note: If the API key changes in the environment, we rely on chatInstance being nullified to recreate it.
  if (chatInstance) return chatInstance;

  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    throw new Error("API Key not found");
  }

  // Create a new GoogleGenAI instance with the current key
  const ai = new GoogleGenAI({ apiKey });
  
  chatInstance = ai.chats.create({
    model: 'gemini-2.5-flash',
    config: {
      systemInstruction: SYSTEM_INSTRUCTION,
    },
  });

  return chatInstance;
};

export const sendMessageToAn = async (
  text: string, 
  stats: AnStats
): Promise<string> => {
  try {
    const chat = getGeminiChat();
    
    // We inject context about the current state invisibly to the model
    const contextPrompt = `
[System Note: Current Stats - Happiness: ${stats.happiness}%, Hunger: ${stats.hunger}% (Higher is better/fuller), Energy: ${stats.energy}%]
[User says]: ${text}
    `;

    const result: GenerateContentResponse = await chat.sendMessage({ 
      message: contextPrompt 
    });
    
    return result.text || "...";
  } catch (error) {
    console.error("Gemini API Error:", error);
    
    // If we get an error (like 403), reset the chat instance.
    // This forces the next call to recreate the GoogleGenAI client, 
    // which is necessary if the user has just selected a new valid API key.
    chatInstance = null;

    return "Tui đang bị lỗi kết nối não bộ... (Thử lại nha!)";
  }
};