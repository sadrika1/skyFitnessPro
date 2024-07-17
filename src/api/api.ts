import { initializeApp } from "firebase/app";
import { getStorage, ref as storageRef, getBlob } from "firebase/storage";
import { CourseType } from "../types";
import { getDatabase, ref, get, child, set } from "firebase/database";
import { compareByOrder } from "./utils"; // REALTIME DB

const firebaseConfig = {
  apiKey: "AIzaSyCZ-T7GGXFj79VGYQYB6Ff4E-vddPHVb8Q",
  authDomain: "fitnes-bro.firebaseapp.com",
  databaseURL:
    "https://fitnes-bro-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "fitnes-bro",
  storageBucket: "fitnes-bro.appspot.com",
  messagingSenderId: "863868276370",
  appId: "1:863868276370:web:289ae91c6ceddf3387604b",
};

const firebaseApp = initializeApp(firebaseConfig);
const database = getDatabase(firebaseApp);

export const fetchAndProcessImage = async (src: string) => {
  const storage = getStorage();
  const stRef = storageRef(storage, `gs://fitnes-bro.appspot.com/${src}`);
  const blob = await getBlob(stRef);

  const url = URL.createObjectURL(blob);
  return url;
};

export const fetchAddFavoriteCourseToUser = async (
  userId: string,
  courseId: string
) => {
  const snapshot = await get(child(ref(database), `scheme/${courseId}`));
  if (snapshot.exists()) {
    set(ref(database, `users/${userId}/${courseId}`), snapshot.val());
  }
};
export const fetchAndProcessImageLaptop = async (src_laptop: string) => {
  const storage = getStorage();
  const stRef_laptop = storageRef(
    storage,
    `gs://fitnes-bro.appspot.com/${src_laptop}`
  );
  const blob = await getBlob(stRef_laptop);
  const url_laptop = URL.createObjectURL(blob);
  return url_laptop;
};

export const getCourses = async () => {
  let result: CourseType[] = [];

  try {
    const snapshot = await get(child(ref(database), `courses`));

    if (snapshot.exists()) {
      Object.keys(snapshot.val()).forEach((key) => {
        result.push(snapshot.val()[key]);
      });

      result = result.sort(compareByOrder);
    }
  } catch (e) {
    console.error(e);
  }

  return result;
};

export const getCourse = async (courseId: string) => {
  let result: CourseType[] = [];

  try {
    const snapshot = await get(child(ref(database), `courses/${courseId}`));

    if (snapshot.exists()) {
      result = snapshot.val();
    }
  } catch (e) {
    console.error(e);
  }

  return result;
};

export const getFavoriteCourseOfUser = async (userId: string) => {
  try {
    const snapshot = await get(child(ref(database), `users/${userId}`));

    if (snapshot.exists()) {
      const promises = Object.keys(snapshot.val()).map(async (key) => {
        const data = await getCourse(key);
        const dataWithProgress = {
          ...data,
          progress: snapshot.val()[key].progress,
        };
        return dataWithProgress;
      });

      const result = await Promise.all(promises);
      return result;
    }
  } catch (e) {
    console.error(e);
  }
};

export const deleteFavoriteCourse = async (
  userId: string,
  courseId: string
) => {
  set(ref(database, `users/${userId}/${courseId}`), {});
};

export const getUserWorkouts = async (userId: string, courseId: string) => {
  try {
    const workoutIdsSnapshot = await get(
      child(ref(database), `courses/${courseId}/workouts`)
    );

    if (workoutIdsSnapshot.exists()) {
      const workoutIds = workoutIdsSnapshot.val();
      let workouts = [];

      for (let id of workoutIds) {
        const workoutDataSnapshot = await get(
          child(ref(database), `workouts/${id}/name`)
        );

        if (workoutDataSnapshot.exists()) {
          const progressSnapshot = await get(
            child(ref(database), `users/${userId}/${courseId}/${id}/done`)
          );

          if (progressSnapshot.exists()) {
            workouts.push({
              name: workoutDataSnapshot.val(),
              progress: progressSnapshot.val(),
            });
          }
        }
      }

      return workouts; // Возвращаем готовый массив тренировок
    }

    return []; // Возвращаем пустой массив, если workoutIds не существует
  } catch (e) {
    console.error(e);
    return []; // Возвращаем пустой массив в случае ошибки
  }
};
