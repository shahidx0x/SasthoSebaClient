import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
  sendPasswordResetEmail
  
} from "@firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../firebase/firebase.init";

initializeAuthentication();
const useFirebase = () => {
  const [user, SetUser] = useState({});
  const [admin, setAdmin] = useState({});
  const [ambulence, setAmbulence] = useState({});
  const [store, setStore] = useState({});
  const [doctor, setDoctor] = useState({});
  const auth = getAuth();
  const gProvider = new GoogleAuthProvider();

  
  const signInGoogle = () => {
    return signInWithPopup(auth, gProvider);
  };

  const registerUser = (name, email, pass) => {
    return createUserWithEmailAndPassword(auth, email, pass);
  };

  const login = (email, pass) => {
    return signInWithEmailAndPassword(auth, email, pass);
  };

  const resetPassword = (email) => {
    return sendPasswordResetEmail(auth,email);
  }

  const logout = () => {
    signOut(auth).then(() => {
      SetUser({});
      localStorage.removeItem("isAuth");
      localStorage.removeItem("isAdm");
      localStorage.removeItem("isDoc");
    });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        SetUser(user);
      }
    });
  });

  useEffect(() => {
    fetch(`https://api-sastho-seba.onrender.com/users/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        data.admin ? setAdmin(data) : setAdmin({});
        data.doctor ? setDoctor(data) : setDoctor({});
        data.store ? setStore(data) : setStore({});
        data.ambulence ? setAmbulence(data) : setAmbulence({});
      });
  }, [user.email]);

  return {
    auth,
    user,
    admin,
    store,
    ambulence,
    doctor,
    updateProfile,
    SetUser,
    registerUser,
    login,
    logout,
    signInGoogle,
    resetPassword
  };

};

export default useFirebase;
