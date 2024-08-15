import { useContext, createContext, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import LoginPage from "./pages/LoginPage";

export default function App() {
  const [user, setUser] = useState({});
  const UserContext = useContext(
    createContext<user>({
      user,
    }),
  );
  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/" element={<Index />}></Route>
      </Routes>
    </>
  );
}
