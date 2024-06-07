export type task = {
  taskName: string;
  taskDueDate?: Date;
  taskDuration?: number;
  taskUrgency: "Low" | "Medium" | "High";
};

export type projects = {
  projectName: string;
  tasks: task[] | task;
};

export class Project {
  projectName: string;
  tasks?: task[] | task;

  constructor(projectName: string, tasks: task | task[]) {
    this.projectName = projectName;
    this.tasks = tasks;
  }
}

export class Task {
  taskName: string;
  taskDueDate: Date;
  taskDuration: number;
  taskUrgency: "Low" | "Medium" | "High";

  constructor(
    taskName: string,
    taskDueDate: Date,
    taskDuration: number,
    taskUrgency: "Low" | "Medium" | "High",
  ) {
    this.taskName = taskName;
    this.taskDueDate = taskDueDate;
    this.taskDuration = taskDuration;
    this.taskUrgency = taskUrgency;
  }
}

export const demoProjects: projects[] = [
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
  {
    projectName: "Must haves duplicate",
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
