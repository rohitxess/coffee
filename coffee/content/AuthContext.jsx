// AuthContext state is globally neccessary 

import { createUserWithEmailAndPassword, sendPasswordResetEmail, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useState } from "react";

const AuthContext = createContext();

// to create a custom hook which can be used to destructure the values in the other function 

export function useAuth() {
    return 
}
export function AuthContext(props) {
    const { children } = props;
    const [ user, setUser ] = useState(null);
    const [ globalData, setGlobalData ] = useState(null);
    const [ isLoading, setIsLoading ] = useState(false);
    
    // value holds the values of the state in an object 
    const value = { user, globalData, setGlobalData, isLoading, signup, login }

    function signup(email, password){
        return createUserWithEmailAndPassword(auth, email, password)
    }
    function login(email, password){
        return signInWithEmailAndPassword(auth, email, password)
    }

    function logout(email, password){
        setUser(null)
        setGlobalData(null)
        return signOut(auth)
    }

    function resetPassword(email){
        return sendPasswordResetEmail(auth, email)
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}