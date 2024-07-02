import Course from "../../components/Courses/Course"
import {getCourses} from "../../api/api";
import {useEffect, useState} from "react";
import {CourseType} from "../../types";
import Header from "../../components/header/Header";


export default function MainPage() {
    const [courses, setCourses] = useState<CourseType[]>()

    useEffect(() => {
        getCourses().then((data) => {
            setCourses(data);
        })
    }, []);

    return (
        <>
        <Header/>
            <div className="font-roboto bg-gray-100 grid place-content-center">
                <div className="mx-[140px] max-w-[1440px]">
                    <div className="flex justify-between my-[50px] relative">
                        <div className="font-semibold text-[60px] h-[120px] text-pretty inline-block align-middle" >Начните заниматься спортом и улучшите качество жизни</div>
                        <div className="mt-6  p-4 text-[32px] bg-custom-green  min-w-[288px] max-h-[125px] rounded-md ">Измени своё тело за полгода!</div>
                        <div className="absolute top-[134px] right-[150px]">
                            <img src="images/polygon.png" alt="polygon" />
                        </div>



                    </div>



                    <div className="grid-cols-1 sm:grid md:grid-cols-3 -mr-10">
                        {courses?.map(course =>
                            <Course course={course} key={course._id} />
                        )}
                    </div>



                    <div className="flex justify-center ">
                        <button className="mt-8 mb-[80px] rounded-3xl bg-custom-green w-[127px] h-[52px] ">Наверх ↑</button>
                    </div>
                </div>
            </div>
        </>

    )
}
