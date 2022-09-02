import { getAuth } from "@firebase/auth";
import { useCallback, useContext } from "react";
import { firebaseApp } from "../components/Firebase";
import { appContext } from "../contexts/AppContext";

const UserService = () => {
  const auth = getAuth(firebaseApp);
  const { setUser } = useContext(appContext);

  const logout = useCallback(() => {
    auth.signOut().then(() => {
      setUser(undefined);
    });
  }, []);

  return {
    logout,
  };
};

export default UserService;
