import { useAppSelector } from "@/store/hooks";
import type { User } from "@/types/users";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

type EditProfileForm = User & {
  currentPassword?: string;
  newPassword?: string;
  confirmPassword?: string;
};

function EditMyInfo() {
  const user = useAppSelector((user) => user.login.user);
  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors },
  } = useForm<EditProfileForm>({
    defaultValues: user ?? undefined,
  });

  useEffect(() => {
    if (user) reset(user);
  }, [user, reset]);

  function onSubmit(data: EditProfileForm) {
    const { newPassword, ...newData } = data;

    const payload = {
      ...newData,
      password: newPassword,
    };

    console.log("API payload:", payload);
  }

  return (
    <div className="flex-1 rounded-lg px-14 py-7 capitalize shadow-md">
      <div className="flex flex-col gap-10">
        <p className="text-2xl text-red-500">edit your profile</p>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-8 font-light"
        >
          <div className="flex justify-between gap-5">
            <div className="flex w-full flex-col gap-2.5">
              <label htmlFor="first-name">first name</label>
              <input
                {...register("firstName", {
                  required: "first name Is Requierd",
                })}
                type="text"
                id="first-name"
                autoComplete="given-name"
                className="focus:bg-neutral rounded-md border border-neutral-200 bg-neutral-100 px-2 py-2.5 text-neutral-500 focus:text-black focus:outline-neutral-200"
              />
              {errors.firstName && (
                <p className="text-red-500">{errors.firstName?.message}</p>
              )}
            </div>
            <div className="flex w-full flex-col gap-2.5">
              <label htmlFor="last-name">last name</label>
              <input
                {...register("lastName", { required: "last name Is Requierd" })}
                type="text"
                id="last-name"
                autoComplete="family-name"
                className="focus:bg-neutral rounded-md border border-neutral-200 bg-neutral-100 px-2 py-2.5 text-neutral-500 focus:text-black focus:outline-neutral-200"
              />
              {errors.lastName && (
                <p className="text-red-500">{errors.lastName?.message}</p>
              )}
            </div>
          </div>

          <div className="flex justify-between gap-5">
            <div className="flex w-full flex-col gap-2.5">
              <label htmlFor="email">email</label>
              <input
                {...register("email", { required: "Email Is Requierd" })}
                type="email"
                autoComplete="email"
                id="email"
                className="focus:bg-neutral rounded-md border border-neutral-200 bg-neutral-100 px-2 py-2.5 text-neutral-500 focus:text-black focus:outline-neutral-200"
              />
              {errors.email && (
                <p className="text-red-500">{errors.email?.message}</p>
              )}
            </div>
            <div className="flex w-full flex-col gap-2.5">
              <label htmlFor="address">address</label>
              <input
                {...register("address.address", {
                  required: "Address Is Requierd",
                })}
                type="text"
                id="address"
                className="focus:bg-neutral rounded-md border border-neutral-200 bg-neutral-100 px-2 py-2.5 text-neutral-500 focus:text-black focus:outline-neutral-200"
              />
              {errors.address?.address && (
                <p className="text-red-500">
                  {errors.address.address?.message}
                </p>
              )}
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <label>Change Password</label>
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
                  value === getValues("newPassword") ||
                  "Passwords do not match",
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
          <button type="submit">Click</button>
        </form>
      </div>
    </div>
  );
}

export default EditMyInfo;
