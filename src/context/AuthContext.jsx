import { createContext, useContext, useEffect, useState } from "react";
import { auth, dp } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState({});

  function signUp(email, password) {
    createUserWithEmailAndPassword(auth, email, password);
    setDoc(doc(dp, "users", email), {
      saveShows: [],
    });
  }
  function logIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }
  function logOut() {
    return signOut(auth);
  }

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (current) => {
      setUser(current);
    });
    return () => {
      unSubscribe();
    };
  });
  return (
    <AuthContext.Provider value={{ signUp, logIn, logOut, user }}>
      {children}
    </AuthContext.Provider>
  );
}

export function UserAuth() {
  return useContext(AuthContext);
}
