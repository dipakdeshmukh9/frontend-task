import { createContext, useState } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userDetails, setUserDetails] = useState(null);

  const login = (details) => {
    setUserDetails(details);
    setIsAuthenticated(true);
  };

  const logout = () => {
    setUserDetails(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, userDetails, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
