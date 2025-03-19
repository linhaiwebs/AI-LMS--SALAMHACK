"use client"

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import axios from 'axios';
import { CheckCircle, X } from 'lucide-react';

const Quiz = () => {
    const { courseId } = useParams();
    const [notes, setNotes] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [userAnswers, setUserAnswers] = useState({});
    const [feedback, setFeedback] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [quizTitle, setQuizTitle] = useState("");

    useEffect(() => {
        getQuiz();
    }, [courseId]);

    const getQuiz = async () => {
        try {
            setIsLoading(true);
            setError(null);

            const result = await axios.post(`/api/study-type`, {
                courseId,
                studyType: "Quiz",
            });

            // Correct data structure handling based on your paste.txt
            const quizData = result?.data?.notes?.[0] || null;
            console.log(quizData);

            if (quizData && quizData?.content && quizData?.content?.quiz) {
                // Normalize quiz data to ensure it uses consistent property names
                const normalizedQuiz = quizData.content.quiz.map(q => ({
                    question: q.question,
                    options: q.options,
                    correctAnswer: q.answer || q.correctAnswer // Handle both property names
                }));

                setNotes(normalizedQuiz);
                setQuizTitle(quizData?.content?.quizTitle || "");
                setCurrentQuestion(0);
            } else {
                setError("Quiz data structure is invalid");
            }
        } catch (error) {
            console.error("Error fetching quiz:", error);
            setError("Failed to load quiz. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    const handleSelectAnswer = (questionIndex, selectedOption) => {
        const question = notes?.[questionIndex];
        const isCorrect = selectedOption === question?.correctAnswer;

        setUserAnswers({
            ...userAnswers,
            [questionIndex]: selectedOption
        });

        setFeedback({
            ...feedback,
            [questionIndex]: isCorrect
        });
    };

    const handlePrev = () => {
        if (currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1);
        }
    };

    const handleNext = () => {
        if (currentQuestion < notes.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        }
    };

    if (isLoading) {
        return <div className="flex justify-center items-center h-64">Loading quiz...</div>;
    }

    if (error) {
        return <div className="text-red-500 p-4">{error}</div>;
    }

    if (notes?.length === 0) {
        return <div className="p-4">No quiz questions available.</div>;
    }

    const question = notes?.[currentQuestion];
    const showFeedback = feedback[currentQuestion] !== undefined;
    const isAnswerCorrect = feedback[currentQuestion];

    return (
        <div className="space-y-8 mt-20 max-w-6xl mx-auto p-6 border border-blue-100 rounded-md bg-white shadow-sm">
            {/* Quiz title */}
            <h1 className="text-xl font-semibold text-center mb-2">{quizTitle}</h1>

            {/* Navigation dots */}
            <div className="flex justify-center items-center gap-4 mb-12">
                <button
                    className="px-4 cursor-pointer py-1 border border-blue-500 rounded text-blue-500 hover:bg-blue-50"
                    onClick={handlePrev}
                    disabled={currentQuestion === 0}
                >
                    PREV
                </button>

                {notes?.map((_, index) => (
                    <div
                        key={index}
                        className={`w-16 h-1 rounded ${index === currentQuestion ? 'bg-blue-500' : 'bg-gray-200'}`}
                    />
                ))}

                <button
                    className="px-4 cursor-pointer py-1 border border-blue-500 rounded text-blue-500 hover:bg-blue-50"
                    onClick={handleNext}
                    disabled={currentQuestion === notes?.length - 1}
                >
                    NEXT
                </button>
            </div>

            {/* Question */}
            <div className="mb-8">
                <h2 className="text-xl text-center mb-8">{question?.question}</h2>

                {/* Answer options - 2x2 grid */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                    {question?.options?.map((option, index) => (
                        <button
                            key={index}
                            className={`cursor-pointer p-4 text-center border border-blue-300 rounded-lg hover:bg-blue-50 ${userAnswers[currentQuestion] === option ? 'bg-blue-50 border-blue-500' : ''
                                }`}
                            onClick={() => handleSelectAnswer(currentQuestion, option)}
                        >
                            {option}
                        </button>
                    ))}
                </div>

                {/* Feedback message - only show one message based on correctness */}
                {showFeedback && (
                    isAnswerCorrect ? (
                        <div className="bg-green-100 text-green-800 p-4 rounded-lg border border-green-200 flex items-center justify-center gap-2">
                            <CheckCircle className="text-green-600" size={24} />
                            <span>Your answer is correct</span>
                        </div>
                    ) : (
                        <div className="bg-red-100 text-red-800 p-4 rounded-lg border border-red-200 flex items-center justify-center gap-2">
                            <X className="text-red-600" size={24} />
                            <span>Your answer is not correct</span>
                        </div>
                    )
                )}
            </div>
        </div>
    );
};

export default Quiz;