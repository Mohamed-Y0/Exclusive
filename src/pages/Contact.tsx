import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";
import Path from "@/components/ui/PageLocation";

function Contact() {
  return (
    <div className={`container m-auto p-5 lg:p-0`}>
      <Path />

      <section className="flex flex-col gap-10 py-16 lg:flex-row">
        <ContactInfo />
        <ContactForm />
      </section>
    </div>
  );
}

export default Contact;
