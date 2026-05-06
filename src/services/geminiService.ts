import { GoogleGenAI, Type } from "@google/genai";
import { Club, QuizAnswer, MatchResult } from "../types";
import { CLUBS } from "../constants";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || '' });

export const getClubMatches = async (answers: QuizAnswer[]): Promise<MatchResult[]> => {
  if (!process.env.GEMINI_API_KEY) {
    console.error("GEMINI_API_KEY is missing");
    // Fallback logic if API key is missing for some reason
    return [
      { clubId: CLUBS[0].id, explanation: "Since we couldn't connect to our AI compass, we recommend our most popular club!" }
    ];
  }

  const prompt = `
    You are "The Social Compass", an AI club matchmaker for students.
    Based on the student's quiz answers, your goal is to find the best-matched clubs from the list below.
    
    Student Answers:
    ${answers.map(a => `- Question ID ${a.questionId}: Selected "${a.answer}"`).join('\n')}
    
    Available Clubs:
    ${CLUBS.map(c => `- ID: ${c.id}, Name: ${c.name}, Tags: ${c.tags.join(', ')}, Description: ${c.description}`).join('\n')}
    
    Instructions:
    1. Select the top 3 best-matched clubs for this student.
    2. For each club, write a short, friendly, and persuasive explanation (1-2 sentences) of why it's a great fit for them, referencing their interests.
    3. Return the results strictly in the specified JSON format.
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              clubId: { type: Type.STRING },
              explanation: { type: Type.STRING }
            },
            required: ["clubId", "explanation"]
          }
        }
      }
    });

    const result = JSON.parse(response.text || "[]");
    return result;
  } catch (error) {
    console.error("Error fetching club matches:", error);
    return [
      { clubId: CLUBS[0].id, explanation: "We ran into a slight detour with the AI, but the Robotics club is always a solid start!" }
    ];
  }
};
