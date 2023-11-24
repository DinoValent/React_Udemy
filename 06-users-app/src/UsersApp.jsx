import { LoginPage } from "./components/auth/pages/LoginPage";
import { Navigate, Route, Routes } from "react-router-dom";
import { UserRoutes } from "./routes/UserRoutes";
import { useContext } from "react";
import { AuthContext } from "./components/auth/context/AuthContext";

export const UsersApp = () => {
  const { login } = useContext(AuthContext);

  return (
    <Routes>
      {login.isAuth ? (
        <>
          <Route path="/*" element={<UserRoutes />} />
        </>
      ) : (
        <>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/*" element={<Navigate to={"/login"} />} />
        </>
      )}
    </Routes>
  );
};
