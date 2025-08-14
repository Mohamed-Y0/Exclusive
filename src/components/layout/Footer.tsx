import Input from "@/components/ui/Input";
import Logo from "@/components/ui/Logo";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-black py-16 text-neutral-200">
      <div className="container m-auto grid items-start gap-10 px-10 sm:grid-cols-3 sm:px-0 lg:grid-cols-4">
        <div className="col-span-full flex flex-col justify-center gap-2.5 justify-self-center lg:col-span-1">
          <Logo color="white" />
          <p>Get 10% off your first order</p>
          <Input
            placeholder="Enter Your Email"
            type="email"
            id="discout-email"
          />
        </div>
        <div className="flex flex-col justify-center gap-2.5 sm:justify-self-center">
          <p className="mb-2.5 font-semibold text-white">Support</p>
          <p>221B Baker Street, London</p>
          <p>exclusive@gmail.com</p>
          <p>+(858) 361-5983</p>
        </div>
        <div className="flex flex-col justify-center gap-2.5 sm:justify-self-center">
          <p className="mb-2.5 font-semibold text-white">Account</p>
          <Link to="">Login / Register</Link>
          <Link to="">Cart</Link>
          <Link to="">Wishlist</Link>
          <Link to="">Shop</Link>
        </div>
        <div className="flex flex-col justify-center gap-2.5 sm:justify-self-center">
          <p className="mb-2.5 font-semibold text-white">Quick Link</p>
          <Link to="">Privacy Policy</Link>
          <Link to="">Terms Of Use</Link>
          <Link to="">FAQ</Link>
          <Link to="">Contact</Link>
        </div>
      </div>

      <div>
        <p className="mt-14 text-center text-neutral-200 capitalize">
          made with love by{" "}
          <Link to="" className="text-blue-500">
            Mohamed Ahmed
          </Link>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
