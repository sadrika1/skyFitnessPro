export default function ChosenCoursePage() {
  return (
    <div>
      {/* <Header /> */}

      <div className="flex flex-col ">
        <div className=" flex flex-row justify-between rounded-lg  bg-gradient-to-r from-yellow-400 to-custom-yellow">
          <div className="mt-10 ml-10">
            <p className="text-white text-6xl font-medium leading-16">Йога</p>
          </div>
          <img
            className="rounded-lg"
            src="/images/yoga.png"
            alt="course_picture"
            width="1160px"
            height="310px"
          />
        </div>

        <div className="mt-9 flex flex-col">
          <p className="text-black text-4xl font-semibold leading-11">
            Подойдёт для вас, если:
          </p>
          <div className="mt-9 gap-17 flex flex-row justify-between  flex-wrap">
            <div className="w-84 h-35 p-5  flex flex-row justify-between rounded-lg bg-gradient-to-r from-custom-black1 to-custom-black2">
              <div className="text-custom-green text-7.2xl font-medium leading-26 flex flex-row justify-items-center">
                1
              </div>
              <div className="pl-5 text-white text-2xl font-normal flex flex-row justify-items-center flex-wrap">
                Давно хотели попробовать йогу, <br /> но не решались начать
              </div>
            </div>

            <div className="w-88 h-35 p-5 flex flex-row justify-between rounded-lg bg-gradient-to-r from-custom-black1 to-custom-black2">
              <div className="text-custom-green text-7.2xl font-medium leading-26 flex flex-row justify-items-center">
                2
              </div>
              <div className="pl-5 text-white text-2xl font-normal flex flex-row justify-items-center flex-wrap">
                Хотите укрепить позвоночник, избавиться <br /> от болей в спине
                и суставах
              </div>
            </div>

            <div className="w-84 h-35 p-5 flex flex-row justify-between rounded-lg bg-gradient-to-r from-custom-black1 to-custom-black2">
              <div className="text-custom-green text-7.2xl font-medium leading-26 flex flex-row justify-items-center">
                3
              </div>
              <div className="pl-5 text-white text-2xl font-normal flex flex-row justify-items-center flex-wrap">
                Ищете активность, полезную для тела и души
              </div>
            </div>
          </div>
        </div>

        <div className="mt-9 flex flex-col">
          <p className="text-black text-4xl font-semibold leading-11">
            Направления
          </p>
          <div className=" mt-9 p-8-2 flex flex-row justify-around gap-31 bg-custom-green text-black-500 rounded-lg">
            <div className="flex flex-col gap-8-1">
              <div className="flex flex-row">
                <div className="h-7-2 w-7-2">
                  <svg className="h-7-2 w-7-2">
                    <use xlinkHref="/images/icons/sprite.svg#icon-sparcle" />
                  </svg>
                </div>
                <div className="text-2xl font-normal leading-6-1">
                  Йога для новичков
                </div>
              </div>

              <div className="flex flex-row">
                <div className="h-7-2 w-7-2">
                  <svg className="h-7-2 w-7-2">
                    <use xlinkHref="/images/icons/sprite.svg#icon-sparcle" />
                  </svg>
                </div>
                <div className="text-2xl font-normal leading-6-1">
                  Классическая йога
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-8-1">
              <div className="flex flex-row">
                <div className="h-7-2 w-7-2">
                  <svg className="h-7-2 w-7-2">
                    <use xlinkHref="/images/icons/sprite.svg#icon-sparcle" />
                  </svg>
                </div>
                <div className="text-2xl font-normal leading-6-1">
                  Кундалини-йога
                </div>
              </div>
              <div className="flex flex-row">
                <div className="h-7-2 w-7-2">
                  <svg className="h-7-2 w-7-2">
                    <use xlinkHref="/images/icons/sprite.svg#icon-sparcle" />
                  </svg>
                </div>
                <div className="text-2xl font-normal leading-6-1">
                  Йогатерапия
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-8-1">
              <div className="flex flex-row">
                <div className="h-7-2 w-7-2">
                  <svg className="h-7-2 w-7-2">
                    <use xlinkHref="/images/icons/sprite.svg#icon-sparcle" />
                  </svg>
                </div>
                <div className="text-2xl font-normal leading-6-1">
                  Хатха-йога
                </div>
              </div>
              <div className="flex flex-row">
                <div className="h-7-2 w-7-2">
                  <svg className="h-7-2 w-7-2">
                    <use xlinkHref="/images/icons/sprite.svg#icon-sparcle" />
                  </svg>
                </div>
                <div className="text-2xl font-normal leading-6-1">
                  Аштанга-йога
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-26">
          <div className="h-103 p-10 flex flex-row justify-between  bg-white shadow-2xl rounded-lg">
            <div className="flex flex-col gap-7">
              <p className="text-6xl font-medium leading-15">
                Начните путь <br />к новому телу
              </p>
              <img
                className=""
                src="/images/text_advert.png"
                alt="course_advert"
                width="437px"
                height="178px"
              />
              <button className="h-15 bg-custom-green hover:bg-custom-green-hover text-black font-bold py-2 px-4 rounded-full">
                Войдите, чтобы добавить курс
              </button>
            </div>
            <div className="position3">
            <img
              className="rotation position1 "
              src="/images/crouching_man.png"
              alt="course_advert"
              // width="487px"
              // height="542.49px"
            />
            <img
              className="rotation-2 position2"
              src="/images/Vector Black.png"
              alt="course_advert"
              width="50px"
              height="42.5px"
            />
            <img className="rotation-1 border-none"
            // src="/images/Vector_Green.png"
            // alt="course_advert"
            width="670.18px"
            height="390.98px"
          />
           </div>
          </div>
        </div>
      </div>
    </div>
  );
}
