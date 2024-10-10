import { userData } from "../types";
import { storageAvailable } from "./storageAvailable";
import dateParser from "./dateParser";
import { demoUserData } from "../demoData/demoProjects";

export function initializeUserData(): userData {
  if (storageAvailable("localStorage")) {
    const dataString = localStorage.getItem("userData");
    if (dataString) {
      const localStorageUserData = dateParser(JSON.parse(dataString));
    } else {
      alert("Local storage is empty, proceeding to load demodata");
    }
  } else {
    prompt(
      "Local storage is not made available. Changes saved will not persist when browser is closed!",
    );
  }
  return demoUserData;
}
