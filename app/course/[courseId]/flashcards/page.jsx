"use client";

import axios from "axios";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Flashcards = () => {
    const { courseId } = useParams();
    const [flashcardData, setFlashcardData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [currentCardIndex, setCurrentCardIndex] = useState(0);
    const [flipped, setFlipped] = useState(false);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        if (courseId) {
            getFlashcard();
        }
    }, [courseId]);

    const getFlashcard = async () => {
        try {
            const result = await axios.post(`/api/study-type`, {
                courseId,
                studyType: "Flashcard",
            });
            setFlashcardData(result.data);
            if (result.data?.notes?.[0]?.content?.flashcards?.length > 0) {
                updateProgress(0);
            }
        } catch (error) {
            console.error("Error fetching flashcards:", error);
        } finally {
            setLoading(false);
        }
    };

    const getFlashcards = () => {
        return flashcardData?.notes?.[0]?.content?.flashcards || [];
    };

    const flashcards = getFlashcards();
    const totalCards = flashcards.length;
    const currentCard = totalCards > 0 ? flashcards[currentCardIndex] : null;

    const handleNext = () => {
        if (totalCards > 0) {
            setCurrentCardIndex((prev) => (prev + 1) % totalCards);
            setFlipped(false);
            updateProgress((currentCardIndex + 1) % totalCards);
        }
    };

    const handlePrevious = () => {
        if (totalCards > 0) {
            setCurrentCardIndex((prev) => (prev === 0 ? totalCards - 1 : prev - 1));
            setFlipped(false);
            updateProgress(currentCardIndex === 0 ? totalCards - 1 : currentCardIndex - 1);
        }
    };

    const updateProgress = (index) => {
        setProgress(((index + 1) / totalCards) * 100);
    };

    const toggleFlip = () => {
        setFlipped(!flipped);
    };

    if (loading) {
        return <div className="text-center text-lg py-10">Loading flashcards...</div>;
    }

    if (!totalCards) {
        return (
            <div className="text-center p-6 bg-gray-100 rounded-lg">
                <h2 className="text-xl font-semibold">No Flashcards Available</h2>
                <p>There are no flashcards for this course yet.</p>
            </div>
        );
    }

    return (
        <div className="max-w-3xl mx-auto mt-10 p-6">
            <h1 className="text-2xl font-bold mb-6">Flashcards</h1>
            <div className="w-full bg-gray-200 rounded-full h-2.5 mb-6">
                <div className="bg-blue-600 h-2.5 rounded-full transition-all" style={{ width: `${progress}%` }}></div>
            </div>
            <div className="text-sm text-gray-500 mb-4 flex justify-between">
                <span>Card {currentCardIndex + 1} of {totalCards}</span>
                <span>Click card to flip</span>
            </div>

            {/* Flashcard container with perspective */}
            <div
                className="relative w-full aspect-[3/2] mb-6 cursor-pointer"
                onClick={toggleFlip}
                style={{ perspective: "1000px" }}
            >
                <div
                    className="relative w-full h-full transition-all duration-500"
                    style={{
                        transformStyle: "preserve-3d",
                        transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)"
                    }}
                >
                    {/* Front Side */}
                    <Card
                        className="absolute inset-0 flex items-center justify-center p-8 text-xl font-medium text-center text-white bg-purple-700"
                        style={{ backfaceVisibility: "hidden" }}
                    >
                        {currentCard?.front || "No Question"}
                    </Card>

                    {/* Back Side */}
                    <Card
                        className="absolute inset-0 flex items-center justify-center p-8 text-xl font-medium text-center text-white bg-blue-700"
                        style={{
                            backfaceVisibility: "hidden",
                            transform: "rotateY(180deg)"
                        }}
                    >
                        {currentCard?.back || "No Answer"}
                    </Card>
                </div>
            </div>

            <div className="flex gap-4 mt-8">
                <Button onClick={handlePrevious} variant="outline">Previous</Button>
                <Button onClick={handleNext}>Next</Button>
            </div>
        </div>
    );
};

export default Flashcards;