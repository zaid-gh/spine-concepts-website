import React from "react";

const ContactInfo = () => {
  return (
    <section className="flex flex-col gap-10">
      <div className="flex flex-col gap-4">
        <p className="text-[11px] uppercase tracking-[0.25em] text-neutral-500">
          Contact
        </p>

        <h1 className="text-4xl lg:text-6xl font-semibold">
          For more information
        </h1>

        <p className="text-sm lg:text-base text-neutral-600 max-w-lg">
          Fill out the form and our team will reach out with detailed
          information about our spine systems, technical documentation, and
          product availability.
        </p>
      </div>

      {/* Mapa */}
      <div className="rounded-2xl overflow-hidden border border-neutral-200 shadow-sm">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3067.103025368623!2d-75.62517348782043!3d39.75979519524103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6fe75d85ed30f%3A0xac3eff6665d8aeb2!2s251%20Little%20Falls%20Dr%2C%20Wilmington%2C%20DE%2019808%2C%20EE.%20UU.!5e0!3m2!1ses-419!2smx!4v1764914699738!5m2!1ses-419!2smx"
          className="w-full h-56 lg:h-72 border-0"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
};

export default ContactInfo;
