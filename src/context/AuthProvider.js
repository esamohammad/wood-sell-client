import React, { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import app from '../firebase/Firebase.config'; 

export const AuthContext = createContext();
const auth = getAuth(app)



const AuthProvider = ({ children }) => {

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






    const authInfo = {
        createUser,
        signIn
    }





    return (
        <AuthContext.Provider
            value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;