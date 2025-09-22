import { useAppSelector } from "@/store/hooks";
import { useNavigate } from "react-router-dom";

function PrivateRoute({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();
  const isAuth = useAppSelector((state) => state.login.isAuthenticatied);

  if (!isAuth) navigate(-1);

  return <>{children}</>;
}

export default PrivateRoute;
