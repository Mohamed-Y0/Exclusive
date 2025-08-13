import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import TopHeader from "@/components/layout/TopHeader";
import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <div className="text-[15px] lg:text-lg">
      <TopHeader />
      <Header />

      <main className="bg-neutral-50">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default AppLayout;
