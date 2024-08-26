import { useState } from "react";
import { useLocation, useNavigate, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import LoginPage from "./pages/LoginPage";
import Header from "./layout/header/Header";
import { UserContext } from "./context/userContext";
import PrivateRoute from "./PrivateRoute";

export default function App() {
  const navigate = useNavigate();

  const [user, setUser] = useState<{
    username: string | null;
    email: string | null;
  }>({ username: null, email: null });

  const location = useLocation();

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
      // location.state?.from ? navigate(location.state.from) : navigate("/");
      navigate("/");
    } else {
      alert("Login unsuccessful, please check and try again");
    }
  };

  const logout = async () => {
    await fetch("http://localhost:3001/logout", {
      method: "GET",
      credentials: "include",
    });
    setUser({ username: null, email: null });
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      <Header />
      <Routes>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route
          path="/"
          element={<PrivateRoute children={<Index />}></PrivateRoute>}
        ></Route>
      </Routes>
    </UserContext.Provider>
  );
}
