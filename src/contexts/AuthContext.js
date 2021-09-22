import React, { useContext, useState, useEffect } from 'react';
import { auth } from '../firebase.js';
import firebase from 'firebase/app';

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setloading] = useState(true);
  const provider = new firebase.auth.GoogleAuthProvider();
  function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password);
  }

  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }

  function logout() {
    return auth.signOut();
  }
  function emailVerification() {
    return currentUser.sendEmailVerification();
  }
  function updateProfile() {
    return currentUser.displayName();
  }

  function signGoogle() {
    return auth.signInWithPopup(provider);
  }

  function forgotPassword(email) {
    return auth.sendPasswordResetEmail(email);
  }

  function updateEmail(email) {
    return currentUser.updateEmail(email);
  }

  function updatePassword(password) {
    return currentUser.updatePassword(password);
  }

  function signInWithPhoneNumber(number, recaptcha) {
    return auth.signInWithPhoneNumber(number, recaptcha);
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user);

      // }
      setloading(false);
    });
    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    signInWithPhoneNumber,
    emailVerification,
    signup,
    updateProfile,
    logout,
    signGoogle,
    forgotPassword,
    login,
    updateEmail,
    updatePassword,
  };
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
