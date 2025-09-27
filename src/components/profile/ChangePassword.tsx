import { useAppSelector } from "@/store/hooks";
import type { User } from "@/types/users";
import { useForm } from "react-hook-form";

type EditProfileForm = User & {
  currentPassword?: string;
  newPassword?: string;
  confirmPassword?: string;
};

function ChangePassword() {
  const user = useAppSelector((user) => user.login.user);
  const {
    register,
    handleSubmit,
    getValues,

    formState: { errors, isSubmitting },
  } = useForm<EditProfileForm>({
    defaultValues: user ?? undefined,
  });

  function onSubmit(data: EditProfileForm) {
    const { newPassword, ...newData } = data;

    const payload = {
      ...newData,
      password: newPassword,
    };

    console.log(`New Password:`, payload);
  }

  return (
    <div className="flex flex-col gap-8">
      <p className="text-[20px] text-red-500 sm:text-2xl">
        change your password
      </p>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-6 font-light"
      >
        <div className="flex flex-col gap-5">
          {/* Hidden username field for accessibility */}
          <input
            type="text"
            name="username"
            autoComplete="username"
            value={user?.email ?? ""}
            hidden
            readOnly
          />
          <input
            {...register("currentPassword", {
              required: "Current password is required",
              validate: (value) =>
                value === getValues("password") || "password is incorrect",
            })}
            placeholder="Current Password"
            type="password"
            autoComplete="current-password"
            id="current-password"
            className="focus:bg-neutral rounded-md border border-neutral-200 bg-neutral-100 px-2 py-2.5 text-neutral-500 focus:text-black focus:outline-neutral-200"
          />
          {errors.currentPassword && (
            <p className="text-red-500">{errors.currentPassword.message}</p>
          )}

          <input
            {...register("newPassword", {
              required: "new password is required",
            })}
            placeholder="New Password"
            autoComplete="new-password"
            type="password"
            id="new-password"
            className="focus:bg-neutral rounded-md border border-neutral-200 bg-neutral-100 px-2 py-2.5 text-neutral-500 focus:text-black focus:outline-neutral-200"
          />
          {errors.newPassword && (
            <p className="text-red-500">{errors.newPassword.message}</p>
          )}

          <input
            {...register("confirmPassword", {
              required: "Please confirm your password",
              validate: (value) =>
                value === getValues("newPassword") || "Passwords do not match",
            })}
            placeholder="Confirm New Password"
            type="password"
            autoComplete="new-password"
            id="confirm-password"
            className="focus:bg-neutral rounded-md border border-neutral-200 bg-neutral-100 px-2 py-2.5 text-neutral-500 focus:text-black focus:outline-neutral-200"
          />
          {errors.confirmPassword && (
            <p className="text-red-500">{errors.confirmPassword.message}</p>
          )}
        </div>
        <button
          type="submit"
          className={`${isSubmitting ? "bg-red-400" : "bg-red-500"} text-neutral w-fit cursor-pointer self-end rounded-lg px-5 py-2.5`}
        >
          {isSubmitting ? "Loadding..." : "Change"}
        </button>
      </form>
    </div>
  );
}

export default ChangePassword;
