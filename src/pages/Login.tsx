import {
  EmailAuthProvider,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
} from "firebase/auth";
import { auth as firebaseuiauth } from "firebaseui";
import React, { useContext, useEffect, useLayoutEffect } from "react";
import { firebaseApp } from "../components/Firebase";
import { appContext } from "../contexts/AppContext";

export const Login = () => {
  const auth = getAuth(firebaseApp);
  const UI =
    firebaseuiauth.AuthUI.getInstance() || new firebaseuiauth.AuthUI(auth);
  const { setUser } = useContext(appContext);

  useLayoutEffect(() => {
    UI.reset();
    UI.start("#firebaseui-auth-container", {
      signInOptions: [
        EmailAuthProvider.PROVIDER_ID,
        {
          provider: GoogleAuthProvider.PROVIDER_ID,
        },
      ],
      signInFlow: "popup",
      callbacks: {
        signInSuccessWithAuthResult(authResult) {
          setUser(authResult.user);
          return false;
        },
      },
      queryParameterForSignInSuccessUrl: "user",
    });
  }, []);
  return <div id="firebaseui-auth-container"></div>;
};
