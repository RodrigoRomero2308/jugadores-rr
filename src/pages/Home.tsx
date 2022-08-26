import { getAuth } from "firebase/auth";
import { useContext } from "react";
import { firebaseApp } from "../components/Firebase";
import { appContext } from "../contexts/AppContext";

export const Home = () => {
  const auth = getAuth(firebaseApp);
  const { setUser } = useContext(appContext);

  return (
    <div>
      <button
        onClick={() => {
          auth.signOut().then(() => {
            setUser(undefined);
          });
        }}
        className="p-4 pt-2 pb-2 border-solid border border-slate-700 rounded-full"
      >
        Logout
      </button>
    </div>
  );
};
