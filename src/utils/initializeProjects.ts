import React, { SetStateAction } from "react";
import { userData } from "../types";
import { storageAvailable } from "./storageAvailable";
import dateParser from "./dateParser";
import { demoUserData } from "../demoData/demoProjects";

export function initializeProjects(
  userData: userData,
  setUserData: React.Dispatch<SetStateAction<userData>>,
) {
  if (storageAvailable("localStorage")) {
    const dataString = localStorage.getItem("userData");
    if (dataString) {
      const localStorageUserData = dateParser(JSON.parse(dataString));
      const timeDiff =
        localStorageUserData.timeUpdated.getTime() -
        demoUserData.timeUpdated.getTime();
      if (timeDiff > 0) {
        setUserData(localStorageUserData);
      } else {
        localStorage.setItem("userData", JSON.stringify(userData));
      }
    } else {
      prompt(
        "Local storage is not made available. Changes saved will not persist when browser is closed!",
      );
    }
  }
}
