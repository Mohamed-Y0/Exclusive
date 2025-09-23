import EditMyInfo from "@/components/profile/EditMyInfo";
import LeftMenu from "@/components/profile/LeftMenu";
import PageLocation from "@/components/ui/PageLocation";
import ProfileWelcome from "@/components/ui/ProfileWelcome";

function Profile() {
  return (
    <div className={`container m-auto px-5 2xl:p-0`}>
      <div className="flex items-center justify-between">
        <PageLocation />
        <ProfileWelcome />
      </div>
      <section className="flex gap-10 py-16">
        <LeftMenu />
        <EditMyInfo />
      </section>
    </div>
  );
}

export default Profile;
