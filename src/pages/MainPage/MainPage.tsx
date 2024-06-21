import Courses from "../../components/Courses/Courses";

export default function MainPage() {

    return (
        <>
            <div>
                <h1 >Начните заниматься спортом и улучшите качество жизни</h1>
                <div className=" bg-yellow-100 ">
                    <h6>Измени своё тело за полгода!</h6>
                </div>
                <Courses />
            
                <button className=" bg-yellow-400 ">Наверх ↑</button>
            </div>
        </>

    )
}
