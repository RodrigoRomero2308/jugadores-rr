import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useContext, useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { firebaseApp } from "../components/Firebase";
import { appContext } from "../contexts/AppContext";
import FadeLoader from "react-spinners/FadeLoader";
import { useFirebaseUser } from "../hooks/useFirebaseUser";

export const PublicLayout = () => {
  const { user } = useContext(appContext);
  const navigate = useNavigate();
  const { checkedLoggedUser } = useFirebaseUser();

  useEffect(() => {
    if (user) {
      navigate("/home");
    }
  }, [user]);

  return (
    <div className="min-h-screen flex flex-col">
      <header className="flex-0 text-white bg-slate-500">
        <h1 className="font-bold block text-xl p-4">JugadoresApp</h1>
      </header>
      <div className="flex-1">
        {checkedLoggedUser && <Outlet />}
        {!checkedLoggedUser && (
          <FadeLoader className="mx-auto mt-2 mb-2" color="silver" />
        )}
      </div>
      <footer className="flex-0 p-2 text-white bg-slate-500">
        <div className="text-sm block text-right p-3">Made by RR</div>
      </footer>
    </div>
  );
};
