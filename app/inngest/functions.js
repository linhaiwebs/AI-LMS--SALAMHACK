import { db } from "@/config/db";
import { inngest } from "./client";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { CHAPTER_NOTES_TABLE, STUDY_MATERIAL_TABLE } from "@/config/schema";
import { eq } from "drizzle-orm";
import { v4 as uuidv4 } from "uuid"; // Import UUID generator

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};

export const GenerateNotes = inngest.createFunction(
  { id: "generate-course" },
  { event: "notes.generate" },
  async ({ event, step }) => {
    let { course } = event.data;

   const studyMaterialTable = course?.[0]?.STUDY_MATERIAL_TABLE;
   const chapters = studyMaterialTable?.courseLayout?.chapters;
   if (!chapters || chapters.length === 0) {
     console.log("No chapters found.");
   } else {
     console.log("Chapters found:", chapters);
   }
      const notesResult = await step.run("Generate Chapter Notes", async () => {
        if (!chapters.length) {
          
          console.log(course?.STUDY_MATERIAL_TABLE?.courseLayout?.chapters);
          return "No chapters found";
        }

        const results = [];

        for (const chapter of chapters) {
          try {
            const chapterId = parseInt(`${Date.now()}${results.length + 1}`);
            const PROMPT = `
            Generate detailed exam material content for the following chapter.
            Ensure all topics are included and format the content in HTML.
            (Do not add <html>, <head>, <body>, or <title> tags).
            Chapter Details: ${JSON.stringify(chapter)}
          `;

            const result = await model.generateContent({
              generationConfig,
              contents: [{ role: "user", parts: [{ text: PROMPT }] }],
            });

            const aiResponse =
              result.response?.candidates?.[0]?.content?.parts?.[0]?.text || "";
            
const courseId = course[0]?.STUDY_MATERIAL_TABLE?.courseId;

if (!courseId) {
  console.error("Error: courseId is undefined or null");
  return;
}

await db.insert(CHAPTER_NOTES_TABLE).values({
  chapterId: Date.now(),
  courseId: courseId,  
  notes: aiResponse,
});
            results.push({ chapterId: chapterId, status: "success" });
          } catch (error) {
            console.error(`Error processing chapter:`, error);
            results.push({
              chapterId: "unknown",
              status: "failed",
              error: error.message || "Unknown error",
            });
          }
        }

        return results;
      });
 
      const updateCourseStatusResult = await step.run(
        "Update Course Status to Ready",
        async () => {
          try {
            await db
              .update(STUDY_MATERIAL_TABLE)
              .set({ status: "Ready" })
              .where(eq(STUDY_MATERIAL_TABLE.courseId, course.courseId));

            return "Success";
          } catch (error) {
            console.error("Error updating course status:", error);
            return { status: "failed", error: error.message || "Unknown error" };
          }
        }
      );

      return { notesResult, updateCourseStatusResult };
    }
 
);
