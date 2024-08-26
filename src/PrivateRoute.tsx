import React, { useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";

type PrivateRouteProps = {
  children: React.ReactNode;
};

export default function PrivateRoute({ children }: PrivateRouteProps) {
  const [isAuth, setIsAuth] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    console.log("PrivateRoute useEffect triggered");
    async () => {
      console.log("attempting fetch");
      try {
        await fetch("http://localhost:3001/refresh", {
          method: "GET",
          credentials: "include",
          signal: signal,
        });
        if (res.ok) {
          () => setIsAuth(true);
          console.log("res.ok for refresh endpoint");
        } else {
          console.log("not authorized to see private route");
          alert(
            "You are not authorised to view this page, please log in with the valid credentials for access.",
          );
        }
      } catch (error) {
        console.error(error);
      }
    };
    return () => {
      controller.abort();
    };
  }, []);
  return isAuth ? (
    <>{children}</>
  ) : (
    <Navigate to="/login" replace state={{ from: location }} />
  );
}
