import { userData } from "../types";
import { storageAvailable } from "./storageAvailable";
import dateParser from "./dateParser";
import { demoUserData } from "../demoData/demoProjects";

export function initializeUserData(): userData {
  if (storageAvailable("localStorage")) {
    const dataString = localStorage.getItem("userData");
    if (dataString) {
      console.log("dataString exists");
      const localStorageUserData = dateParser(JSON.parse(dataString));
      console.log("printing parsed localStorageUserData");
      console.log(localStorageUserData);
      const timeDiff =
        localStorageUserData.timeUpdated.getTime() -
        demoUserData.timeUpdated.getTime();
      console.log(`printing time diff between local and demo data ${timeDiff}`);
      if (timeDiff > 0) {
        return localStorageUserData;
      } else {
        return demoUserData;
      }
    } else {
      console.log("data string does not exist");
    }
  } else {
    prompt(
      "Local storage is not made available. Changes saved will not persist when browser is closed!",
    );
  }
  return demoUserData;
}
