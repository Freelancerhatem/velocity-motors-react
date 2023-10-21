import {  createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { GoogleAuthProvider,createUserWithEmailAndPassword,signOut,updateProfile ,onAuthStateChanged,signInWithEmailAndPassword, signInWithPopup, signInWithRedirect} from "firebase/auth";
import auth from "../Addproduct/Firebase/firebase.config";

export const AuthContext  = createContext(null);

const AuthProvider = ({children}) => {
    const[user,setUser] = useState(null);
    const [loading,setLoading] = useState(true)
    const provider = new GoogleAuthProvider();
    const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)

    }
    const signInuser =(email,password)=>{
        setLoading(true)
       return signInWithEmailAndPassword(auth,email,password)
    };
    const googleLogin=()=>{
        
        setLoading(true)
        return signInWithRedirect(auth, provider);
        
    }
    const signOutuser=()=>{
        signOut(auth)
        .then(console.log('sign out'))
        .catch(err=>{
            console.log(err.message)
        })
    }
    
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser);
            setLoading(false);
        });
        return ()=> unSubscribe();
    },[]);
    
    const authInfo ={
        createUser,
        updateProfile,
        signInuser,
        googleLogin,
        signOutuser,
        setUser,
        user,
        setLoading
    }
        if(loading){
            return <span className="loading loading-dots loading-lg"></span>
        }
    
        else{
            return (
                <AuthContext.Provider value={authInfo}>
                    {children}
                </AuthContext.Provider>
            );
        }
    
};
AuthProvider.propTypes = {
    children:PropTypes.node
    
};
export default AuthProvider;

