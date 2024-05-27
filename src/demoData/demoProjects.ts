type task = {
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
        taskName: "",
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
        taskName: "",
        taskUrgency: "Low",
      },
    ],
  },
];

export { demoProjects };
