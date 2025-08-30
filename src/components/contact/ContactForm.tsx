import Input from "@/components/ui/Input";

function ContactForm() {
  return (
    <div className="w-full bg-neutral-100 p-5 text-neutral-500 md:p-10">
      <form action="" className="flex flex-col gap-10">
        <div className="flex flex-col gap-8 lg:flex-row">
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
            className="w-full rounded-sm bg-white p-2.5 focus:outline-1 focus:outline-neutral-300 md:h-[300px]"
            name="contact-message"
            aria-label="Write Your Message"
            required
            placeholder="Message.."
            id="contact-message"
          ></textarea>
        </div>
        <div className="text-end">
          <button
            type="submit"
            className="w-full cursor-pointer rounded-sm bg-red-600 py-3 text-neutral-50 md:w-fit md:px-10 md:py-6"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
