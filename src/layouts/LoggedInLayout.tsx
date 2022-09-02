import { useContext, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import FadeLoader from "react-spinners/FadeLoader";
import Button from "../components/Buttons/Button";
import Dropdown from "../components/Dropdowns/Dropdown";
import { ContentText, TitleText } from "../components/Typography/Typography";
import { appContext } from "../contexts/AppContext";
import { useFirebaseUser } from "../hooks/useFirebaseUser";
import UserService from "../services/UserService";

export const LoggedInLayout = () => {
  const { user } = useContext(appContext);
  const navigate = useNavigate();
  const { checkedLoggedUser } = useFirebaseUser();
  const { logout } = UserService();

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user]);

  return (
    <div className="min-h-screen flex flex-col">
      <header className="flex p-1 sm:p-2 justify-between items-center text-white bg-slate-500">
        <h1 className="font-bold block p-4">
          <TitleText>JugadoresApp</TitleText>
        </h1>
        {user && (
          <Dropdown
            dropdownContent={
              <div
                onClick={logout}
                className="bg-white text-slate-800 mt-1 p-2 rounded-md shadow-lg border cursor-pointer"
              >
                <ContentText>Logout</ContentText>
              </div>
            }
          >
            <Button>
              <ContentText>{user.displayName}</ContentText>
            </Button>
          </Dropdown>
        )}
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
