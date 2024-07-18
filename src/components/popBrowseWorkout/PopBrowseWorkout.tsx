import { useEffect, useState } from "react";
import Heading from "../heading/Heading";
import { getUserWorkouts } from "../../api/api";
import { Link, useParams } from "react-router-dom";
import { useAppSelector } from "../../hooks/redux-hooks";

const PopBrowseWorkout = () => {
  const [workouts, setWorkouts] = useState([]);
  const user = useAppSelector((state) => state.user);
  const { courseId } = useParams();


  useEffect(() => {
    getUserWorkouts(user.id, courseId).then((data) => {
      setWorkouts(data);
    });
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-20 flex items-center justify-center">
      <div className="bg-white p-10 rounded-3xl">
        <Heading>Выберите тренировку</Heading>
        <div>
          {workouts?.map((workout) => (
            <div>
              <input
                type="checkbox"
                name="progress"
                checked={workout.progress}
              />
              <Link to={`/workout-modal/${courseId}/workout-video/${workout.id}`}>{workout.name}</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopBrowseWorkout;
