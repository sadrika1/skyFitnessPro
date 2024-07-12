import { useEffect, useState } from "react";
import { CourseType } from "../../types";
import { getCourses } from "../../api/api";
import SkillCard from "../../components/skillCards/SkillCard";
import Yoga from "../../components/skillCards/Yoga";
import { useAppSelector } from "../../hooks/redux-hooks";


export type ChosenCoursePageType = {
  course: CourseType;
}

export default function ChosenCoursePage() {

 const [chosenCourse, setChosenCourse] = useState<CourseType[]>([])

 const choseCourse = useAppSelector((state) => state.course.chosenCourse);

 useEffect(() => {
  getCourses().then((data) => {
    setChosenCourse(data);
  })
 
 }, []);

  return (
    <>
    {choseCourse &&(
      <div className="place-content-center flex">
      <div className="max-w-[1440px]  flex flex-col px-[30px] lg:px-[140px] py-[16px] lg:py-[50px] font-roboto bg-gray-100 ">

{/* <Yoga /> */}

{/* <SkillCard course={course}  /> */}


        {chosenCourse?.map((course) => 
        <SkillCard course={course} key={course._id} />
        )}
</div>
</div>
    )}
</>
 )}


 
