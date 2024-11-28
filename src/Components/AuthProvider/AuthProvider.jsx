import React, { createContext, useEffect, useState } from 'react';
import app from '../FireBase/FireBase';
import {
    createUserWithEmailAndPassword,
    getAuth,
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
  } from "firebase/auth";
export const AuthContext = createContext()
// const storage = getStorage(app);
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true)


    const loginGoogle =()=>{
      setLoading(true)
      return signInWithPopup(auth,googleProvider)
  }

  const createUserEmail = (email,password)=>{
      setLoading(true)
      return createUserWithEmailAndPassword(auth,email,password)
  }
  const loginByemail = (email,password)=>{
      setLoading(true)
      return signInWithEmailAndPassword(auth,email,password)
  }
  const userUpdate =(name,photo)=>{
      return updateProfile(auth.currentUser,{
          displayName:name, photoURL: photo
      })
  }

    useEffect(() => {
      const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
        setLoading(false);
        if (!currentUser) console.log("User logged out");
      });
      return () => unSubscribe();
    }, []);
    
    
    const logOut = async () => {
      try {
        await signOut(auth);
        setUser(null); // Explicitly setting user state to null
        console.log("Successfully logged out");
      } catch (error) {
        console.error("Logout failed:", error.message);
      }
    };
    
  
    const authInfo = {
      user,
      loading,
      loginGoogle,
      createUserEmail,
      loginByemail,
      userUpdate,
      logOut
    };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider >
    );
};

export default AuthProvider;