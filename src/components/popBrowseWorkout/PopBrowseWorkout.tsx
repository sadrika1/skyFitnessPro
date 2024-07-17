import { useEffect, useState } from "react";
import Heading from "../heading/Heading";
import { getUserWorkouts } from "../../api/api";
import { useParams } from "react-router-dom";
import { useAppSelector } from "../../hooks/redux-hooks";

const PopBrowseWorkout = () => {
  const [modalWorkoutProgress, setModalWorkoutProgress] = useState(false);
  const user = useAppSelector((state) => state.user);
  const { id } = useParams();

  function handleSetModalWorkoutProgress() {
    setModalWorkoutProgress((prev) => !prev);
  }

  useEffect(() => {
    getUserWorkouts(user.id, id).then((data) => {
      console.log(data);
    });
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-20 flex items-center justify-center">
      <div className="bg-white p-10 rounded-3xl">
        <Heading>Выберите тренировку</Heading>
        <div></div>
      </div>
    </div>
  );
};

export default PopBrowseWorkout;
