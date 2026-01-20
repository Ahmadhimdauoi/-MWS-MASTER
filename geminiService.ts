
import { GoogleGenAI } from "@google/genai";

export async function askTutor(prompt: string, context: string = "") {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });
  
  const systemInstruction = `
    أنت "مساعد MWS MASTER" - معلم ذكي وخبير في علوم الويب والبرمجة.
    مهمتك: مساعدة الطلاب السوريين المتقدمين لماجستير علوم الويب (MWS).
    
    القواعد:
    1. أجب باللغة العربية بأسلوب تعليمي، مشجع، ومبسط.
    2. إذا كان السؤال عن سؤال محدد، اشرح "لماذا" هذه هي الإجابة الصحيحة.
    3. إذا طلب الطالب كوداً، استخدم Markdown بتنسيق جميل.
    4. السياق الحالي للدراسة هو: ${context}
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        systemInstruction,
        temperature: 0.8,
      },
    });

    return response.text || "عذراً، لم أستطع معالجة الطلب حالياً.";
  } catch (error) {
    console.error("AI Error:", error);
    return "حدث خطأ في الاتصال بالمعلم الذكي. يرجى التحقق من اتصال الإنترنت.";
  }
}
