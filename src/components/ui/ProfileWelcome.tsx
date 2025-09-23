import { useAppSelector } from "@/store/hooks";

function ProfileWelcome() {
  const userName = useAppSelector((s) => s.login.user?.firstName);

  return (
    <div className="pt-16 pb-5 capitalize">
      <p>
        Welcome,{" "}
        <span className="font-semibold tracking-wide text-red-500">
          {userName}
        </span>
      </p>
    </div>
  );
}

export default ProfileWelcome;
