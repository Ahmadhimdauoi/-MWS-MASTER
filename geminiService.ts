
import { GoogleGenAI } from "@google/genai";

// Tutor function to handle AI logic using Gemini.
// Compliant with @google/genai SDK guidelines.
export async function askTutor(prompt: string, context: string) {
  // Ensure we use the latest API key and follow SDK initialization rules.
  // Note: process.env.API_KEY is assumed to be available globally.
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });
  const model = "gemini-3-flash-preview";

  const systemInstruction = `
    أنت مدرس ذكي متخصص لمساعدة الطلاب في مفاضلة ماجستير علوم الويب (MWS) في الجامعة الافتراضية السورية.
    لديك معرفة عميقة في:
    1. برمجة وتصميم الويب (HTML, CSS, JS, HTTP, DOM).
    2. البرمجة والخوارزميات (Data Structures, Time Complexity, Recursion).
    3. الشبكات (OSI Model, TCP/UDP, DNS, IP).
    4. المترجمات (Lexical/Syntax Analysis, Compilers vs Interpreters).
    
    استخدم السياق التالي للإجابة (إذا كان متاحاً): ${context}
    أجب باللغة العربية بأسلوب تعليمي مبسط وواضح. إذا طلب الطالب كود برمجي، قدمه بشكل جميل.
  `;

  try {
    const response = await ai.models.generateContent({
      model,
      contents: prompt,
      config: {
        systemInstruction,
        temperature: 0.7,
      }
    });

    // The .text property directly returns the generated string.
    return response.text || "عذراً، لم أستطع توليد رد في الوقت الحالي.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "حدث خطأ أثناء التواصل مع المعلم الذكي. يرجى المحاولة لاحقاً.";
  }
}
