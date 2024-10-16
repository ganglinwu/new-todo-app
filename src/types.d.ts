// types for JSON parsed localStorage i.e. coerced strings
export type parsedTask = {
  taskName: string;
  taskDueDate?: string;
  taskDuration?: number;
  taskUrgency: "Low" | "Medium" | "High";
};

export type parsedProjects = {
  projectName: string;
  tasks?: parsedTask[];
};

export type parsedUserData = {
  userName: string;
  projects?: parsedProjects[];
};

export {};
