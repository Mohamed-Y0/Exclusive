import type React from "react";

function ProtectedRoutes({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

export default ProtectedRoutes;
