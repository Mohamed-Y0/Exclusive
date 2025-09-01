import InputForm from "@/components/ui/InputForm";
import SignPoaster from "@/components/ui/SignPoaster";
import { NavLink } from "react-router-dom";

function SignUp() {
  return (
    <section className="py-16">
      <div className="flex justify-between">
        <SignPoaster />
        <div>
          <div className="flex flex-col gap-8 py-10">
            <h1 className="text-5xl">Create an account</h1>
            <p className="font-light">Enter your details below</p>
          </div>
          <form action="">
            <div className="flex flex-col gap-10 text-neutral-500">
              <InputForm type="text" id="signup-name" placeholder="Name" />
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
                Create Account
              </button>
            </div>
          </form>
          <div className="flex items-center justify-center gap-2.5 font-light">
            <p>Already Have Account? </p>
            <NavLink to="/sign-in" className="border-b border-neutral-300">
              Log In
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignUp;
