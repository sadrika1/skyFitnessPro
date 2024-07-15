import { useEffect, useState } from "react";
import { CourseType } from "../../types";
import { getCourses } from "../../api/api";
import SkillCard from "../../components/skillCards/SkillCard";
import Yoga from "../../components/skillCards/Yoga";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";
import { setChosenCourse } from "../../store/slices/courseSlice";


export type ChosenCoursePageType = {
  course: CourseType;
  duration: number;
  level: string;
  nameRU: string;
  order: number;
  timeaday: string;
  src: string;
  src_laptop: string;
  _id: string;
  fitting: string;
  directions: string;
  color: string;
}

export default function ChosenCoursePage({course, 
  // duration, level, nameRU, order, timeaday, src, src_laptop, _id, fitting, directions, color
}: ChosenCoursePageType) {

//  const [isChosenCourse, setIsChosenCourse] = useState<boolean>(false)
//  console.log("123")
 const [chosenCourse, setChosenCourse] = useState<CourseType[]>([])

//  const chosenCourse = useAppSelector((state) => state.course.chosenCourse);
//  console.log(chosenCourse, "888")


//  const dispatch = useAppDispatch();

//  useEffect(() => {
//   getCourses().then((data) => {

//   dispatch(setChosenCourse({
    
//     course,
//     isChosenCourse: false,
//     courses: data
//   }))
//     setIsChosenCourse(true);
//   })
 
//  }, []);

useEffect(() => {
  getCourses().then((course) => {
    setChosenCourse(course);
  });
}, []);


  return (
    <>
    {/* {chosenCourse &&( */}
      <div className="place-content-center flex">
      <div className="max-w-[1440px]  flex flex-col px-[30px] lg:px-[140px] py-[16px] lg:py-[50px] font-roboto bg-gray-100 ">

{/* <Yoga /> */}

{/* <SkillCard course={course}  /> */}

{/* {course && ( */}
  {/* <SkillCard course={course}
    duration={duration}
  level={level}
  nameRU={nameRU}
  order={order}
  timeaday={timeaday}
  src={src}
  src_laptop={src_laptop}
  _id={_id}
  fitting={fitting}
  directions={directions}
  color={color}
  /> */}
{/* )} */}

        {chosenCourse?.map((course: CourseType) => 
        <SkillCard course={course} key={course._id} />
        )} 
</div>
</div>
   {/* )}  */}
</>
 )}


// token to login on a CI server:
//  1//0c4hH_xaMypuCCgYIARAAGAwSNwF-L9Ir1Ntd3ahs9br7CpuksmcTMQcg9LPH0WmrKQmz6XWjef2lZkp_FOJQfJmSjaxmWWrfLg0
//  Example: firebase deploy --token "$FIREBASE_TOKEN"
