
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { doc, getFirestore, setDoc } from 'firebase/firestore';
import { toast } from "react-toastify";
const firebaseConfig = {
    apiKey: "AIzaSyCR38v0Zi6FazW8-v-nJk1WQ9PuhgQBh_s",
    authDomain: "chat-app-gs-ca5e4.firebaseapp.com",
    projectId: "chat-app-gs-ca5e4",
    storageBucket: "chat-app-gs-ca5e4.firebasestorage.app",
    messagingSenderId: "1069343421933",
    appId: "1:1069343421933:web:78ba32fccde005338723e4"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);


const signup = async (username, email, password) => {
    console.log("IN Singup", username, email, password);
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        await setDoc(doc(db, "users", user.uid), {
            id: user.uid,
            username: username.toLowerCase(),
            email,
            name: "",
            avatar: "",
            bio: "Hey, There i am using chat app",
            lastSeen: Date.now(),
        })
        await setDoc(doc(db, 'chats', user.uid), {
            chatData: []
        })
    }
    catch (error) {
        console.error(error);
        toast.error(error.code.split("/")[1].split("-").join())
        // toast.error(error.message.split(":")[1].trim());
        // toast.error(error.message.split("(")[0].trim())



    }
}

const login = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password)
    }
    catch (error) {
        console.error(error);
        toast.error(error.code.split("/")[1].split("-").join(" "));
    }
}

const logout = async () => {
    try {
        await signOut(auth);
    }
    catch (error) {
        console.error(error);
        toast.error(error.code.split("/")[1].split("-").join(" "));
    }
}

export { signup, login, logout, auth, db }