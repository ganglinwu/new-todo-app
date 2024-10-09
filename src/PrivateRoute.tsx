import React, { useContext, useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { UserContext } from "./context/userContext";
import { Outlet } from "react-router-dom";

export default function PrivateRoute() {
  const { isAuth, setIsAuth } = useContext(UserContext);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    const fetchData = async () => {
      const res = await fetch("http://localhost:3001/refresh", {
        method: "GET",
        credentials: "include",
        signal: signal,
      });
      return res;
    };
    fetchData()
      .then((res) => {
        if (res.ok) {
          setIsAuth(true);
        } else {
          setIsAuth(false);
          alert(
            "You are not authorised to view this page, please log in with the valid credentials for access.",
          );
        }
      })
      .catch((err) => console.error(err));
    // return () => {
    //   controller.abort();
    // };
  }, []);
  return isAuth ? <Outlet /> : <NotAuthorised />;
}
