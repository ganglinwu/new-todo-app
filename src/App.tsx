import { useState } from "react";
import { useLocation, redirect, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import LoginPage from "./pages/LoginPage";
import Error404 from "./pages/Error404";
import Header from "./layout/header/Header";
import { UserContext } from "./context/userContext";
import PrivateRoute from "./PrivateRoute";

export default function App() {
  const [user, setUser] = useState<{
    username: string | null;
    email: string | null;
  }>({ username: null, email: null });

  const [userData, setUserData] = useState({
    userName: "",
  });

  const [isAuth, setIsAuth] = useState(false);

  const [isAuth, setIsAuth] = useState(false);
  // const location = useLocation();


  const login = async (username: string, password: string) => {
    const res = await fetch("http://localhost:3001/login", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userName: username,
        password: password,
      }),
    });
    if (res.ok) {
      const jsonResponse = await res.json();
      setUser({ username: jsonResponse.username, email: jsonResponse.email });
      alert("Login success!");

      redirect("/");
      console.log("redirected");
    } else {
      alert("Login unsuccessful, please check and try again");
    }
  };

  const logout = async () => {
    const res = await fetch("http://localhost:3001/logout", {
      method: "GET",
      credentials: "include",
    });

    if (res.ok) {
      setUser({ username: null, email: null });
      redirect("/login");
      setIsAuth(false)
      console.log("logged out");
    } else {
      alert("logout failed, do try again later");
    }
  };

  return (
    <UserContext.Provider
      value={{ user, login, logout, isAuth, setIsAuth, userData, setUserData }}
    >
      <Header />
      <Routes>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route element={<PrivateRoute />}>
          <Route path="/index" element={<Index />} />
          <Route path="*" element={<Error404 />} />
        </Route>
      </Routes>
    </UserContext.Provider>
  );
}
