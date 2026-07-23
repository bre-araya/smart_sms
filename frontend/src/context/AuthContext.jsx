"use client";

import { createContext, useState, useEffect } from "react";
import authService from "@/services/authService"; // Importing the authentication service for handling login and logout operations

export const AuthContext = createContext(); // Creating a context for authentication to share state and functions across components

export function AuthProvider({ children }) { // Creating a provider component to wrap around the application and provide authentication state and functions
  const [user, setUser] = useState(null);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  async function login(credentials) {
    setLoading(true);

    try {
      const response = await authService.login(credentials);

      localStorage.setItem("token", response.token);
      localStorage.setItem("refreshToken", response.refreshToken);
      localStorage.setItem("user", JSON.stringify(response.user));

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