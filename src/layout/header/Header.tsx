import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/userContext";
import { Button } from "../../../@/components/ui/button";
import logo from "../../../public/1.webp";

export default function Header() {
  const { user, logout } = useContext(UserContext);
  return (
    <div className="grid grid-cols-3 md:grid-cols-4 pt-4 md:pt-6">
      <div className="flex justify-center items-center">
        <img
          src={logo}
          className="aspect-square w-24 md:w-[40%] shadow-xl col-span-1"
        />
      </div>
      <div className="flex justify-between">
        <div className="self-center md:col-span-3 col-span-2">Legend</div>
        <Link to="/login">
          <Button
            className="border border-red-500 p-2 rounded-xl"
            onClick={logout}
            type="button"
          >
            Logout
          </Button>
        </Link>
      </div>
      {user.username && <p>Welcome, {user.username}</p>}
    </div>
  );
}
