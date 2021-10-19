import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useState, useEffect } from 'react';
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState("");

    const auth = getAuth();

    const handleName = (e) => {
        setName(e.target.value);

    }
    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    const setUserName = () => {
        updateProfile(auth.currentUser, { displayName: name })
            .then(result => { })
            .catch(error=>{
                setError(error.message);
            })

    }

    const handleRegistration = () => {
        // e.preventDefault();
        setIsLoading(true);

       return createUserWithEmailAndPassword(auth, email, password)
               .finally(() => setIsLoading(false));
    }

    const handleLogin = () => {
        // e.preventDefault();
        setIsLoading(true);

        return signInWithEmailAndPassword(auth, email, password)
               .finally(() => {setIsLoading(false)});
    }


    const signInUsingGoogle = () => {
        setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();

        return signInWithPopup(auth, googleProvider)
               .finally(() => {setIsLoading(false)});
    }

    // observe user state change
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [])

    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => { 
                setError("");
            })
            .catch(error=>{
                setError(error.message);
            })
            .finally(() => setIsLoading(false));
    }

    return {
        user,
        isLoading,
        signInUsingGoogle,
        logOut,
        handleName,
        handleEmail,
        handlePassword,
        handleRegistration,
        handleLogin,
        setUserName,
        error,
        setError
    }
}

export default useFirebase;