import Courses from "../../components/Courses/Courses";

export default function MainPage() {

    return (
        <>
            <div>
                <div className="grid grid-cols-2 gap-10">
                    <div className="font-bold text-[60px] mw-[900px]" >Начните заниматься спортом и улучшите качество жизни</div>
                    <div className=" bg-BCEC30 ">Измени своё тело за полгода!</div>
                </div>
                <Courses />
                <Courses />
                <Courses />
                <Courses />
                <Courses />

                <button className=" bg-yellow-400 ">Наверх ↑</button>
            </div>
        </>

    )
}
