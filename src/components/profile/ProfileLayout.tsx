import EditMyInfo from "@/components/profile/MyInfo";
import LeftMenu from "@/components/profile/LeftMenu";
import PageLocation from "@/components/ui/PageLocation";
import ProfileWelcome from "@/components/ui/ProfileWelcome";
import { Outlet } from "react-router-dom";

function ProfileLayout() {
  return (
    <div className={`container m-auto px-5 2xl:p-0`}>
      <div className="flex items-center justify-between">
        <PageLocation />
        <ProfileWelcome />
      </div>
      <section className="flex flex-col gap-10 py-16 lg:flex-row">
        <LeftMenu />
        <Outlet />
      </section>
    </div>
  );
}

export default ProfileLayout;
