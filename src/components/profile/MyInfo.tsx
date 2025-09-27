import { useAppSelector } from "@/store/hooks";
import type { User } from "@/types/users";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

function MyInfo() {
  const user = useAppSelector((user) => user.login.user);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<User>({
    defaultValues: user ?? undefined,
  });

  useEffect(() => {
    if (user) reset(user);
  }, [user, reset]);

  function onSubmit(data: User) {
    console.log("API payload:", data);
  }

  return (
    <div className="flex flex-col gap-10">
      <p className="text-[20px] text-red-500 sm:text-2xl">edit your profile</p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-8 font-light"
      >
        <div className="flex flex-wrap justify-between gap-5 md:flex-nowrap">
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

        <div className="flex flex-wrap justify-between gap-5 md:flex-nowrap">
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
              <p className="text-red-500">{errors.address.address?.message}</p>
            )}
          </div>
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

export default MyInfo;
