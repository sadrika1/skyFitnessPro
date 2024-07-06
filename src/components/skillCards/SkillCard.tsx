import { CourseType } from "../../types";

type SkillCardType = {
  skillcard: CourseType;
};

export default function SkillCard({ skillcard }: SkillCardType) {
  const { nameRU, fitting, directions } = skillcard;

  return (
    <>
      <div className=" h-[19.38rem] sm:hidden lg:flex flex-row  justify-between rounded-[2rem]  bg-custom-yellow">
        <div className="mt-10 ml-10">
          <p className="text-white text-6xl font-medium leading-[4rem]">
            {nameRU}
          </p>
        </div>
        <img
          className="rounded-[2rem]"
          src="/images/yoga.png"
          alt="course_picture"
        />
      </div>

      <div className="lg:hidden">
        <img
          className="rounded-[2rem]"
          src="/images/yoga_full.png"
          alt="course_picture"
        />
      </div>

      {/* див с рекламными фиттингами */}
      <div className="mt-10 lg:mt-15 flex flex-col ">
        <p className="text-black text-2xl lg:text-4xl font-medium lg:font-semibold leading-[1.6rem] lg:leading-[2.75rem]">
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
      <div className="mt-10 lg:mt-15 flex flex-col ">
        <p className="text-black text-2xl lg:text-4xl font-medium lg:font-semibold leading-[26,4px] lg:leading-[44px]">
          Направления
        </p>
        <div className="mt-6 lg:mt-10 p-[30px] sm:hidden lg:flex flex-row justify-around gap-[124px] bg-custom-green text-black-400 rounded-[2rem]">
          <div className="flex flex-col gap-[34px]">
            <div className="flex flex-row">
              <div className="h-[30px] w-[30px]">
                <svg>
                  <use xlinkHref="/images/icons/sprite.svg#icon-sparcle" />
                </svg>
              </div>
              <div className="text-2xl font-normal leading-[26,4px]">
                {/* Йога для новичков */}
                {directions[0]}
              </div>
            </div>

            <div className="flex flex-row">
              <div className="h-[30px] w-[30px]">
                <svg>
                  <use xlinkHref="/images/icons/sprite.svg#icon-sparcle" />
                </svg>
              </div>
              <div className="text-2xl font-normal leading-[26,4px]">
                {/* Классическая йога */}
                {directions[1]}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-[34px]">
            <div className="flex flex-row">
              <div className="h-[30px] w-[30px]">
                <svg>
                  <use xlinkHref="/images/icons/sprite.svg#icon-sparcle" />
                </svg>
              </div>
              <div className="text-2xl font-normal leading-[26,4px]">
                {/* Кундалини-йога */}
                {directions[2]}
              </div>
            </div>
            <div className="flex flex-row">
              <div className="h-[30px] w-[30px]">
                <svg>
                  <use xlinkHref="/images/icons/sprite.svg#icon-sparcle" />
                </svg>
              </div>
              <div className="text-2xl font-normal leading-[26,4px]">
                {/* Йогатерапия */}
                {directions[3]}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-[34px]">
            <div className="flex flex-row">
              <div className="h-[30px] w-[30px]">
                <svg>
                  <use xlinkHref="/images/icons/sprite.svg#icon-sparcle" />
                </svg>
              </div>
              <div className="text-2xl font-normal leading-[26,4px]">
                {/* Хатха-йога */}
                {directions[4]}
              </div>
            </div>
            <div className="flex flex-row">
              <div className="h-[30px] w-[30px]">
                <svg>
                  <use xlinkHref="/images/icons/sprite.svg#icon-sparcle" />
                </svg>
              </div>
              <div className="text-2xl font-normal leading-[26,4px]">
                {/* Аштанга-йога */}
                {directions[5]}
              </div>
            </div>
          </div>
        </div>
        {/* мобильная версия дива с directions */}
        <div className=" mt-6 lg:mt-10 p-[30px] flex lg:hidden flex-col gap-[30px] bg-custom-green text-black-400 rounded-[2rem]">
          <div className="flex flex-col gap-[30px]">
            <div className="flex flex-row">
              <div className="h-[30px] w-[30px]">
                <svg>
                  <use xlinkHref="/images/icons/sprite.svg#icon-sparcle" />
                </svg>
              </div>
              <div className="text-lg font-normal leading-5">
                {/* Йога для новичков */}
                {directions[0]}
              </div>
            </div>

            <div className="flex flex-row">
              <div className="h-[30px] w-[30px]">
                <svg>
                  <use xlinkHref="/images/icons/sprite.svg#icon-sparcle" />
                </svg>
              </div>
              <div className="text-lg font-normal leading-5">
                {/* Классическая йога */}
                {directions[1]}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-[34px]">
            <div className="flex flex-row">
              <div className="h-[30px] w-[30px]">
                <svg>
                  <use xlinkHref="/images/icons/sprite.svg#icon-sparcle" />
                </svg>
              </div>
              <div className="text-lg font-normal leading-5">
                {/* Кундалини-йога */}
                {directions[2]}
              </div>
            </div>
            <div className="flex flex-row">
              <div className="h-[30px] w-[30px]">
                <svg>
                  <use xlinkHref="/images/icons/sprite.svg#icon-sparcle" />
                </svg>
              </div>
              <div className="text-lg font-normal leading-5">
                {/* Йогатерапия */}
                {directions[3]}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-[34px]">
            <div className="flex flex-row">
              <div className="h-[30px] w-[30px]">
                <svg>
                  <use xlinkHref="/images/icons/sprite.svg#icon-sparcle" />
                </svg>
              </div>
              <div className="text-lg font-normal leading-5">
                {/* Хатха-йога */}
                {directions[4]}
              </div>
            </div>
            <div className="flex flex-row">
              <div className="h-[30px] w-[30px]">
                <svg>
                  <use xlinkHref="/images/icons/sprite.svg#icon-sparcle" />
                </svg>
              </div>
              <div className="text-lg font-normal leading-5">
                {/* Аштанга-йога */}
                {directions[5]}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* див с рекламой */}
      <div className="sm:hidden lg:flex flex-row justify- bg-white shadow-2xl rounded-[2rem] pt-[102px]">
        <div className="h-[486px] p-10 flex flex-row justify-between">
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
            <button className="h-[52px] bg-custom-green hover:bg-custom-green-hover text-black font-bold py-2 px-4 rounded-full">
              Войдите, чтобы добавить курс
            </button>
            <button className="h-[52px] bg-custom-green hover:bg-custom-green-hover text-black font-bold py-2 px-4 rounded-full">
              Добавить курс
            </button>
          </div>
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
            <button className="h-[52px] bg-custom-green hover:bg-custom-green-hover text-black text-base font-normal leading-[17,6px] rounded-full">
              Войдите, чтобы добавить курс
            </button>
            <button className="h-[52px] bg-custom-green hover:bg-custom-green-hover text-black text-base font-normal leading-[17,6px] rounded-full">
              Добавить курс
            </button>
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
