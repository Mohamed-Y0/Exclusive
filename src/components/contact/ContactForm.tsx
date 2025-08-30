import Input from "@/components/ui/Input";
import LinkButton from "@/components/ui/LinkButton";

function ContactForm() {
  return (
    <div className="w-full bg-neutral-100 p-10 text-neutral-500">
      <form action="" className="flex flex-col gap-10">
        <div className="flex gap-8">
          <Input
            label="Your Name *"
            required
            placeholder="John Doe"
            type="text"
            id="contact-name"
          />
          <Input
            label="Your Email *"
            required
            placeholder="email@example.com"
            type="email"
            id="contact-email"
          />
          <Input
            label="Your Phone *"
            required
            type="number"
            id="contact-phone"
          />
        </div>
        <div className="flex flex-col gap-2.5">
          <label htmlFor="contact-message">Write Your Message *</label>
          <textarea
            className="h-[300px] w-full rounded-sm bg-white p-2.5 focus:outline-1 focus:outline-neutral-300"
            name="contact-message"
            aria-label="Write Your Message"
            required
            placeholder="Message.."
            id="contact-message"
          ></textarea>
        </div>
        <div className="text-end">
          <LinkButton to="">Send Message</LinkButton>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
