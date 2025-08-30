import { FiPhone } from "react-icons/fi";
import { RiMessage2Line } from "react-icons/ri";

function ContactInfo() {
  return (
    <div className="flex flex-col gap-5 bg-neutral-100 p-8 text-neutral-600">
      <div className="flex flex-col gap-5 border-b border-neutral-400 pb-8">
        <div className="flex items-center gap-5">
          <FiPhone className="size-14 rounded-full bg-red-400 p-2.5 text-neutral-50" />
          <p className="capitalize">call to us</p>
        </div>
        <p>We are avaliable 24/7, 7 days a week</p>
        <p>Phone: +(858) 361-5983</p>
      </div>

      <div className="flex flex-col gap-5">
        <div className="flex items-center gap-5">
          <RiMessage2Line className="size-14 rounded-full bg-red-400 p-2.5 text-neutral-50" />
          <p className="capitalize">Write to us</p>
        </div>
        <p>Fill out our form and we will contact you within 24 hours.</p>
        <p>Emails: customer@exclusive.com</p>
        <p>Emails: support@exclusive.com</p>
      </div>
    </div>
  );
}

export default ContactInfo;
