import { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import { CourseType } from "../../types";
import { getCourses } from "../../api/api";
import SkillCard from "../../components/skillCards/SkillCard";
import Yoga from "../../components/skillCards/Yoga";


type ChosenCoursePageType = {
  skillcard: CourseType;
}

export default function ChosenCoursePage({}: ChosenCoursePageType) {

//  const [chosenCourse, setChosenCourse] = useState<CourseType[]>()

//  useEffect(() => {
//   getCourses().then((data) => {
//     setChosenCourse(data);
//   })
//  })

  return (
    <div className="place-content-center">
      <Header />

      <div className="flex flex-col px-[30px] lg:px-[140px] py-[16px] lg:py-[50px] font-roboto bg-gray-100 ">

<Yoga />

        {/* {chosenCourse?.map((skillcard) => 
        <SkillCard skillcard={skillcard} key={skillcard._id} />
        )} */}
</div>
</div>
 )}


