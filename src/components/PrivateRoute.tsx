import { useAppSelector } from "@/store/hooks";
import { Navigate } from "react-router-dom";

function PrivateRoute({ children }: { children: React.ReactNode }) {
  const isAuth = useAppSelector((state) => state.login.isAuthenticatied);

  if (!isAuth) return <Navigate to="/sign-in" replace />;

  return <>{children}</>;
}

export default PrivateRoute;
