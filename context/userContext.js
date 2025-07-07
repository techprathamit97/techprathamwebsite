"use client";

import { useSession } from "next-auth/react";
import React, { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);
  const [activeTab, setActiveTab] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const [currentTab, setCurrentTab] = useState("profile");
  const [userData, setUserData] = useState({});

  const { data: session } = useSession();
  const user = session?.user?.email || null;

  const yearData = new Date();
  let currentYear = yearData.getFullYear();

  const fetchUserData = async () => {
    if (!user) {
      setLoading(false);
      setAuthenticated(false);
      setIsAdmin(false);
      setUserData({});
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(`/api/users/email?email=${user}`);
      if (!res.ok) {
        throw new Error("Failed to fetch user details");
      }

      const fetchedUserData = await res.json();
      setUserData(fetchedUserData);
      setAuthenticated(true);

      setIsAdmin(fetchedUserData?.role?.type === "admin");
    } catch (error) {
      console.error("Error fetching user data:", error);
      setAuthenticated(false);
      setIsAdmin(false);
      setUserData({});
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, [user]);

  const refreshUserData = () => {
    fetchUserData();
  };

  const checkAdminAccess = () => {
    return userData?.role?.type === "admin";
  };

  const getUserRole = () => {
    return {
      type: userData?.role?.type || "user",
      position: userData?.role?.position || "",
    };
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
        currentTab,
        setCurrentTab,
        isAdmin,
        checkAdminAccess,
        getUserRole,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
