// import { WorkoutProgressBars } from "../../components/WorkoutVideoBranch/WorkoutProgressBars";
// import { WorkoutVideo } from "../../components/WorkoutVideoBranch/WorkoutVideo";

import { useEffect, useState } from "react";
import { WorkoutType } from "../../types";
import { getWorkoutById } from "../../api/api";
import { useAppSelector } from "../../hooks/redux-hooks";
import { useParams } from "react-router-dom";

export function WorkoutVideoPage() {
  const [modalMyProgress, setModalMyProgress] = useState(false);
  const [progressIsSave, setProgressIsSave] = useState(false);

  const [workout, setWorkout] = useState<WorkoutType | null>(null);
  // const { workoutId, courseId } = useParams();

  const courseId = "ab1c3f"
  const workoutId = "kcx5ai"
  console.log("воркаут ID", workoutId);
  console.log("курс ID", courseId);


  // const user = useAppSelector((state) => state.user);
  const userID = '1hkq7zdUv1TpKPJ9lnaNqbExWj33'
  console.log("юзер ID", userID);
  useEffect(() => {
    getWorkoutById(workoutId, userID, courseId).then((data) => {
      setWorkout(data);
    });
  }, []);

  console.log("ОБЪЕКТ С ДАННЫМИ О ВОРКАУТЕ", workout);


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
                  {workout?.name}
                </span>
              </div>
            </div>
          </section>
          <video src={workout?.video} controls className="h-h639px rounded-3xl mb-10"></video>

          <div className="bg-white w-full px-10 py-10 rounded-3xl shadow-xl">
            <section>
              {/* ProgressBars */}
              <h3 className="text-3xl font-normal mb-8">
                Упражнения тренировки
              </h3>

              <div className="grid  grid-flow-col grid-rows-3 gap-x-10 mb-8 justify-start">
                {workout?.exercises.map((el) => (

                  <div className="mb-4 ">
                    <div className="flex gap-2 ">
                      <div className="mb-2.5">
                        {el.name}
                      </div>
                      <div className="mb-2.5">{el.progress}</div>
                    </div>
                    <div className="w-auto bg-slate-100 rounded-full h-1.5">
                      <div className="h-1.5 rounded-full"></div>
                    </div>
                  </div>

                ))}
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
