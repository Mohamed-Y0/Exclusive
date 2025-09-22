import SignPoaster from "@/components/ui/SignPoster";
import { useLogin } from "@/hooks/useLogin";
import { useAppSelector } from "@/store/hooks";
import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

function SignIn() {
  const [username, setUsername] = useState("emilys");
  const [password, setPassword] = useState("emilyspass");
  const navigate = useNavigate();

  const isAuth = useAppSelector((state) => state.login.isAuthenticatied);

  useEffect(() => {
    if (isAuth) navigate("/", { replace: true });
  }, [isAuth, navigate]);

  const { mutate: login, isPending, error } = useLogin();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    login({ username, password });
  }

  return (
    <section className="py-16">
      <div className="flex flex-col justify-between gap-10 lg:flex-row">
        <SignPoaster />
        <div>
          <div className="flex flex-col gap-8 py-10">
            <h1 className="text-3xl md:text-5xl">Log in to Exclusive</h1>
            <p className="font-light">Enter your details below</p>
          </div>
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="flex flex-col gap-10 text-neutral-500">
              <input
                type="text"
                id="signin-email"
                autoComplete="username"
                placeholder="Username"
                className="rounded-sm border-b border-neutral-200 bg-none px-2.5 py-4 focus:outline-neutral-200"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                disabled={isPending}
              />
              <input
                type="password"
                id="signin-password"
                autoComplete="current-password"
                placeholder="Password"
                className="rounded-sm border-b border-neutral-200 bg-none px-2.5 py-4 focus:outline-neutral-200"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={isPending}
              />
            </div>
            <div className="py-5">
              {error && (
                <p className="text-red-500">{(error as Error).message}</p>
              )}
            </div>

            <div className="w-full py-5 text-center text-neutral-50">
              <button
                className={`${isPending ? "bg-red-300" : "bg-red-500"} w-full cursor-pointer rounded-sm py-5`}
                type="submit"
                disabled={isPending}
              >
                Log In
              </button>
            </div>
          </form>
          <div className="text-center font-light">
            <NavLink to="" className="text-neutral-500">
              Forget Your Password?
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignIn;
