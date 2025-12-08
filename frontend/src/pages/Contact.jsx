import React from "react";
import { ContactInfo, ContactInfoSubmit } from "../components";

const Contact = () => {
  return (
    <section
      className="w-full min-h-screen
        pt-6
        lg:pt-[5rem] 
        bg-custom-bg-gray"
    >
      <div className="max-w-screen-2xl mx-auto flex flex-col gap-20 lg:flex-row">
        {/* Info + Map */}
        <div className="w-full lg:w-1/2 flex flex-col justify-start">
          <ContactInfo />
        </div>

        {/* Form */}
        <div className="w-full lg:w-1/2 flex items-start lg:pt-10">
          <ContactInfoSubmit />
        </div>
      </div>
    </section>
  );
};

export default Contact;
