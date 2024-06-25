
import imgYoga from "/images/yoga.png"
import imgBodyflex from "/images/bodyflex.png"
import imgStep from "/images/step.png"
import imgStretching from "/images/stretching.png"
import imgZumba from "/images/zumba.png"





import Course from "../../components/Courses/Course"


export default function MainPage() {


    const courses = [
        {
            id: 1,
            name: "Йога",
            src: imgYoga,
            duration: "25дней",
            timeaday: "20-25минут/день",
            level: "Средняя сложность",
        },
        {
            id: 2,
            name: "Стретчинг",
            src: imgStretching,
            duration: "25дней",
            timeaday: "20-25минут/день",
            level: "Средняя сложность",
        },
        {
            id: 3,
            name: "Зумба",
            src: imgZumba,
            duration: "25дней",
            timeaday: "20-25минут/день",
            level: "Низкая сложность",
        },
        {
            id: 4,
            name: "Степ-аэробика",
            src: imgStep,
            duration: "25дней",
            timeaday: "20-25минут/день",
            level: "Высокая сложность",
        },
        {
            id: 5,
            name: "Бодифлекс",
            src: imgBodyflex,
            duration: "25дней",
            timeaday: "20-25минут/день",
            level: "Средняя сложность",
        }
    ]


    return (
        <>
            <div className="bg-gray-100 grid place-content-center">
                <div className="mx-[140px] max-w-[1440px]">
                    <div className="flex justify-between my-[50px] relative">
                        <div className="font-semibold text-[60px] h-[120px] text-pretty inline-block align-middle" >Начните заниматься спортом и улучшите качество жизни</div>

                        <div className="mt-6  p-4 text-[32px] bg-green  min-w-[288px] max-h-[125px] rounded-md ">Измени своё тело за полгода!</div>
                        <div className="absolute top-[134px] right-[150px]">
                            <img src="images/polygon.png" alt="polygon" />
                        </div>



                    </div>



                    <div className="grid-cols-1 sm:grid md:grid-cols-3 -mr-10">
                        {courses.map(course =>
                            <Course course={course} key={course.id} />

                        )}

                    </div>



                    <div className="flex justify-center ">
                        <button className="mt-8 mb-[80px] rounded-3xl bg-green w-[127px] h-[52px] ">Наверх ↑</button>
                    </div>
                </div>
            </div>
        </>

    )
}
