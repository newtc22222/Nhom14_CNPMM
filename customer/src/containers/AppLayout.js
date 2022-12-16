import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { Container } from "@mui/system";
import Headers from "../components/header/Header";
import Footer from "../components/footer/Footer";
import apiUsers from "../apis/users.api";
import UserContext from "../contexts/UserContext";

const AppLayout = () => {
  const [user, setUser] = useState(null);

  const login = async (account) => {
    const userLogin = await apiUsers.login(account);

    const userInSystem = window.sessionStorage.getItem("userId");
    if (!userInSystem) window.sessionStorage.setItem("userId", userLogin._id);

    setUser(userLogin);
  };

  const logout = () => {
    window.sessionStorage.removeItem("userId");
    setUser((prev) => null);
  };

  const register = async (newUser) => {
    const response = await apiUsers.createNewUser(newUser);
    console.log(response);
  };

  const updateInformation = async (newInformation, userId) => {
    const response = await apiUsers.updateUser(newInformation, userId);
    console.log(response);
  };

  useEffect(() => {
    const callAPI = async () => {
      const userIdInSessionStorage = window.sessionStorage.getItem("userId");
      if (userIdInSessionStorage) {
        const userInSession = await apiUsers.getUserWithId(
          userIdInSessionStorage
        );
        setUser(userInSession);
      }
    };

    return () => {
      callAPI();
    };
  }, []);

  return (
    <UserContext.Provider
      value={{ user, login, logout, register, updateInformation }}
    >
      <Headers />
      <div
        style={{
          position: "relative",
          marginTop: "calc(128px + 10px)",
          marginBottom: "10px",
        }}
      >
        <Container>
          <Outlet />
        </Container>
      </div>
      <Footer />
    </UserContext.Provider>
  );
};

export default AppLayout;
