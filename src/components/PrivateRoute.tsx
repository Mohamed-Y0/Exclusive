import PageNotFound from "@/pages/PageNotFound";
import { useAppSelector } from "@/store/hooks";
import { Navigate } from "react-router-dom";

function PrivateRoute({ children }: { children: React.ReactNode }) {
  const isAuth = useAppSelector((state) => state.login.isAuthenticatied);
  const role = useAppSelector((state) => state.login.user?.role);

  if (!isAuth) return <Navigate to="/sign-in" replace />;
  if (role !== "admin") return <PageNotFound />;

  return <>{children}</>;
}

export default PrivateRoute;
