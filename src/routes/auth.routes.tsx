import { Navigate, Route, Routes } from "react-router-dom";

import { CreateAccount } from "../pages/CreateAccount";
import { Login } from "../pages/Login";

export const AuthRoutes = () => {
  return (
    <Routes>
      <Route
        path="/login"
        element={<Login />}
      />
      <Route
        path="/create-account"
        element={<CreateAccount />}
      />
      <Route
        path="*"
        element={<Navigate to="/login" />}
      />
    </Routes>
  );
};
