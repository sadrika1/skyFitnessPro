// import { WorkoutProgressBars } from "../../components/WorkoutVideoBranch/WorkoutProgressBars";
// import { WorkoutVideo } from "../../components/WorkoutVideoBranch/WorkoutVideo";

import { useState } from "react";

export function WorkoutVideoPage() {
  const [modalMyProgress, setModalMyProgress] = useState(false);
  const [progressIsSave, setProgressIsSave] = useState(false);

  const handleSetModalMyProgress = () => {
    setModalMyProgress((prev) => !prev);
  };

  const handleSetProgressIsSave = () => {
    setModalMyProgress(false);
    setProgressIsSave((prev) => !prev);
  };

  return (
    <>
      <div className="flex justify-center h-screen">
        <div className="w-full max-w-screen-xl mx-4">
          {modalMyProgress && (
            <div
              onClick={handleSetModalMyProgress}
              className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-20 flex items-center justify-center"
            >
              <div
                className="bg-white p-10 rounded-3xl"
                onClick={(e) => e.stopPropagation()}
              >
                <h2 className="text-4xl font-normal mb-12">Мой прогресс</h2>
                <div className="flex flex-col gap-5 mb-9 pr-5 h-80 w-w340px overflow-auto">
                  <div className="flex flex-col gap-2.5">
                    <span className="text-lg font-normal">
                      Сколько раз вы сделали наклоны вперед?
                    </span>
                    <input
                      className="py-4 px-5 outline-none border-slate-300 border-2 rounded-lg text-lg"
                      type="number"
                      placeholder="0"
                    />
                  </div>

                  <div className="flex flex-col gap-2.5">
                    <span className="text-lg font-normal">
                      Сколько раз вы сделали наклоны назад?
                    </span>
                    <input
                      className="py-4 px-5 outline-none border-solid border-slate-300 border-2 rounded-lg text-lg"
                      type="number"
                      placeholder="0"
                    />
                  </div>

                  <div className="flex flex-col gap-2.5">
                    <span className="text-lg font-normal">
                      Сколько раз вы сделали поднятие ног, согнутых в коленях?
                    </span>
                    <input
                      className="py-4 px-5 outline-none border-solid border-slate-300 border-2 rounded-lg text-lg"
                      type="number"
                      placeholder="0"
                    />
                  </div>

                  <div className="flex flex-col gap-2.5">
                    <span className="text-lg font-normal">
                      Сколько раз вы сделали поднятие ног, согнутых в коленях?
                    </span>
                    <input
                      className="py-4 px-5 outline-none border-solid border-slate-300 border-2 rounded-lg text-lg"
                      type="number"
                      placeholder="0"
                    />
                  </div>

                  <div className="flex flex-col gap-2.5">
                    <span className="text-lg font-normal">
                      Сколько раз вы сделали поднятие ног, согнутых в коленях?
                    </span>
                    <input
                      className="py-4 px-5 outline-none border-solid border-slate-300 border-2 rounded-lg text-lg"
                      type="number"
                      placeholder="0"
                    />
                  </div>
                </div>

                <button
                  onClick={handleSetProgressIsSave}
                  className="w-full bg-lime-400 py-4 font-normal rounded-full"
                >
                  Сохранить
                </button>
              </div>
            </div>
          )}

          {progressIsSave && (
            <div
              onClick={handleSetProgressIsSave}
              className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-20 flex items-center justify-center"
            >
              <div
                className="bg-white p-10 rounded-3xl"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex flex-col justify-center items-center">
                  <h1 className="text-5xl w-80 text-center mb-8">
                    Ваш прогресс засчитан!
                  </h1>
                  <img
                    className="w-16 h-16"
                    src="./progressDone.png"
                    alt="progressDone"
                  />
                </div>
              </div>
            </div>
          )}

          <section className="mb-10 mt-5">
            <div>
              {/* workoutHeader */}
              <h1 className="text-6xl mb-6 font-medium">Йога</h1>
              <div>
                <span className="text-3xl font-normal">
                  <span className="underline">Красота и здоровье</span> /
                  <span className="underline">Йога на каждый день</span> /{" "}
                  <span className="underline">2 день</span>
                </span>
              </div>
            </div>
          </section>
          <section className="h-h639px bg-black rounded-3xl mb-10"></section>

          <div className="bg-white w-full px-10 py-10 rounded-3xl shadow-xl">
            <section>
              {/* ProgressBars */}
              <h3 className="text-3xl font-normal mb-5">
                Упражнения тренировки 2
              </h3>
              <div className="mb-10 grid grid-cols-3 gap-x-16">
                <div className="flex flex-col gap-y-5">
                  <div>
                    <div className="mb-2.5">Наклоны вперед 0%</div>
                    <div className="w-80 bg-slate-100 rounded-full h-1.5">
                      <div className="h-1.5 rounded-full"></div>
                    </div>
                  </div>

                  <div>
                    <div className="mb-2.5">Наклоны назад 0%</div>
                    <div className="w-80 bg-slate-100 rounded-full h-1.5">
                      <div className="h-1.5 rounded-full"></div>
                    </div>
                  </div>

                  <div>
                    <div className="mb-2.5">
                      Поднятие ног, согнутых в коленях 0%
                    </div>
                    <div className="w-80 bg-slate-100 rounded-full h-1.5">
                      <div className="h-1.5 rounded-full"></div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-y-5">
                  <div>
                    <div className="mb-2.5">Наклоны вперед 0%</div>
                    <div className="w-80 bg-slate-100 rounded-full h-1.5">
                      <div className="h-1.5 rounded-full"></div>
                    </div>
                  </div>

                  <div>
                    <div className="mb-2.5">Наклоны назад 0%</div>
                    <div className="w-80 bg-slate-100 rounded-full h-1.5">
                      <div className="h-1.5 rounded-full"></div>
                    </div>
                  </div>

                  <div>
                    <div className="mb-2.5">
                      Поднятие ног, согнутых в коленях 0%
                    </div>
                    <div className="w-80 bg-slate-100 rounded-full h-1.5">
                      <div className="h-1.5 rounded-full"></div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-y-5">
                  <div>
                    <div className="mb-2.5">Наклоны вперед 0%</div>
                    <div className="w-80 bg-slate-100 rounded-full h-1.5">
                      <div className="h-1.5 rounded-full"></div>
                    </div>
                  </div>

                  <div>
                    <div className="mb-2.5">Наклоны назад 0%</div>
                    <div className="w-80 bg-slate-100 rounded-full h-1.5">
                      <div className="h-1.5 rounded-full"></div>
                    </div>
                  </div>

                  <div>
                    <div className="mb-2.5">
                      Поднятие ног, согнутых в коленях 0%
                    </div>
                    <div className="w-80 bg-slate-100 rounded-full h-1.5">
                      <div className="h-1.5 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
              <button
                onClick={handleSetModalMyProgress}
                className="bg-lime-400 w-80 py-4 font-normal rounded-full"
              >
                Заполнить свой прогресс
              </button>
            </section>
          </div>

          {/* <WorkoutVideo /> */}
          {/* <WorkoutProgressBars /> */}
        </div>
      </div>
    </>
  );
}
