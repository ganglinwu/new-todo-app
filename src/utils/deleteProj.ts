import React, { SetStateAction } from "react";
import { projects, userData } from "../types";

export function deleteProj(
  projName: string,
  projects: projects[],
  setProjects: React.Dispatch<SetStateAction<projects[] | undefined>>,
) {
  const newProjects = projects.filter((proj) => {
    return proj.projectName !== projName;
  });
  setProjects(newProjects);
  alert("Project deleted.");
}

export function deleteAllProj(
  userData: userData,
  setUserData: React.Dispatch<SetStateAction<userData>>,
) {
  let userPrompt = prompt(
    "Please enter <All Projects> below to confirm erase.",
  );
  if (userPrompt === "All Projects") {
    let confirmErase = confirm(
      "Would you like to load demo data when the app restarts?",
    );
    const emptyUserData: userData = {
      userName: userData.userName,
      timeUpdated: confirmErase ? new Date("03-26-1985") : new Date(),
      projects: [],
    };
    setUserData(emptyUserData);
    localStorage.setItem("userData", JSON.stringify(emptyUserData));
  } else {
    alert("The prompt you entered did not match. Delete cancelled.");
  }
}
