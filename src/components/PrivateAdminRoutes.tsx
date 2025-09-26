import PageNotFound from "@/pages/PageNotFound";
import { useAppSelector } from "@/store/hooks";

function PrivateAdminRoutes({ children }: { children: React.ReactNode }) {
  const role = useAppSelector((state) => state.login.user?.role);
  if (role !== "admin") return <PageNotFound />;

  return <>{children}</>;
}

export default PrivateAdminRoutes;
