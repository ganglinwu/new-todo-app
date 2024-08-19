import { createContext } from "react";

type userContextType = {
  user: {
    username: string | null;
    email: string | null;
  };
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
};
// createContext takes in 1 argument for "default values" of context values
export const UserContext = createContext<userContextType>({
  user: {
    username: null,
    email: null,
  },
  login: () => Promise.resolve(),
  logout: () => {},
});
