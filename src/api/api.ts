import { initializeApp } from "firebase/app";
import { getFirestore, query, collection, getDocs, addDoc } from "firebase/firestore";
import { getStorage, ref, getBlob } from "firebase/storage";
import { CourseType } from "../types";

const firebaseConfig = {
    apiKey: "AIzaSyCZ-T7GGXFj79VGYQYB6Ff4E-vddPHVb8Q",
    authDomain: "fitnes-bro.firebaseapp.com",
    databaseURL: "https://fitnes-bro-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "fitnes-bro",
    storageBucket: "fitnes-bro.appspot.com",
    messagingSenderId: "863868276370",
    appId: "1:863868276370:web:289ae91c6ceddf3387604b"
};


const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp)

const coursesCollection = 'courses';
const userFavoriteCourses = 'favorite-courses';

export const getCourses = async () => {
    const result: CourseType[] = [];

    try {
        const q = query(collection(db, coursesCollection));
        const documents = await getDocs(q);

        documents.forEach((document) => {
            result.push(document.data() as CourseType)

        });
    } catch (e) {
        console.error(e)
    }


    return result;

}


export const fetchAndProcessImage = async (src:string) => {

    const storage = getStorage();
    const storageRef = ref(storage, `gs://fitnes-bro.appspot.com/${src}`)
    const blob = await getBlob(storageRef)

    const url = URL.createObjectURL(blob)
    // const url=URL.revokeObjectURL(urlBlob)
    // window.open(url)
    return url
}

export const fetchAddFavoriteCourseToUser = async (userId: string, courseId: string) => {
    const db = getFirestore();

    try {
        await addDoc(collection(db, userFavoriteCourses), {
            userId,
            courseId,
        });
    } catch (error) {
        return Promise.reject(error);
    }

}


