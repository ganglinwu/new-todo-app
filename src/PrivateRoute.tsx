import React, { useContext, useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { UserContext } from "./context/userContext";

type PrivateRouteProps = {
  children: React.ReactNode;
};

export default function PrivateRoute({ children }: PrivateRouteProps) {
  const location = useLocation();
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
      console.log(`printing response: ${res}`);
      return res;
    };
    fetchData()
      .then((res) => {
        if (res.ok) {
          console.log("res is ok");
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
  return isAuth ? (
    <>{children}</>
  ) : (
    <Navigate to="/login" replace state={{ from: location }} />
  );
}
