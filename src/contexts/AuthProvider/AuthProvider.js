import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import app from "../../firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const providerLogin = (provider) => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }

    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile)
    }

    const logOut = () => {
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('from state', currentUser);
            if (currentUser === null || currentUser.uid) {
                setUser(currentUser);
            }
            setLoading(false)
        })
        return () => unsubscribe()
    }, [])


    // dark mode code start

    const [darkTheme, setDarkTheme] = useState(false);

    useEffect(() => {
        if (window.localStorage.getItem("DarkTheme") !== null) {
            setDarkTheme(JSON.parse(window.localStorage.getItem("DarkTheme")));
        }
    }, []);

    useEffect(() => {
        if (darkTheme === true) {
            document.querySelector("html").classList.add("dark");
        } else {
            document.querySelector("html").classList.remove("dark");
        }

        window.localStorage.setItem("DarkTheme", JSON.stringify(darkTheme));
    }, [darkTheme]);

    // dark mode code end




    const authInfo = { user, loading, setLoading, createUser, signIn, providerLogin, updateUserProfile, logOut, darkTheme, setDarkTheme }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )

}

export default AuthProvider;