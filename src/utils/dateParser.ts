import { Project } from "../demoData/demoProjects";
import { parsedUserData, userData } from "../types";

export function dateStringtoDate(dateStr: string): Date {
  return new Date(dateStr);
}

export default function dateParser(
  userDataFromLocalStorage: parsedUserData,
): userData {
  const userData: userData = {
    userName: userDataFromLocalStorage.userName,
    projects: [],
  };
  if (userDataFromLocalStorage.projects) {
    userDataFromLocalStorage.projects.forEach((project) => {
      const parsedProject = new Project(project.projectName, []);
      if (project.tasks) {
        project.tasks.forEach((task) => {
          parsedProject.tasks?.push({
            taskName: task.taskName,
            taskUrgency: task.taskUrgency,
            taskDueDate: task.taskDueDate
              ? dateStringtoDate(task.taskDueDate)
              : undefined,
            taskDuration: task.taskDuration,
          });
        });
      }
      userData.projects!.push(parsedProject);
    });
  }
  return userData;
}
