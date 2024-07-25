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
      <div className="mt-10 lg:mt-15 flex flex-col">
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
      <div className="mt-10 mb-[50px] lg:mt-15 flex flex-col ">
        <p className="text-black text-[24px] lg:text-4xl font-[500] lg:font-semibold leading-[26.4px] lg:leading-[44px]">
          Направления
        </p>
        <div className="mt-6 lg:mt-10 p-[30px] sm:hidden lg:flex flex-row justify-around gap-[124px] bg-custom-green text-black-400 rounded-[2rem]">
          <div className="flex flex-col gap-[34px]">
            <div className="flex flex-row">
              <div className="grid grid-cols-3 gap-5 gap-x-52 text-2xl font-normal leading-[26.4px]">
                {directions.map((el) => (
                  <div className="flex flex-row ">
                    <div className="h-[30px] w-[30px] ">
                      <svg className="h-[30px] w-[30px]">
                        <use xlinkHref="/images/icons/sprite.svg#icon-sparcle" />
                      </svg>
                    </div>
                    {el}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* мобильная версия дива с directions */}
        <div className=" mt-6 p-[30px] lg:hidden sm:flex flex-col gap-[30px] bg-custom-green text-black-400 rounded-[2rem]">
          <div className="flex flex-col">
            <div className="flex flex-col">
              <div className=" text-lg font-normal leading-5">
                {directions.map((el) => (
                  <div className="flex flex-row pb-[24px]">
                    <div className="h-[30px] w-[30px]">
                      <svg className="h-[30px] w-[30px]">
                        <use xlinkHref="/images/icons/sprite.svg#icon-sparcle" />
                      </svg>
                    </div>
                    {el}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <BoyAd />
    </>
  );
}
