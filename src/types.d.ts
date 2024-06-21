export type task = {
  taskName: string;
  taskDueDate?: Date;
  taskDuration?: number;
  taskUrgency: "Low" | "Medium" | "High";
};

export type projects = {
  projectName: string;
  tasks?: task[];
};

export type userData = {
  userName: string;
  timeUpdated: Date;
  projects?: projects[];
};

// types for JSON parsed localStorage i.e. coerced strings
export type parsedTask = {
  taskName: string;
  taskDueDate?: string;
  taskDuration?: string;
  taskUrgency: "Low" | "Medium" | "High";
};

export type parsedProjects = {
  projectName: string;
  tasks?: parsedTask[];
};

export type parsedUserData = {
  userName: string;
  timeUpdated: string;
  projects?: parsedProjects[];
};
