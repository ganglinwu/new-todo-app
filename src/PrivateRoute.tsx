import React, { useContext, useEffect } from "react";
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
          console.log("res is ok");
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
  return isAuth ? (
    <>{children}</>
  ) : (
    <Navigate to="/login" replace state={{ from: location }} />
  );
}
