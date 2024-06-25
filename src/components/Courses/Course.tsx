import calendarIcon from "/icons/icon-calendar.svg"
import timeIcon from "/icons/icon-time.svg"
import difficultyIcon from "/icons/level.png"




export type courseType = {
    id: number,
    name: string,
    src: string,
    duration: string,
    timeaday: string,
    level: string,
}

export type CourseOneType = {
    course: courseType,
}
export default function Course({ course }: CourseOneType) {
    const { name, duration, timeaday, level } = course
    return (
        <>
            <div className="shadow-lg max-w-[360px] mt-8 mb-2 flex flex-col self-start rounded-3xl bg-white sm:shrink-0 sm:grow sm:basis-0 box-border">
                <div className="  mx-0 mt-0">
                    <img className="rounded-3xl" src="images/zumba.png"></img>
                </div>
                <div className="p-6 mb-4 text-base grid md:gap-3 ">
                    <h6 className="font-bold text-[32px] my-6">{name}</h6>
                    <div className="flex justify-start">
                        <div className="flex justify-start rounded-3xl bg-gray px-3 py-3 mr-2">
                            <img className="w-[18px] h-[18px]" src={calendarIcon} alt=" calendar icon" />
                            <div className="pl-2" >{duration}</div>
                        </div>
                        <div className="flex justify-start rounded-3xl bg-gray px-3 py-3 ">
                            <img className="w-[18px] h-[18px]" src={timeIcon} alt=" time icon" />
                            <div className="pl-2">{timeaday}</div>
                        </div>

                    </div>
                    <div className="flex justify-start rounded-3xl bg-gray px-3 py-3 mr-24 ">
                        <img className="w-[18px] h-[18px]" src={difficultyIcon} alt="level icon" />
                        <div className="pl-2 ">{level}</div>
                    </div>

                </div>
            </div>

        </>

    )
}