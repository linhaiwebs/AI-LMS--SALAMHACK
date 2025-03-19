"use client";

import React, { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import axios from "axios";
import { CheckCircle, X, Loader2, ArrowLeft, Award, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

const Quiz = () => {
    const { courseId } = useParams();
    const router = useRouter();
    const [quizData, setQuizData] = useState(null);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [userAnswers, setUserAnswers] = useState({});
    const [feedback, setFeedback] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [quizStatus, setQuizStatus] = useState("Generating");
    const [error, setError] = useState(null);
    const [showResults, setShowResults] = useState(false);

    useEffect(() => {
        fetchQuiz();
        let attemptCount = 0;
        const maxAttempts = 5;
        let intervalId;
        intervalId = setInterval(() => {
            attemptCount++;
            if (attemptCount < maxAttempts) {
                fetchQuiz();
            } else {
                clearInterval(intervalId);
                console.log("Quiz polling completed after 5 attempts");
            }
        }, 5000);

        return () => {
            if (intervalId) clearInterval(intervalId);
        };
    }, [quizStatus]);

    const fetchQuiz = async () => {
        try {
            setIsLoading(true);
            setError(null);

            const response = await axios.post(
                "/api/study-type",
                {
                    courseId,
                    studyType: "Quiz",
                    _t: Date.now(),
                },
                {
                    headers: {
                        "Cache-Control": "no-cache",
                        Pragma: "no-cache",
                    },
                }
            );

            const quizResponse = response?.data?.notes?.[0];

            console.log(response?.data?.notes?.[0])
            // { id: 47, courseId: '6e6f6a4f-5b84-4561-a126-2ced92dd3a92', content: {… }, type: 'Quiz', status: 'Ready' }

            console.log(quizResponse.status)
            //    Ready
            if (!quizResponse) {
                setError("No quiz data found");
                return;
            }

            setQuizStatus(quizResponse.status);

            if (quizResponse.status === "Ready" && quizResponse?.content?.quiz?.questions?.length > 0) {
                console.log(quizResponse.content.quiz)
                setQuizData(quizResponse.content.quiz);
                setCurrentQuestion(0);
                setUserAnswers({});
                setFeedback({});
                setShowResults(false);
            }
        } catch (error) {
            console.error("Error fetching quiz:", error);
            setError("Failed to load quiz. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    const handleSelectAnswer = (questionIndex, selectedOption) => {
        const question = quizData.questions[questionIndex];
        const isCorrect = selectedOption === question?.answer;

        setUserAnswers((prev) => ({ ...prev, [questionIndex]: selectedOption }));
        setFeedback((prev) => ({ ...prev, [questionIndex]: isCorrect }));
    };

    const handleShowResults = () => {
        setShowResults(true);
    };

    const handleRestartQuiz = () => {
        setUserAnswers({});
        setFeedback({});
        setCurrentQuestion(0);
        setShowResults(false);
    };

    const calculateScore = () => {
        if (!quizData) return { score: 0, total: 0, percentage: 0 };

        const correctAnswers = Object.values(feedback).filter(Boolean).length;
        const totalQuestions = quizData.questions.length;
        const percentage = totalQuestions > 0 ? Math.round((correctAnswers / totalQuestions) * 100) : 0;

        return {
            score: correctAnswers,
            total: totalQuestions,
            percentage
        };
    };

    const getResultMessage = (percentage) => {
        if (percentage >= 90) return "Excellent! You've mastered this material.";
        if (percentage >= 75) return "Great job! You have a strong understanding.";
        if (percentage >= 60) return "Good work! You're on the right track.";
        return "Keep practicing! You'll improve with more study.";
    };

    if (isLoading) {
        return (
            <div className="flex flex-col justify-center items-center h-64 space-y-4">
                <Loader2 className="animate-spin w-8 h-8 text-blue-500" />
                <span className="text-lg font-medium">Loading quiz...</span>
            </div>
        );
    }

    if (error) {
        return (
            <div className="max-w-6xl mx-auto p-6 bg-white border border-red-100 rounded-md shadow-sm">
                <div className="text-red-500 p-4 flex flex-col items-center">
                    <X size={48} className="text-red-500 mb-2" />
                    <p className="text-lg font-medium">{error}</p>
                    <Button onClick={fetchQuiz} className="mt-4">
                        Try Again
                    </Button>
                </div>
            </div>
        );
    }

    if (quizStatus === "Generating") {
        return (
            <div className="max-w-6xl mx-auto p-6 bg-white border border-blue-100 rounded-md shadow-sm">
                <div className="flex flex-col items-center justify-center h-64 space-y-4">
                    <Loader2 className="animate-spin w-8 h-8 text-blue-500" />
                    <span className="text-lg font-medium">Generating Quiz Questions...</span>
                    <p className="text-gray-600">This may take a minute.</p>
                    <Progress value={45} className="w-64" />
                </div>
            </div>
        );
    }
    if (!quizData || quizData?.questions?.length === 0) {
        return (
            <div className="max-w-6xl mx-auto p-6 bg-white border border-blue-100 rounded-md shadow-sm">
                <div className="p-4 text-center">
                    <p className="text-lg font-medium">No quiz questions available.</p>
                    <Button onClick={fetchQuiz} className="mt-4">
                        Reload Quiz
                    </Button>
                </div>
            </div>
        );
    }

    if (showResults) {
        const { score, total, percentage } = calculateScore();
        const resultMessage = getResultMessage(percentage);
        const answeredQuestions = Object.keys(userAnswers).length;
        const allQuestionsAnswered = answeredQuestions === total;

        return (
            <div className="max-w-6xl mx-auto p-6 bg-white border border-blue-100 rounded-md shadow-sm">
                <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => router.push(`/course/${courseId}`)}
                    className="flex items-center gap-1 text-gray-600 hover:text-gray-900 mb-6"
                >
                    <ArrowLeft size={16} />
                    <span>Back to Course</span>
                </Button>

                <div className="flex flex-col items-center justify-center py-8">
                    <Award size={64} className={`${percentage >= 75 ? "text-yellow-500" : "text-blue-500"} mb-4`} />
                    <h1 className="text-2xl font-bold mb-2">Quiz Results</h1>
                    <p className="text-lg font-medium mb-6">{resultMessage}</p>

                    <div className="bg-gray-100 rounded-lg p-6 w-full max-w-md mb-8">
                        <div className="flex justify-between items-center mb-2">
                            <span className="text-lg font-medium">Score:</span>
                            <span className="text-lg font-bold">{score}/{total}</span>
                        </div>
                        <div className="mb-4">
                            <Progress value={percentage} className="h-4" />
                            <div className="flex justify-end mt-1">
                                <span className="text-sm font-medium">{percentage}%</span>
                            </div>
                        </div>
                        {!allQuestionsAnswered && (
                            <p className="text-sm text-amber-600">
                                Note: You answered {answeredQuestions} out of {total} questions.
                            </p>
                        )}
                    </div>

                    <h2 className="text-xl font-semibold mb-4">Question Summary</h2>
                    <div className="w-full max-w-2xl space-y-4 mb-8">
                        {quizData.questions.map((question, index) => (
                            <div key={index} className="border rounded-lg p-4">
                                <div className="flex items-start gap-3">
                                    <div className="mt-1">
                                        {feedback[index] === undefined ? (
                                            <div className="w-6 h-6 rounded-full bg-gray-300 flex items-center justify-center text-xs font-bold text-white">
                                                {index + 1}
                                            </div>
                                        ) : feedback[index] ? (
                                            <CheckCircle size={24} className="text-green-600" />
                                        ) : (
                                            <X size={24} className="text-red-600" />
                                        )}
                                    </div>
                                    <div className="flex-1">
                                        <p className="font-medium">{question.question}</p>
                                        {userAnswers[index] && (
                                            <div className="mt-2">
                                                <p className="text-sm text-gray-600">Your answer:</p>
                                                <p className={`text-sm font-medium ${feedback[index] ? "text-green-600" : "text-red-600"}`}>
                                                    {userAnswers[index]}
                                                </p>
                                                {!feedback[index] && (
                                                    <p className="text-sm text-green-600 mt-1">
                                                        Correct answer: {question.answer}
                                                    </p>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="flex gap-4">
                        <Button onClick={handleRestartQuiz} className="flex items-center gap-2">
                            <RefreshCw size={16} />
                            <span>Restart Quiz</span>
                        </Button>
                        <Button variant="outline" onClick={() => router.push(`/course/${courseId}`)}>
                            Back to Course
                        </Button>
                    </div>
                </div>
            </div>
        );
    }

    const currentQuestionData = quizData.questions[currentQuestion];
    const showFeedback = feedback[currentQuestion] !== undefined;
    const isAnswerCorrect = feedback[currentQuestion];
    const answeredQuestions = Object.keys(userAnswers).length;
    const canShowResults = answeredQuestions > 0;

    return (
        <div className="max-w-6xl mx-auto p-6 bg-white border border-blue-100 rounded-md shadow-sm">
            <div className="flex justify-between items-center mb-6">
                <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => router.push(`/course/${courseId}`)}
                    className="flex items-center gap-1 text-gray-600 hover:text-gray-900"
                >
                    <ArrowLeft size={16} />
                    <span>Back</span>
                </Button>
                {canShowResults && (
                    <Button variant="outline" onClick={handleShowResults}>
                        View Results
                    </Button>
                )}
            </div>

            <h1 className="text-xl font-semibold text-center mb-4">{quizData.topic || "Quiz"}</h1>

            <div className="flex justify-between items-center mb-6">
                <Button
                    variant="outline"
                    disabled={currentQuestion === 0}
                    onClick={() => setCurrentQuestion((prev) => prev - 1)}
                    className="px-4"
                >
                    Previous
                </Button>
                <div className="flex space-x-2">
                    {quizData.questions.map((_, index) => (
                        <div
                            key={index}
                            className={`w-3 h-3 rounded-full cursor-pointer ${feedback[index] !== undefined
                                ? feedback[index]
                                    ? "bg-green-500"
                                    : "bg-red-500"
                                : index === currentQuestion
                                    ? "bg-blue-500"
                                    : "bg-gray-300"
                                }`}
                            onClick={() => setCurrentQuestion(index)}
                        />
                    ))}
                </div>
                <Button
                    variant="outline"
                    disabled={currentQuestion === quizData.questions.length - 1}
                    onClick={() => setCurrentQuestion((prev) => prev + 1)}
                    className="px-4"
                >
                    Next
                </Button>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <h2 className="text-lg font-medium mb-6">Question {currentQuestion + 1} of {quizData.questions.length}</h2>
                <p className="text-lg mb-6">{currentQuestionData?.question}</p>
                <div className="grid grid-cols-1 gap-4 mb-6">
                    {currentQuestionData?.options?.map((option, index) => (
                        <button
                            key={index}
                            className={`p-4 border rounded-lg text-left transition-all ${userAnswers[currentQuestion] === option
                                ? showFeedback
                                    ? isAnswerCorrect
                                        ? "bg-green-100 border-green-500 text-green-800"
                                        : "bg-red-100 border-red-500 text-red-800"
                                    : "bg-blue-100 border-blue-500"
                                : "border-gray-300 hover:bg-gray-100"
                                }`}
                            onClick={() => handleSelectAnswer(currentQuestion, option)}
                            disabled={showFeedback}
                        >
                            <div className="flex items-center gap-3">
                                <div className={`w-6 h-6 rounded-full flex items-center justify-center ${userAnswers[currentQuestion] === option
                                    ? showFeedback
                                        ? isAnswerCorrect
                                            ? "bg-green-500 text-white"
                                            : "bg-red-500 text-white"
                                        : "bg-blue-500 text-white"
                                    : "bg-gray-200 text-gray-700"
                                    }`}>
                                    {String.fromCharCode(65 + index)}
                                </div>
                                <span>{option}</span>
                            </div>
                        </button>
                    ))}
                </div>

                {showFeedback && (
                    <div
                        className={`p-4 rounded-lg flex items-center gap-3 ${isAnswerCorrect
                            ? "bg-green-100 border border-green-200 text-green-800"
                            : "bg-red-100 border border-red-200 text-red-800"
                            }`}
                    >
                        {isAnswerCorrect ? (
                            <CheckCircle size={24} className="text-green-600" />
                        ) : (
                            <X size={24} className="text-red-600" />
                        )}
                        <div>
                            <p className="font-medium">
                                {isAnswerCorrect ? "Correct!" : "Incorrect!"}
                            </p>
                            {!isAnswerCorrect && (
                                <p className="text-sm mt-1">
                                    The correct answer is: <span className="font-medium">{currentQuestionData.answer}</span>
                                </p>
                            )}
                        </div>
                    </div>
                )}
            </div>

            <div className="flex justify-between">
                <div className="text-sm text-gray-600">
                    {answeredQuestions} of {quizData.questions.length} questions answered
                </div>
                {currentQuestion === quizData.questions.length - 1 && (
                    <Button
                        onClick={handleShowResults}
                        disabled={!canShowResults}
                        className="flex items-center gap-2"
                    >
                        <Award size={16} />
                        <span>Finish Quiz</span>
                    </Button>
                )}
            </div>
        </div>
    );
};

export default Quiz;