import { task } from "../demoData/demoProjects";

export default function isTaskExpired(task: task) {
  if (!task.taskDueDate) {
    return false; // if no due date is set, we assume task will never expire
  }
  const now = new Date();
  let diff = now.getTime() - task.taskDueDate.getTime();
  if (diff >= 0) {
    return true;
  } else {
    return false;
  }
}
