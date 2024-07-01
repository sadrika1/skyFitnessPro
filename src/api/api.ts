import { initializeApp } from "firebase/app";
import { getFirestore, query, collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCZ-T7GGXFj79VGYQYB6Ff4E-vddPHVb8Q",
    authDomain: "fitnes-bro.firebaseapp.com",
    databaseURL: "https://fitnes-bro-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "fitnes-bro",
    storageBucket: "fitnes-bro.appspot.com",
    messagingSenderId: "863868276370",
    appId: "1:863868276370:web:289ae91c6ceddf3387604b"
};


const firebaseApp = initializeApp(firebaseConfig)
const db = getFirestore(firebaseApp)

const coursesCollection = 'courses';

export const getCourses = async () => {
    const result = [];
    try {
        const q = query(collection(db, coursesCollection));
        const documents = await getDocs(q);

        documents.forEach((document) => {
            result.push(document.data())
        });
    } catch (e) {
        console.error(e)
    }
    
    return result;
}
