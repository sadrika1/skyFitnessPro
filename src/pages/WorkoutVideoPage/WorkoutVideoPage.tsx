// import { WorkoutProgressBars } from "../../components/WorkoutVideoBranch/WorkoutProgressBars";
// import { WorkoutVideo } from "../../components/WorkoutVideoBranch/WorkoutVideo";

export function WorkoutVideoPage() {
  return (
    <div className="bg-slate-50 flex justify-center h-screen">
      <div className="w-full max-w-screen-xl mx-4">
        <section className="mb-10">
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
            <button className="bg-lime-400 w-80 py-4 font-normal rounded-full">
              Заполнить свой прогресс
            </button>
          </section>
        </div>

        {/* <WorkoutVideo /> */}
        {/* <WorkoutProgressBars /> */}
      </div>
    </div>
  );
}
