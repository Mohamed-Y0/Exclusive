import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";
import Path from "@/components/ui/PageLocation";

function Contact() {
  return (
    <div className={`container m-auto p-5`}>
      <Path />

      <section className="flex gap-10 py-16">
        <ContactInfo />
        <ContactForm />
      </section>
    </div>
  );
}

export default Contact;
