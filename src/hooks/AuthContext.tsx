import { createContext, useContext, useEffect, useState } from "react";

import { Children } from "../@types/Children";
import { DataType, UserAuthType, UserType } from "../@types/user";
import { api } from "../config/api";

type InitialContextValue = {
  login: (value: UserAuthType) => void;
  user: UserType;
  logout: () => void;
};

const AuthContext = createContext({} as InitialContextValue);

export const AuthContextProvider = ({ children }: Children) => {
  const [userData, setUserData] = useState<DataType>({} as DataType);

  async function login({ email, password }: UserAuthType) {
    try {
      const { data } = await api.post<DataType>("/sessions", {
        email,
        password
      });
      const { user, token } = data;

      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      localStorage.setItem("@FMS:user", JSON.stringify(user));
      localStorage.setItem("@FMS:token", token);

      setUserData({ user, token });
    } catch (err) {
      console.log(err);
    }
  }

  async function logout() {
    localStorage.removeItem("@FMS:user");
    localStorage.removeItem("@FMS:token");

    api.defaults.headers.common["Authorization"] = "";

    setUserData({} as DataType);
  }

  useEffect(() => {
    const token = localStorage.getItem("@FMS:token");
    const user = localStorage.getItem("@FMS:user");
    if (token && user) {
      setUserData({ user: JSON.parse(user), token });

      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
  }, []);

  return (
    <AuthContext.Provider value={{ login, user: userData.user, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const { login, user, logout } = useContext(AuthContext);
  return { login, user, logout };
};
