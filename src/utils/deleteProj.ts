import { SetStateAction } from "react";
import { projects } from "../demoData/demoProjects";

export default function deleteProj(
  projName: string,
  projects: projects[],
  setProjects: React.Dispatch<SetStateAction<projects[]>>,
) {
  projects = projects.filter((proj) => {
    return proj.projectName !== projName;
  });
  setProjects(projects);
  alert("Project deleted.");
}