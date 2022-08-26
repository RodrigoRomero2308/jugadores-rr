import "firebaseui/dist/firebaseui.css";
import { User } from "firebase/auth";
import { useState } from "react";
import { appContext } from "./contexts/AppContext";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { PublicLayout } from "./layouts/PublicLayout";
import { Login } from "./pages/Login";
import { Home } from "./pages/Home";
import { LoggedInLayout } from "./layouts/LoggedInLayout";

function App() {
  const AppContextProvider = appContext.Provider;
  const [user, setUser] = useState<User | undefined>();

  return (
    <AppContextProvider
      value={{
        user,
        setUser,
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PublicLayout />}>
            <Route index element={<Login />} />
          </Route>
          <Route path="home" element={<LoggedInLayout />}>
            <Route index element={<Home />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </AppContextProvider>
  );
}

export default App;
