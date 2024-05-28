import { task } from "../demoData/demoProjects";

export default function bgColourByUrgencyExpiry(task: task) {
  let bgColour = "";
  switch (task.taskUrgency) {
    case "Low":
      bgColour = "bg-green-500";
      break;
    case "Medium":
      bgColour = "bg-yellow-500";
      break;
    case "High":
      bgColour = "bg-red-500";
      break;
    default:
      bgColour = "bg-secondary";
      break;
  }
  return bgColour;
}
