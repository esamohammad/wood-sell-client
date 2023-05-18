import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import app from '../firebase/Firebase.config'; 

export const AuthContext = createContext();
const auth = getAuth(app)



const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null); //!observer set user state.

// !====================================
// *create user with email and password
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
// *----------------------------------\\




    // !====================================
    // *Login with email and password after registration
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    // *----------------------------------\\




    // !====================================
    // *Logout
    const logOut = () => {
        return signOut(auth);
    }
    // *----------------------------------\\




    // !====================================
    // *Update user profile -name ,photo url
    const updateUser = (userInfo) => {
        return updateProfile(user, userInfo);
    }
    // *----------------------------------\\




    // !====================================
    // *Observer Functions - user is signed or not signed.
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('user observing');
            setUser(currentUser);
        });

        return () => unsubscribe();
    }, [])
   // *----------------------------------\\






    const authInfo = {
        createUser,
        signIn,
        logOut,
        user,
        updateUser
    }





    return (
        <AuthContext.Provider
            value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;