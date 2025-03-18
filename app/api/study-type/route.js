import { db } from "@/config/db";
import { CHAPTER_NOTES_TABLE } from "@/config/schema";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { courseId, studyType } = await req.json();

    if (!courseId || !studyType) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    if (studyType === "ALL") {
      const notes = await db
        .select()
        .from(CHAPTER_NOTES_TABLE)
        .where(eq(CHAPTER_NOTES_TABLE.courseId, courseId));

      return NextResponse.json({
        notes,
        flashcard: null,
        quiz: null,
        qa: null,
      });
    } else if (studyType === "notes") {
        const notes = await db
          .select()
          .from(CHAPTER_NOTES_TABLE)
        .where(eq(CHAPTER_NOTES_TABLE.courseId, courseId));
      
    return NextResponse.json({notes});
    }

    return NextResponse.json({ error: "Invalid studyType" }, { status: 400 });
  } catch (error) {
    console.error("Error fetching data:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
