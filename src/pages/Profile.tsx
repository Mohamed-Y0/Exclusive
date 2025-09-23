import PageLocation from "@/components/ui/PageLocation";
import ProfileWelcome from "@/components/ui/ProfileWelcome";

function Profile() {
  return (
    <div className={`container m-auto px-5 2xl:p-0`}>
      <div className="flex items-center justify-between">
        <PageLocation />
        <ProfileWelcome />
      </div>
    </div>
  );
}

export default Profile;
