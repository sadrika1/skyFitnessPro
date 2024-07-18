import { useAppSelector } from "../../hooks/redux-hooks";

export default function BoyAd() {
  const user = useAppSelector((state) => state.user);
  return (
    <>
    <div className="sm:hidden lg:flex flex-row pt-[102px]">
      <div className="h-[486px] p-10 flex flex-row justify-between  bg-white shadow-2xl rounded-[2rem]">
        <div className="flex flex-col gap-7">
          <p className="text-6xl font-medium leading-[60px]">
            Начните путь <br />к новому телу
          </p>
          <img
            className=""
            src="/images/text_advert.png"
            alt="course_advert"
            width="437px"
            height="178px"
          />
          {user ? (
            <button className="h-[52px] bg-custom-green hover:bg-custom-green-hover text-black font-bold py-2 px-4 rounded-full">
              Войдите, чтобы добавить курс
            </button>
          ) : (
            <button className="h-[52px] bg-custom-green hover:bg-custom-green-hover text-black font-bold py-2 px-4 rounded-full">
              Добавить курс
            </button>
          )}
        </div>

        <div className="relative">
          <div className="z-0 -right-[10px] top-[40px]">
            <img
              className="rotate-[355deg]"
              src="/images/Vector_Green.png"
              alt="course_advert"
              width="670.18px"
              height="390.98px"
            />
          </div>
          <div className="absolute z-10 -top-[145px] left-[150px]">
            <img
              className="rotate-[357deg] "
              src="/images/crouching_man.png"
              alt="course_advert"
              width="487px"
              height="542.49px"
            />
          </div>
          <div className="absolute z-10 -top-[10px] left-[220px]">
            <img
              className="rotate-[350deg]"
              src="/images/Vector Black.png"
              alt="course_advert"
              width="50px"
              height="42.5px"
            />
          </div>
        </div>
      </div>
    </div>
     {/* Мобила: реклама со спортсменом  */}
     <div className="lg:hidden relative bg-gray-100">
     <div className="absolute z-10 top-[162px] lg:hidden  h-[412px] p-[30px] sm:flex flex-row justify-between  bg-white shadow-2xl rounded-[2rem]">
     <div className=" flex flex-col gap-7">
       <p className="text-[32px] lg:text-6xl font-medium leading-[35,2px] lg:leading-15">
         Начните путь <br />к новому телу
       </p>
       <img
         className=""
         src="/images/text_advert.png"
         alt="course_advert"
       />
     {user ? (
       <button className="h-[52px] bg-custom-green hover:bg-custom-green-hover text-black text-base font-normal leading-[17,6px] rounded-full">
         Войдите, чтобы добавить курс
       </button>
     ) : (
       <button className="h-[52px] bg-custom-green hover:bg-custom-green-hover text-black text-base font-normal leading-[17,6px] rounded-full">
         Добавить курс
       </button>
     )}
     </div>
   </div>

     <div className="lg:hidden relative">
       <img
         className="absolute z-0 -top-[90px] -left-[4px]"
         src="/images/crouching_man_vectors.png"
         alt="course_advert"
       />
     </div>
   </div>
    </> 
  );
}
