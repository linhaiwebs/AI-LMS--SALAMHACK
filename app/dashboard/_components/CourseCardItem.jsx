import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CourseCardItem = ({ course }) => {
    return (
        <div className="border rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
            <div className="p-4">
                <div className="flex items-center justify-between mb-3">
                    <div className="bg-blue-50 p-2 rounded-lg">
                        <Image src={"/knowledge.png"} alt="Course icon" width={50} height={50} className="object-contain" />
                    </div>
                  
                </div>

                <h2 className="text-lg font-semibold mt-3 text-gray-800">
                    {course?.courseLayout?.courseTitle || "Course Title"}
                </h2>

                <p className="text-sm text-gray-600 mt-2 line-clamp-2 h-10">
                    {course?.courseLayout?.courseSummary || "Course summary goes here. This is a brief description of what the course contains."}
                </p>
 

                <div className="mt-4 flex justify-end">
                    <Link href={`/course/${course?.courseId}`}>
               
                    <Button>
                        View Course
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default CourseCardItem