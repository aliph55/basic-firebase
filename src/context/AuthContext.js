import { createContext, useEffect, useState, useContext } from "react";
import { auth } from "../firebase.config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
} from "firebase/auth";

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState({});

  function signUp(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  function logIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function logOut() {
    return signOut(auth);
  }

  useEffect(() => {
    const unsubscrible = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscrible();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ user, signUp, logOut, logIn, auth }}>
      {children}
    </AuthContext.Provider>
  );
}
export const pro = new GoogleAuthProvider();
export function UserAuth() {
  return useContext(AuthContext);
}
