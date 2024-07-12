import Course from "../course/Course";
import Button from "../button/Button";
import Heading from "../heading/Heading";
import { useAppSelector } from "../../hooks/redux-hooks";
import { useEffect, useState } from "react";
import { getFavoriteCourseOfUser } from "../../api/api";
import { CourseType } from "../../types";

const Profile = () => {
  const [userCourses, setUserCourses] = useState<CourseType[]>([]);

  const user = useAppSelector((state) => state.user);

  useEffect(() => {
    getFavoriteCourseOfUser(user.id).then((data) => {
      setUserCourses(data);
    });
  }, [user.id]);
  return (
    <div className="bg-slate-50 flex justify-center h-screen">
      <div className="w-full max-w-screen-xl mx-4">
        <Heading classNames="mb-10">Профиль</Heading>
        <div className="bg-white w-full px-10 py-10 rounded-3xl shadow-xl flex mb-14">
          <img
            className="w-[197px] h-[197px] mr-8"
            src="/images/person.jpg"
            alt="картинка пользователя"
          />
          <div className="flex flex-col gap-y-7">
            <h2 className="text-3xl font-medium">Сергей</h2>
            <div>
              <p>Логин:</p>
              <p>Пароль:</p>
            </div>
            <div className="flex gap-2.5">
              <Button classNames="w-[192px]" type="primary">
                Изменить пароль
              </Button>
              <Button classNames="w-[192px]" type="secondary">
                Выйти
              </Button>
            </div>
          </div>
        </div>
        <Heading classNames="mb-2">Мои курсы</Heading>
        <div className="mb-10 gap-x-16">
          <div className="grid-cols-1 sm:grid md:grid-cols-3 -mr-10">
            {userCourses.map((course) => (
              <Course
                isProfile
                course={course}
                key={course._id}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
