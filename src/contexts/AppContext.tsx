import { User } from "firebase/auth";
import { createContext, Dispatch, SetStateAction } from "react";

export interface IAppContext {
  user?: User;
  setUser: Dispatch<SetStateAction<User | undefined>>;
}

export const appContext = createContext<IAppContext>({
  setUser: () => undefined,
});
