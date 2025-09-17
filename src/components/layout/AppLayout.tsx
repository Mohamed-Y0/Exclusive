import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header/Header";
import TopHeader from "@/components/layout/TopHeader";
import ScrollToTop from "@/components/ScrollToTop";
import Loading from "@/components/ui/Loading";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <div className="font-inter text-[15px] font-medium lg:text-[20px]">
      <TopHeader />
      <Header />

      <main className="bg-neutral-50">
        <Suspense fallback={<Loading />}>
          <ScrollToTop />
          <Outlet />
        </Suspense>
      </main>

      <Footer />
    </div>
  );
}

export default AppLayout;
