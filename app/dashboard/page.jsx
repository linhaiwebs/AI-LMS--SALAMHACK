import React from 'react'
export const dynamic = "force-dynamic";
import Bunner from './_components/Bunner'
import CourseList from './_components/CourseList'

const Dashboard = () => {
  return (
    <div>
      <Bunner />
      <CourseList/>    
     </div>
  )
}

export default Dashboard