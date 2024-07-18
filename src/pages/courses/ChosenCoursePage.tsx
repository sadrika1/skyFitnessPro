import SkillCard from "../../components/skillCards/SkillCard";
import {useEffect, useState} from "react";
import {getCourseById} from "../../api/api";
import {useParams} from "react-router-dom";
import {CourseType} from "../../types";

export default function ChosenCoursePage() {
  const [course, setCourse] = useState<CourseType | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    if (!id) {
      return;
    }

    setIsLoading(true)
    getCourseById(id).then((data) => {
      setCourse(data);
    }).finally(() => setIsLoading(false));
  }, []);

  if (isLoading) {
    return <span>Загрузка...</span>;
  }


  return (
      <>
      <div className="place-content-center flex bg-slate-50">
        <div className="max-w-[1440px]  flex flex-col px-[30px] lg:px-[140px] py-[16px] lg:py-[50px] font-roboto">
          {course ? <SkillCard course={course} /> : <span>Такого курса нет в базе данных</span>}
        </div>
      </div>
    </>
  );
}
