import { initializeApp } from "firebase/app";
import { getFirestore, query, collection, getDocs } from "firebase/firestore";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { CourseType} from "../types";

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
const storage = getStorage();
const db = getFirestore(firebaseApp)

const coursesCollection = 'courses';

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

export const getImageUrl = (src: string) => {
    let result = '';

    getDownloadURL(ref(storage, src))
        .then((url) => {
            // TODO: тут вариант с генерацией ссылки, а еще можно попробовать с генерацией base64
            const xhr = new XMLHttpRequest();
            xhr.responseType = 'blob';
            xhr.open('GET', url, true);
            xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
            xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
            xhr.onload = (event) => {
                const blob = xhr.response;
                result = window.URL.createObjectURL(blob);
            };
            xhr.send();

            result = url;
        })
        .catch((e) => {
            console.error(e)
        });

    return result;
}
