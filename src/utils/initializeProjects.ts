import React, { SetStateAction } from "react";
import { projects } from "../demoData/demoProjects";
import { storageAvailable } from "./storageAvailable";

export function initializeProjects(
  userProjects: {
    userName: string;
    timeUpdated: Date;
    projects: projects[];
  },
  setUserProjects: React.Dispatch<
    SetStateAction<{
      userName: string;
      timeUpdated: Date;
      projects: projects[];
    }>
  >,
) {
  if (storageAvailable("localStorage")) {
    const dataString = localStorage.getItem("userProjects");
    if (dataString) {
      setUserProjects(JSON.parse(dataString));
    } else {
      localStorage.setItem("userProjects", JSON.stringify(userProjects));
    }
  } else {
    prompt(
      "Local storage is not made available. Changes saved will not persist when browser is closed!",
    );
  }
}
