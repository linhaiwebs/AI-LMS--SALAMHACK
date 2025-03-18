"use client";

import DashboardHeader from '@/app/dashboard/_components/DashboardHeader';
import axios from 'axios';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import CourseIntro from './_components/CourseIntro';
import StudyMatrailSection from './_components/StudyMatrailSection';
import ChapterList from './_components/ChapterList';

const Course = () => {
    const { courseId } = useParams();
    const [course, setCourse] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (courseId) {
            getCourse();
        }
    }, [courseId]);

    const getCourse = async () => {
        try {
            const result = await axios.get(`/api/courses?courseId=${courseId}`);
            setCourse(result.data.result);
        } catch (error) {
            console.error('Error fetching course:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div> 
            {loading ? (
                <p>Loading...</p>
            ) : course ? (
                    <div className=' mx-10 md:mx-36 lg:px-60 mt-10  '> 
                        <CourseIntro course={course} />
                        <StudyMatrailSection courseId={courseId} />
                        <ChapterList course={course} />










                </div>
            ) : (
                <p>Course not found.</p>
            )}
        </div>
    );
};

export default Course;
