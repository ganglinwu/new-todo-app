import React, { SetStateAction } from "react";
import { projects } from "../types";
import { storageAvailable } from "./storageAvailable";

export function initializeProjects(
  userData: {
    userName: string;
    timeUpdated: Date;
    projects: projects[];
  },
  setUserData: React.Dispatch<
    SetStateAction<{
      userName: string;
      timeUpdated: Date;
      projects: projects[];
    }>
  >,
) {
  if (storageAvailable("localStorage")) {
    const dataString = localStorage.getItem("userData");
    if (dataString) {
      setUserData(JSON.parse(dataString));
    } else {
      localStorage.setItem("userData", JSON.stringify(userData));
    }
  } else {
    prompt(
      "Local storage is not made available. Changes saved will not persist when browser is closed!",
    );
  }
}
