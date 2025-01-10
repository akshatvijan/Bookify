import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebaseconfig";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup,GoogleAuthProvider, signOut, onAuthStateChanged} from "firebase/auth";
const googleProvider = new GoogleAuthProvider();

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

// authProvider

export const AuthProvider = ({ children }) => {
    const [currentUser,setCurrentUser]  = useState(null);
    const [loading,setLoading]  = useState(true);
    // register a user 
    const registerUser = async (email,password) =>{
        return await createUserWithEmailAndPassword(auth,email,password)
    }
    const LoginUser = async(email,password) =>{
        return await signInWithEmailAndPassword(auth,email,password)
    }
    // sign up with google 
    const signInWithGoogle = async() =>{
        return await signInWithPopup(auth,googleProvider);
    }
    const logout = async() =>{
      return signOut(auth)
    }

    // manage user 
    useEffect(()=>{
      const unsubscribe = onAuthStateChanged(auth, (user)=>{
        setCurrentUser(user);
        setLoading(false);
        if(user) {
          const email = user.email;
          const photoURL = user.photoURL;
          const displayName = user.displayName;
          const userData = {
            email,username : displayName, photo : photoURL
          }
        }
      })
      return () => unsubscribe();
    },[])
  
  const value = {
    currentUser,
    loading,
    registerUser,
    LoginUser,
    signInWithGoogle,
    logout
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
