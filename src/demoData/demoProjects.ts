export type task = {
  taskName: string;
  taskDueDate?: Date;
  taskDuration?: number;
  taskUrgency: "Low" | "Medium" | "High";
};

export type projects = {
  projectName: string;
  tasks: task[];
};

const demoProjects: projects[] = [
  {
    projectName: "Nice to haves",
    tasks: [
      {
        taskName: "animation on hover of project(sidebar)",
        taskDueDate: new Date("2025/03/20"),
        taskDuration: 5,
        taskUrgency: "Low",
      },
    ],
  },
  {
    projectName: "Must haves",
    tasks: [
      {
        taskName: "util function to determine bg color based on urgency",
        taskUrgency: "High",
      },
      {
        taskName: "util function to determine if task has expired",
        taskUrgency: "Medium",
      },
      {
        taskName: "util function to sort task by expiry, urgency, etc",
        taskUrgency: "Low",
      },
      {
        taskName: "sample expired task",
        taskDueDate: new Date("2020-03-20"),
        taskUrgency: "Low",
      },
    ],
  },
];

export { demoProjects };
