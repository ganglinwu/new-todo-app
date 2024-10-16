import { SetStateAction, createContext } from "react";
import { z } from "zod";

type userContextType = {
  user: {
    userName: string | null;
    email: string | null;
  };
  login: (userName: string, password: string) => Promise<void>;
  logout: () => void;
  isAuth: boolean;
  setIsAuth: React.Dispatch<SetStateAction<boolean>>;
};
// createContext takes in 1 argument for "default values" of context values
export const UserContext = createContext<userContextType>({
  user: {
    userName: null,
    email: null,
  },
  login: () => Promise.resolve(),
  logout: () => {},
  isAuth: false,
  setIsAuth: () => {},
});

export const taskSchema = z.object({
  taskName: z.string().nonempty(),
  taskDueDate: z.date().optional(),
  taskDuration: z.number().optional(),
  taskUrgency: z.union([
    z.literal("Low"),
    z.literal("Medium"),
    z.literal("High"),
  ]),
});

export const projectSchema = z.object({
  projectName: z.string().nonempty(),
  tasks: taskSchema.array().optional(),
});

export const userDataSchema = z.object({
  userName: z.string().nonempty(),
  projects: projectSchema.array().optional(),
});

export type userData = z.infer<typeof userDataSchema>;
export type projects = z.infer<typeof projectSchema>;
export type tasks = z.infer<typeof taskSchema>;
