import React from "react";
import HeroSection from "../components/contact/HeroSection";
import ContactForm from "../components/contact/ContactForm";

const ContactUs: React.FC = () => {
  return (
    <div className="font-[roboto]">
      <section className="w-full">
        <HeroSection />
      </section>

      <section className="mt-[90px] md:w-5/6 mx-auto w-11/12">
        <ContactForm />
      </section>
    </div>
  );
};

export default ContactUs;
