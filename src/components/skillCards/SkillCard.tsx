import { useEffect, useState } from "react";
import { CourseType } from "../../types";

import {
  fetchAndProcessImage,
  fetchAndProcessImageLaptop,

} from "../../api/api";
import fit from "/images/bgYellow.jpg";

import BoyAd from "./boyAd";

type SkillCardType = {
  course: CourseType;
};

export default function SkillCard({ course }: SkillCardType) {
  const { fitting, directions, src, src_laptop } = course;
  const [imageUrl, setImageUrl] = useState(fit);
  const [imageUrlLaptop, setImageUrlLaptop] = useState(fit);

  //Добавление картинок курсов из Firestore и Storage
  useEffect(() => {
    fetchAndProcessImage(src).then((data) => {
      setImageUrl(data);
    });
  }, []);

  useEffect(() => {
    fetchAndProcessImageLaptop(src_laptop).then((data) => {
      setImageUrlLaptop(data);
    });
  }, []);
  console.log(directions);
  return (
    <>
      <div className="h-[19.38rem]  sm:hidden lg:flex rounded-[2rem]">
        <img
          className="rounded-[2rem] "
          src={imageUrlLaptop}
          alt="course_picture"
        />
      </div>

      <div className="lg:hidden">
        <img className="rounded-[2rem]" src={imageUrl} alt="course_picture" />
      </div>

      {/* див с рекламными фиттингами */}
      <div className="mt-10 lg:mt-15 flex flex-col ">
        <p className="text-black text-[24px] lg:text-4xl font-[500] lg:font-semibold leading-[1.6rem] lg:leading-[2.75rem]">
          Подойдёт для вас, если:
        </p>
        <div className="mt-6 lg:mt-10 gap-[17px] flex flex-col lg:flex-row justify-between  ">
          <div className=" h-[141px] p-5  flex flex-row justify-between rounded-[2rem] bg-gradient-to-r from-custom-black1 to-custom-black2">
            <div className="text-custom-green text-[4.8rem] font-medium leading-[101.25px] flex flex-row items-center">
              1
            </div>
            <div className="pl-5 text-white text-lg lg:text-2xl font-normal leading-5 lg:leading-[26,4px] text-start flex items-center">
              {fitting[0]}
            </div>
          </div>

          <div className=" h-[141px] p-5 flex flex-row justify-between rounded-[2rem] bg-gradient-to-r from-custom-black1 to-custom-black2">
            <div className="text-custom-green text-[4.8rem] font-medium leading-[101.25px] flex flex-row items-center">
              2
            </div>
            <div className="pl-5 text-white text-lg lg:text-2xl font-normal leading-5 lg:leading-[26,4px] text-start flex items-center">
              {fitting[1]}
            </div>
          </div>

          <div className=" h-[141px] p-5 flex flex-row justify-between rounded-[2rem] bg-gradient-to-r from-custom-black1 to-custom-black2">
            <div className="text-custom-green text-[4.8rem] font-medium leading-[101.25px] flex flex-row items-center">
              3
            </div>
            <div className="pl-5 text-white text-lg lg:text-2xl font-normal leading-5 lg:leading-[26,4px] text-start flex items-center">
              {fitting[2]}
            </div>
          </div>
        </div>
      </div>

      {/* див с directions */}
      <div className="mt-10 mb-[172px] lg:mt-15 flex flex-col ">
        <p className="text-black text-[24px] lg:text-4xl font-[500] lg:font-semibold leading-[26,4px] lg:leading-[44px]">
          Направления
        </p>
        <div className="mt-6 lg:mt-10 p-[30px] sm:hidden lg:flex flex-row justify-around gap-[124px] bg-custom-green text-black-400 rounded-[2rem]">
          <div className="flex flex-col gap-[34px]">
            <div className="flex flex-row">
              <div className="text-2xl font-normal leading-[26,4px]">
                {directions.map((el) => (
                  <div>
                    <div className="h-[30px] w-[30px]">
                      <svg>
                        <use xlinkHref="/images/icons/sprite.svg#icon-sparcle" />
                      </svg>
                    </div>
                    {el}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* мобильная версия дива с directions */}
        </div>
      </div>

      {/* див с рекламой */}

      {/* <div className="lg:hidden relative bg-gray-100">
        <div className="absolute z-10 -top-[52px] lg:hidden  h-[412px] p-[30px] sm:flex flex-row justify-between  bg-white shadow-2xl rounded-[2rem]">
          <div className=" flex flex-col gap-7">
            <p className="text-[32px] lg:text-6xl font-medium leading-[35,2px] lg:leading-15">
              Начните путь <br />к новому телу
            </p>
            <img
              className=""
              src="/images/text_advert.png"
              alt="course_advert"
            />
             {!isAuth && (
            <button 
            onClick={() => setIsAuth(true)}
            className="h-[52px] bg-custom-green hover:bg-custom-green-hover text-black text-base font-normal leading-[17,6px] rounded-full">
              Войдите, чтобы добавить курс
            </button>
             )}
             {isAuth && (
            <button 
                // onClick={() => addChosenCourse}
                className="h-[52px] bg-custom-green hover:bg-custom-green-hover text-black text-base font-normal leading-[17,6px] rounded-full">
              Добавить курс
            </button>
             )}
          </div>
        </div>

        <div className="lg:hidden relative">
          <img
            className="absolute z-0 -top-[270px] -left-[4px]"
            src="/images/crouching_man_vectors.png"
            alt="course_advert"
          />
        </div>
      </div> */}

      <BoyAd />
    </>
  );
}
