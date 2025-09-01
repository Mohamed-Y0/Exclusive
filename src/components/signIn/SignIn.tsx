import InputForm from "@/components/ui/InputForm";
import SignPoaster from "@/components/ui/SignPoster";
import { NavLink } from "react-router-dom";

function SignIn() {
  return (
    <section className="py-16">
      <div className="flex flex-col justify-between gap-10 lg:flex-row">
        <SignPoaster />
        <div>
          <div className="flex flex-col gap-8 py-10">
            <h1 className="text-3xl md:text-5xl">Log in to Exclusive</h1>
            <p className="font-light">Enter your details below</p>
          </div>
          <form action="">
            <div className="flex flex-col gap-10 text-neutral-500">
              <InputForm
                type="text"
                id="signup-email"
                placeholder="Email or Phone Number"
              />
              <InputForm
                type="password"
                id="signup-password"
                placeholder="Password"
              />
            </div>
            <div className="w-full py-12 text-center text-neutral-50">
              <button
                className="w-full cursor-pointer rounded-sm bg-red-500 py-5"
                type="submit"
              >
                Log In
              </button>
            </div>
          </form>
          <div className="text-center font-light">
            <NavLink to="" className="text-red-500">
              Forget Your Password?
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignIn;
