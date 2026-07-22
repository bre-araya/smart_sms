"use client";

import { createContext, useState } from "react"; 
import authService from "@/services/authService"; // Importing the authentication service for handling login and logout operations

export const AuthContext = createContext(); // Creating a context for authentication to share state and functions across components

export function AuthProvider({ children }) { // Creating a provider component to wrap around the application and provide authentication state and functions
  const [user, setUser] = useState(null);

  const [loading, setLoading] = useState(false);

  async function login(credentials) {
    setLoading(true);

    try {
      const response = await authService.login(credentials); // Calling the login function from the authentication service with the provided credentials

      localStorage.setItem("token", response.token); // Storing the authentication token in local storage for maintaining user session

      localStorage.setItem(
        "refreshToken",
        response.refreshToken
      );

      setUser(response.user);

      window.location.href = "/dashboard";
    } finally {
      setLoading(false);
    }
  }

  function logout() {
    localStorage.clear();

    setUser(null);

    window.location.href = "/login";
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}