import { userData } from "../types";
import { storageAvailable } from "./storageAvailable";
import dateParser from "./dateParser";
import { demoUserData } from "../demoData/demoProjects";

export function initializeUserData(): userData {
  if (storageAvailable("localStorage")) {
    const dataString = localStorage.getItem("userData");
    if (dataString) {
      const localStorageUserData = dateParser(JSON.parse(dataString));
      const timeDiff =
        localStorageUserData.timeUpdated.getTime() -
        demoUserData.timeUpdated.getTime();
      if (timeDiff > 0) {
        return localStorageUserData;
      } else {
        return demoUserData;
      }
    } else {
      prompt("data string does not exist");
    }
  } else {
    prompt(
      "Local storage is not made available. Changes saved will not persist when browser is closed!",
    );
  }
  return demoUserData;
}
