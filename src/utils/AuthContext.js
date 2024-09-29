import React, { createContext, useState, useContext } from 'react';
import { useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(null);

    return (
        <AuthContext.Provider value={{ token, setToken }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const [token, setToken] = useState(() => localStorage.getItem('token'));
  
    useEffect(() => {
      if (token) {
        localStorage.setItem('token', token);
      } else {
        localStorage.removeItem('token');
      }
    }, [token]);
  
    return { token, setToken };
  };
  
//   export default useAuth;
