import React, { useContext, useEffect } from "react";
import { UserContext } from "./context/userContext";
import NotAuthorised from "./pages/NotAuthorised";
import { Outlet } from "react-router-dom";

export default function PrivateRoute() {
  const { isAuth, setIsAuth } = useContext(UserContext);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    console.log("PrivateRoute useEffect triggered");
    const refresh = async () => {
      console.log("attempting fetch");
      try {
        const res = await fetch("http://localhost:3001/refresh", {
          method: "GET",
          credentials: "include",
          signal: signal,
        });
        if (res.ok) {
          setIsAuth(true);
        } else {
          setIsAuth(false);
          alert(
            "You are not authorised to view this page, please log in with the valid credentials for access.",
          );
        }
      } catch (error) {
        console.error(error);
      }
    };
    refresh().then(() => {
      return () => {
        controller.abort();
      };
    });
  }, []);
  console.log(isAuth);
  return isAuth ? <Outlet /> : <NotAuthorised />;
}
