import { Navigate, Route, Routes } from "react-router-dom";

import { Content } from "../pages/Content";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/home"
        element={<Content />}
      />
      <Route
        path="*"
        element={<Navigate to="/home" />}
      />
    </Routes>
  );
};
