import { getAuth, onAuthStateChanged } from "firebase/auth";
import React, { useContext, useEffect, useState } from "react";
import { firebaseApp } from "../components/Firebase";
import { appContext } from "../contexts/AppContext";

export const useFirebaseUser = () => {
  const auth = getAuth(firebaseApp);
  const [checkedLoggedUser, setCheckedLoggedUser] = useState(false);
  const { setUser } = useContext(appContext);

  useEffect(() => {
    const unsuscribe = onAuthStateChanged(auth, (loggedInUser) => {
      if (loggedInUser) setUser(loggedInUser);
      setCheckedLoggedUser(true);
      unsuscribe();
    });

    return () => {
      unsuscribe();
    };
  }, []);

  return { checkedLoggedUser };
};
