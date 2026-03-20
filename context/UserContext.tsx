import { createContext, useEffect, useState } from "react";
import { account } from "../lib/appwrite";
import { ID, Models } from "react-native-appwrite";
import React from "react";
import { toast } from "../lib/Toast";
import { router } from "expo-router";

type loginprops = {
  email: string;
  password: string;
  name?: string;
};

type UserContextType = {
  user: Models.User | undefined;
  login: (props: loginprops) => Promise<void>;
  register: (props: loginprops) => Promise<void>;
  logout: () => Promise<void>;
};

export const UserContext = createContext<UserContextType | undefined>(
  undefined,
);

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<Models.User | undefined>();

  const login = async ({ email, password }: loginprops) => {
    const loggedIn = await account.createEmailPasswordSession({
      email,
      password,
    });
    const currentUser = await account.get();
    setUser(currentUser);
    toast("Welcome back. You are logged in");
    router.replace("/");
  };

  const register = async ({ email, password, name }: loginprops) => {
    await account.create({
      userId: ID.unique(),
      email,
      password,
      name,
    });
    await login({ email, password });
    toast("Account created");
  };

  const logout = async () => {
    await account.deleteSession({ sessionId: "current" });
    setUser(undefined);
    toast("Logged out");
  };

  async function getInitialValue() {
    try {
      const response = await account.get();
      setUser(response);
    } catch (error) {
      setUser(undefined);
    }
  }

  useEffect(() => {
    getInitialValue();
  }, []);

  return (
    <UserContext.Provider value={{ user, login, register, logout }}>
      {children}
    </UserContext.Provider>
  );
}
