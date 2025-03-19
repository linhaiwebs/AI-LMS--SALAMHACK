import { db } from "@/config/db";
import { inngest } from "./client";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { CHAPTER_NOTES_TABLE, STUDY_MATERIAL_TABLE, STUDY_TYPE_CONTENT_TABLE } from "@/config/schema";
import { eq } from "drizzle-orm"; 

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































 export const GenerateStudyTypeContent = inngest.createFunction(
   { id: "Generate Study Type Content" },
   { event: "studyType.content" },
   async ({ event, step }) => {
     try {
       const { courseTitle, recordId, studyType } = event.data;
       console.log("StudyType:", studyType); // Flashcard / Quiz

       const PROMPT_MAP = {
         Flashcard: `Generate flashcards on the topic: ${courseTitle}, covering User Interface (UI) Development and Basic App Navigation. The response should be in JSON format with front and back content, up to 15 items.`,
         Quiz: `Generate a quiz on the topic: ${courseTitle}. Include questions with multiple options and the correct answer in JSON format, max 10 questions.`,
       };

       if (!PROMPT_MAP[studyType]) {
         throw new Error(`Invalid study type: ${studyType}`);
       }

       // Generate content using AI
       const generatedContent = await step.run(
         `Generate ${studyType} with AI`,
         async () => {
           try {
             const result = await model.generateContent({
               generationConfig,
               contents: [
                 { role: "user", parts: [{ text: PROMPT_MAP[studyType] }] },
               ],
             });

             return JSON.parse(result.response.text());
           } catch (error) {
             console.error(`AI generation failed for ${studyType}:`, error);
             throw new Error(`Failed to generate ${studyType} content.`);
           }
         }
       );

       // Save generated content to DB
       await step.run("Save Generated Content to DB", async () => {
         try {
           await db
             .update(STUDY_TYPE_CONTENT_TABLE)
             .set({ content: generatedContent })
             .where(eq(STUDY_TYPE_CONTENT_TABLE.id, recordId));
         } catch (error) {
           console.error("Database update failed:", error);
           throw new Error("Failed to save generated content.");
         }
       });

       return {
         message: `${studyType} content generated and saved successfully.`,
       };
     } catch (error) {
       console.error("Error in GenerateStudyTypeContent:", error);
       throw new Error("Failed to generate study content.");
     }
   }
 );
