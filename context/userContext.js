"use client";

import { useSession } from "next-auth/react";
import React, { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);
  const [activeTab, setActiveTab] = useState("");

  const { data: session } = useSession();
  const user = session?.user?.email || null;

  const yearData = new Date();
  let currentYear = yearData.getFullYear();

  const [userData, setUserData] = useState({});

  const fetchUserData = async () => {
    if (!user) {
      setLoading(false);
      return;
    }

    setLoading(true);
    if (user) {
      try {
        const res = await fetch(`/api/users/email?email=${user}`);
        if (!res.ok) {
          throw new Error("Failed to fetch user details");
        }

        const userData = await res.json();
        setUserData(userData);
        setAuthenticated(true);
      } catch (error) {
        console.error("Error fetching user data:", error);
      } finally {
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    fetchUserData();
  }, [user]);

  const refreshUserData = () => {
    setLoading(true);
    fetchUserData();
  };

  return (
    <UserContext.Provider
      value={{
        loading,
        setLoading,
        activeTab,
        setActiveTab,
        authenticated,
        setAuthenticated,
        userData,
        currentYear,
        refreshUserData,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
