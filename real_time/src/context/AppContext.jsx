import { createContext, useEffect, useState } from "react";
import { doc, getDoc, onSnapshot, updateDoc } from 'firebase/firestore';
import { auth, db } from '../config/Firebase';
import { useNavigate } from 'react-router-dom'
export const AppContext = createContext();

const AppContextProvider = (props) => {
    const [userData, setUserData] = useState(null);
    const [chatData, setChatData] = useState(null);
    const navigate = useNavigate();
    const loadUserData = async (uid) => {
        try {
            const userRef = doc(db, 'users', uid);
            const userSnap = await getDoc(userRef);
            const userData = userSnap.data();
            setUserData(userData);
            if (userData.avatar && userData.name) {
                navigate('/chat');
            }
            else {
                navigate('/profile-update');
            }
            await updateDoc(userRef, {
                lastSeen: Date.now()
            })
            setInterval(async () => {
                if (auth.chatUser) {
                    await updateDoc(userRef, {
                        lastSeen: Date.now()
                    })
                }

            }, 60000)
        }
        catch (error) {

        }
    }
    useEffect(() => {
        if (userData) {
            const chatRef = doc(db, 'chats', userData.id);
            const unSub = onSnapshot(chatRef, async (res) => {
                const chatItems = res.data().chatsData;
                const tempData = [];
                for (const item of chatItems) {
                    const userRef = doc(db, 'users', item.rId);
                    const userSnap = await getDoc(userRef);
                    const userData = userSnap.data();
                    tempData.push({...item, userData})
                }
                setChatData(tempData.sort((a,b)=>
                b.updatedAt - a.updatedAt))
            })
            return()=>{
                unSub();
            }
        }
    }, [userData])
    const value = {
        userData, setUserData,
        chatData, setChatData,
        loadUserData,
    }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider;