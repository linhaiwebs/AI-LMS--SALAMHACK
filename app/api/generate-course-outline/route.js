import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { db } from "@/config/db";
import { STUDY_MATERIAL_TABLE } from "@/config/schema";
import { inngest } from "@/app/inngest/client"; 
export async function POST(req) {
  try {
    const { courseId, topic, studyType, difficultyLevel, createdBy } =
      await req.json();

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const generationConfig = {
      temperature: 1,
      topP: 0.95,
      topK: 40,
      maxOutputTokens: 8192,
      responseMimeType: "application/json",
    };

    const prompt = `Generate a study material for ${topic} for ${studyType} with an  level  ${difficultyLevel} . 
    Include a course summary, a list of chapters with summaries, difficulty priority, and topic lists for each chapter.
    Format the add title to the course and add difficulty Level , output in JSON.`;

    const result = await model.generateContent({
      generationConfig,
      contents: [
        {
          role: "user",
          parts: [{ text: prompt }],
        },
      ],
    });

    const aiResponse = result.response.candidates[0].content.parts[0].text;
    const aiResponseJson = JSON.parse(aiResponse);


    const dbResult = await db.insert(STUDY_MATERIAL_TABLE).values({
      courseId,
      courseType: studyType,
      createdBy,
      topic,
      courseLayout: aiResponseJson,
    }).returning({ STUDY_MATERIAL_TABLE })
 
    const resultInngest = await inngest.send({
      name: "notes.generate",
      data: {
        course: dbResult,
      },
    });
    console.log("result Inngest" + resultInngest);
 

    return NextResponse.json({
      receivedData: {
        courseId,
        topic,
        studyType,
        difficultyLevel,
        createdBy,
      },
      aiResponseJson,
    });
  } catch (error) {
    return NextResponse.json(
      {
        error: "Failed to generate course outline",
        details: error.message,
      },
      { status: 500 }
    );
  }
}
