import React from "react";
import HeroSection from "../components/contact/HeroSection";
import ContactForm from "../components/contact/ContactForm";

const ContactUs: React.FC = () => {
  return (
    <div className="font-[roboto]">
      <section className="w-full lg:mb-30 mb-20">
        <HeroSection />
      </section>

      <section className="md:w-5/6 mx-auto w-11/12 lg:mb-30 mb-20">
        <ContactForm />
      </section>
    </div>
  );
};

export default ContactUs;
