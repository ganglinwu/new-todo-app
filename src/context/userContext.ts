import { SetStateAction, createContext } from "react";

type userContextType = {
  user: {
    username: string | null;
    email: string | null;
  };
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
  isAuth: boolean;
  setIsAuth: React.Dispatch<SetStateAction<boolean>>;
};
// createContext takes in 1 argument for "default values" of context values
export const UserContext = createContext<userContextType>({
  user: {
    username: null,
    email: null,
  },
  login: () => Promise.resolve(),
  logout: () => {},
  isAuth: false,
  setIsAuth: () => {},
});

//TODO: zod object of userData shape
//TODO: userData to be included in UserContext
