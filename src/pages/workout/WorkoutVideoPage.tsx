import { useEffect, useState } from "react";
import { WorkoutType } from "../../types";
import {
  fetchUpdateExercisesProgress,
  getCourseById,
  getProgressById,
  getVideo,
  getWorkoutById,
} from "../../api/api";
import { useAppSelector } from "../../hooks/redux-hooks";
import { useParams } from "react-router-dom";
import ModalSuccess from "../../components/WorkoutVideoBranch/ModalSuccess.tsx";
import ModalProgress, {
  Inputs,
} from "../../components/WorkoutVideoBranch/ModalProgress.tsx";
import ProgressBar from "../../components/ProgressBar/ProgressBar.tsx";

export function WorkoutVideoPage() {
  const [modalMyProgress, setModalMyProgress] = useState(false);
  const [progressIsSave, setProgressIsSave] = useState(false);
  const [courseName, setcourseName] = useState("");

  const [workout, setWorkout] = useState<WorkoutType | null>(null);
  const [progress, setProgress] = useState<ProgressData[]>([]);

  const [video, setVideo] = useState<string | undefined>(undefined);

  const { workoutId, courseId } = useParams<{
    workoutId: string;
    courseId: string;
  }>();

  const user = useAppSelector((state) => state.user);

  useEffect(() => {
    if (workoutId && courseId) {
      getWorkoutById(workoutId, user.id, courseId).then((data) => {
        setWorkout(data);
      });

      getVideo(workoutId).then((data) => {
        setVideo(data);
      });
    }
  }, [workoutId, courseId, user.id]);

  interface ProgressData {
    key: string;
    value: number;
  }

  useEffect(() => {
    if (workoutId && courseId) {
      getProgressById(workoutId, user.id, courseId).then((data) => {
        if (data && typeof data === "object") {
          const entries = Object.entries(data);

          const progressData: ProgressData[] = entries.map(([key, value]) => ({
            key,
            value: Number(value),
          }));

          setProgress(progressData);
        }
      });
    }
  }, [workoutId, courseId, user.id]);

  useEffect(() => {
    if (courseId) {
      getCourseById(courseId).then((data) => {
        if (data?.nameRU) {
          setcourseName(data?.nameRU);
        }
      });
    }
  }, []);

  const handleSetModalMyProgress = () => {
    setModalMyProgress((prev) => !prev);
  };

  const handleSetProgressIsSave = async (data: Inputs) => {
    let newData: Record<string, unknown> = {};
    const keys = Object.keys(data).map((key) => {
      return { key, value: Number(data[key]) };
    });
    keys.forEach((obj) => {
      newData[obj.key] = obj.value;
    });
    await fetchUpdateExercisesProgress(
      user.id,
      courseId as string,
      workoutId as string,
      data
    );
    handleHideModals();

    if (workoutId && courseId) {
      const data = await getProgressById(workoutId, user.id, courseId);
      if (data && typeof data === "object") {
        const entries = Object.entries(data);
        const progressData: ProgressData[] = entries.map(([key, value]) => ({
          key,
          value: Number(value),
        }));
        setProgress(progressData);
      }
    }
  };

  const handleHideModals = () => {
    setModalMyProgress(false);
    setProgressIsSave((prev) => !prev);
  };

  return (
    <>
      <div className="flex justify-center h-full bg-gray">
        <div className="w-full max-w-screen-xl mx-4">
          <section className="mb-10 mt-5">
            <div>
              {/* workoutHeader */}
              <h1 className="sm:text-[24px] lg:text-[60px] mb-6 font-medium">{courseName}</h1>
              <div>
                <span className="sm:text-[18px] lg:text-[32px] font-normal">{workout?.name}</span>
              </div>
            </div>
          </section>
          <iframe
            className="lg:h-[639px] lg:w-full  sm:w-[343px] sm:h-[183px] rounded-3xl mb-10"
            width="100%"
            height="100%"
            src={video}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>

          {workout?.exercises && (
            <div className="bg-white px-10 py-10 rounded-3xl shadow-xl lg:w-full sm:w-[343px]">
              <section>
                {/* ProgressBars */}
                <h3 className="text-3xl font-normal mb-8">
                  Упражнения тренировки
                </h3>

                <div className="grid lg:grid-flow-col grid-rows-3 gap-x-10 mb-8 justify-start">
                  {workout?.exercises ? (
                    workout?.exercises?.map((el) => {
                      const progressItem = progress.find(
                        (item) => item.key === el.id
                      );

                      return (
                        <div key={el.id} className="mb-4 ">
                          <div className="flex gap-2 ">
                            <div className="mb-2.5">{el.name}</div>

                            <div className="mb-2.5">
                              {progressItem
                                ? (100 * progressItem.value) / el.quantity
                                : 0}
                              %
                            </div>
                          </div>

                          <ProgressBar
                            percentage={
                              progressItem
                                ? (100 * progressItem.value) / el.quantity
                                : 0
                            }
                          />
                        </div>
                      );
                    })
                  ) : (
                    <span>Упражнений нет</span>
                  )}
                </div>

                <button
                  onClick={handleSetModalMyProgress}
                  className="bg-lime-400 sm:w-[283px] lg:w-[320px] py-4 font-normal rounded-full"
                >
                  Заполнить свой прогресс
                </button>
              </section>
            </div>
          )}

          <ModalProgress
            exercises={workout?.exercises}
            modalMyProgress={modalMyProgress}
            handleSetModalMyProgress={handleSetModalMyProgress}
            handleSetProgressIsSave={handleSetProgressIsSave}
          />

          <ModalSuccess
            progressIsSave={progressIsSave}
            handleHideModals={handleHideModals}
          />
        </div>
      </div>
    </>
  );
}
