import { useAuth } from "../hooks/AuthContext";
import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";

export const Routes = () => {
  const { user } = useAuth();
  return <>{user ? <AppRoutes /> : <AuthRoutes />}</>;
};
