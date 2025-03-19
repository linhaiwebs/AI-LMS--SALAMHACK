"use client";

import { useUser } from "@clerk/nextjs";
import axios from "axios";
import React, { useEffect, useState } from "react";
import CourseCardItem from "./CourseCardItem";

const CourseList = () => {
    const { user } = useUser();
    const [coursesList, setCoursesList] = useState([]);

    useEffect(() => {
        if (user) {
            GetCourseList();
        }
    }, [user]);

    const GetCourseList = async () => {
        try {
            const result = await axios.post("/api/courses", {
                createdBy: user?.primaryEmailAddress?.emailAddress,
            });

             setCoursesList(result.data.result);
        } catch (error) {
            console.error("Error fetching courses:", error);
        }
    };
 
 


 







    return (
        <div className=" mt-10">
            <h2 className=" font-bold text-2xl my-3">Your Study Metrial</h2>
            <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-2 gap-5 ">
                {coursesList.map((course , index) => (
                    <CourseCardItem course={course} key={index} />
                ))}
             </div>
           
            
        </div>
    );
};

export default CourseList;
