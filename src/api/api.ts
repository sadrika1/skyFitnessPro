import { initializeApp } from "firebase/app";
import { getStorage, ref as storageRef, getBlob } from "firebase/storage";
import { CourseType } from "../types";
import { getDatabase, ref, get, child, push } from "firebase/database";
import {compareByOrder} from "./utils"; // REALTIME DB

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
const database = getDatabase(firebaseApp);

// export const getCourses = async () => {
//     const result: CourseType[] = [];
//
//     try {
//         const q = query(collection(db, coursesCollection));
//         const documents = await getDocs(q);
//
//         documents.forEach((document) => {
//             result.push(document.data() as CourseType)
//         });
//     } catch (e) {
//         console.error(e)
//     }
//
//
//     return result;
//
// }


export const fetchAndProcessImage = async (src:string) => {

    const storage = getStorage();
    const stRef = storageRef(storage, `gs://fitnes-bro.appspot.com/${src}`)
    const blob = await getBlob(stRef)

    const url = URL.createObjectURL(blob)
    // const url=URL.revokeObjectURL(urlBlob)
    // window.open(url)
    return url
}

export const fetchAddFavoriteCourseToUser = async (userId: string, courseId: string) => {
    push(ref(database, `users/${userId}/courses`), {
        courseId,
    })
}

// export function writeUserData(userId, name, email, imageUrl) {
//     set(ref(database, 'users/' + userId), {
//         username: name,
//         email: email,
//         profile_picture : imageUrl
//     });
// }

export const getCourses = async () => {
    let result: CourseType[] = [];

    try {
        const snapshot = await get(child(ref(database), `courses`));

        if (snapshot.exists()) {
            Object.keys(snapshot.val()).forEach((key) => {
                result.push(snapshot.val()[key])
            })

            result = result.sort(compareByOrder);
        }
    } catch (e) {
        console.error(e)
    }

    return result;
}
