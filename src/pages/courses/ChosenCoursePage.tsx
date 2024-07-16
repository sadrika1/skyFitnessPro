import SkillCard from "../../components/skillCards/SkillCard";
import { useAppSelector } from "../../hooks/redux-hooks";
import { useParams } from "react-router-dom";

export default function ChosenCoursePage() {
 const courses = useAppSelector((state) => state.course.courses);
console.log(courses);
const {id} = useParams();
const chosenCourse = courses?.find((course) => id === course._id);

console.log(chosenCourse);

  return (
    <>
      <div className="place-content-center flex">
      <div className="max-w-[1440px]  flex flex-col px-[30px] lg:px-[140px] py-[16px] lg:py-[50px] font-roboto bg-gray-100 ">

<SkillCard course={chosenCourse}  />
</div>
</div>
</>
 )}


