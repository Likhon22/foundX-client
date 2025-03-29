"use client";
import React, {
  createContext,
  Dispatch,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

import { TLoggedInUser } from "../types/auth";
import { getCurrentUser } from "../services/AuthServices";

interface IUserProviderValues {
  user: TLoggedInUser | null;
  isLoading: boolean;
  setUser: (user: TLoggedInUser | null) => void;
  setIsLoading: Dispatch<React.SetStateAction<boolean>>;
}
export const UserContext = createContext<IUserProviderValues | undefined>(
  undefined
);
const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<TLoggedInUser | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const handleUser = async () => {
    const userInfo = await getCurrentUser();
    if (userInfo) {
      setUser(userInfo);
      setIsLoading(false);
    } else {
      setUser(null);
      setIsLoading(false);
    }
  };
  useEffect(() => {
    handleUser();
  }, [isLoading]);

  const value = {
    user,
    isLoading,
    setUser,
    setIsLoading,
  };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }

  return context;
};

export default UserProvider;
