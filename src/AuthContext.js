import React, { useContext, useEffect, useState } from "react";
import { auth } from "./config/firebase";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);

  const logout = () => auth.signOut();

  const value = { currentUser, logout };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
