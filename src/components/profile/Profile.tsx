import Course from "../Courses/Course";
import Button from "../button/Button";
import Heading from "../heading/Heading";
import imgYoga from "/images/yoga.png";
import imgStretching from "/images/stretching.png";
import imgZumba from "/images/zumba.png";

const Profile = () => {
  const courses = [
    {
      id: 1,
      name: "Йога",
      src: imgYoga,
      duration: "25 дней",
      timeaday: "20-25 минут/день",
      level: "Средняя сложность",
    },
    {
      id: 2,
      name: "Стретчинг",
      src: imgStretching,
      duration: "25дней",
      timeaday: "20-25 минут/день",
      level: "Средняя сложность",
    },
    {
      id: 3,
      name: "Зумба",
      src: imgZumba,
      duration: "25 дней",
      timeaday: "20-25 минут/день",
      level: "Низкая сложность",
    },
  ];
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
              <Button fullWidth type="primary">
                Изменить пароль
              </Button>
              <Button fullWidth type="secondary">
                Выйти
              </Button>
            </div>
          </div>
        </div>
        <Heading classNames="mb-2">Мои курсы</Heading>
        <div className="mb-10 gap-x-16">
          <div className="grid-cols-1 sm:grid md:grid-cols-3 -mr-10">
            {courses.map((course) => (
              <Course course={course} key={course.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

// relative shadow-lg mt-8 mb-2 flex flex-col self-start rounded-3xl bg-white sm:shrink-0 sm:grow sm:basis-0 box-border
