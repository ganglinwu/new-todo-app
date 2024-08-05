import React, { SetStateAction } from "react";
import { Button } from "../../../@/components/ui/button";
import logo from "../../../public/1.webp";

type headerProps = {
  setisLoggedin: React.Dispatch<SetStateAction<Boolean>>;
  setisAuth: React.Dispatch<SetStateAction<Boolean>>;
};

export default function Header({ setisLoggedin, setisAuth }: headerProps) {
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
        <Button
          className="border border-red-500 p-2 rounded-xl"
          onClick={async () => {
            console.log("logout clicked");
            const res = await fetch("http://localhost:3001/logout", {
              credentials: "include",
            });
            if (res.ok) {
              () => console.log(`printing res: ${res}`);
              () => setisLoggedin(false);
              () => setisAuth(false);
            } else {
              alert("Something went wrong, logout unsucessful");
            }
          }}
          type="button"
        >
          Logout
        </Button>
      </div>
    </div>
  );
}
