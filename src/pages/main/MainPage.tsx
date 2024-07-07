import Course from "../../components/course/Course";
import {fetchAddFavoriteCourseToUser, getCourses} from "../../api/api";
import { useContext, useEffect, useState } from "react";
import { CourseType } from "../../types";
import { LoginModalContext } from "../../contexts";
import { useAppSelector } from "../../hooks/redux-hooks";
import Button from "../../components/button/Button";

export default function MainPage() {
  const [courses, setCourses] = useState<CourseType[]>();

  const { setIsLoginModalOpened } = useContext(LoginModalContext);
  const user = useAppSelector((state) => state.user);

  const addCourse = (courseId: string) => {
    if (user.id) {
      // делаем запрос на добавление курса юзеру
      fetchAddFavoriteCourseToUser(user.id, courseId).then(() => {
        console.log("Курс добавлен в избранное!");
        
      });
    } else {
      setIsLoginModalOpened(true);
    }
  };

  useEffect(() => {
    getCourses().then((data) => {
      setCourses(data);
    });
  }, []);

  return (
    <>
      <div className="font-roboto bg-gray-100 grid place-content-center">
        <div className="ml-2 md:mx-[140px] max-w-[1440px]">
          <div className="flex justify-between my-[50px] relative">
            <div className="font-semibold text-[30px] lg:text-[60px] h-[120px] text-pretty inline-block align-middle text-left min-w-[280px]">
              Начните заниматься спортом и улучшите качество жизни
            </div>
            <div className="mt-6  p-4 text-[28px] 2xl:text-[32px] bg-custom-green max-h-[125px] rounded-md hidden lg:flex">
              Измени своё тело за полгода!
            </div>
            <div className="absolute top-[124px] 2xl:top-[134px] right-[150px] hidden lg:flex">
              <img src="images/polygon.png" alt="polygon" />
            </div>
          </div>
          <div className="grid place-content-center md:grid-cols-2 md:gap-6 lg:grid-cols-3  sm:grid-cols-1 -mr-10">
            {courses?.map((course) => (
              <Course
                course={course}
                key={course._id}
                onAddCourse={addCourse}
              />
            ))}
          </div>
          <div className="flex justify-center mt-6 mb-20 ">
            <Button type="primary">
              Наверх ↑
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
