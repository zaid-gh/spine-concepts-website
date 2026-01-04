import React from "react";
import { ContactInfo, ContactInfoSubmit } from "../components";

const Contact = () => {
  return (
    <section className="w-full min-h-screen bg-custom-bg-gray">
      <div className="max-w-screen-2xl mx-auto px-5 sm:px-8 lg:px-10 pt-8 lg:pt-20 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div className="w-full">
            <ContactInfo />
          </div>

          <div className="w-full lg:sticky lg:top-24">
            <ContactInfoSubmit />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
