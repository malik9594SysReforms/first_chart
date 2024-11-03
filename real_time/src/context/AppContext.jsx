import { createContext, useState } from "react";
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../config/Firebase';
import {useNavigate} from 'react-router-dom'
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
            else{
                navigate('/profile-update');
            }
        }
        catch (error) {

        }
    }
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