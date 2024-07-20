import { useEffect, useState } from "react";
import Heading from "../heading/Heading";
import { getUserWorkouts } from "../../api/api";
import { Link, useParams } from "react-router-dom";
import { useAppSelector } from "../../hooks/redux-hooks";

const PopBrowseWorkout = () => {
  const [workouts, setWorkouts] = useState([]);
  const [selectedWorkout, setSelectedWorkout] = useState(null);
  const handleRadioChange = (workout) => {
    setSelectedWorkout(workout);
  };

  const user = useAppSelector((state) => state.user);
  const { courseId } = useParams();

  useEffect(() => {
    getUserWorkouts(user.id, courseId).then((data) => {
      setWorkouts(data);
    });
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-20 flex items-center justify-center">
      <div className="bg-white p-10 rounded-3xl lg:w-[420px] sm:w-[320px]">
        <Heading classNames="text-[32px] mb-4">Выберите тренировку</Heading>
        <div className="flex flex-col gap-5">
          {workouts?.map((workout) => (
            <div>
              <input
                // className="appearance-none rounded-full w-4 h-4 bg-no-repeat bg-center bg-cover bg-[url('/icons/checked.svg')] focus:outline-none"
                className="appearance-none rounded-full w-4 h-4 border border-[#C4C4C4] checked:bg-custom-green checked:border-custom-green focus:outline-none focus:ring focus:ring-custom-green focus:ring-opacity-50"
                type="radio"
                name="progress"
                checked={selectedWorkout === workout}
                onChange={() => handleRadioChange(workout)}
              />
              <span className="pl-3">{workout.name}</span>
              <div className="border-b border-[#C4C4C4] w-full pt-1" />
            </div>
          ))}
          {selectedWorkout && (
            <Link
              to={`/workout-modal/${courseId}/workout-video/${selectedWorkout.id}`}
            >
              <button className="bg-custom-green w-full h-[52px] rounded-3xl">
                Начать
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default PopBrowseWorkout;
