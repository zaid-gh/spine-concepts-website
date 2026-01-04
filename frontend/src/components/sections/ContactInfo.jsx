import React from "react";

const ContactInfo = () => {
  return (
    <section className="flex flex-col gap-10">
      <div className="flex flex-col gap-4">
        <p className="text-[11px] uppercase tracking-[0.25em] text-neutral-500">
          Contact
        </p>

        <h1 className="text-3xl sm:text-4xl lg:text-6xl font-semibold text-neutral-900 leading-[1.05]">
          For more information
        </h1>

        <p className="text-sm sm:text-base text-neutral-600 max-w-xl">
          Fill out the form and our team will reach out with detailed
          information about our spine systems, technical documentation, and
          product availability.
        </p>

        <div className="flex flex-wrap gap-2 pt-2">
          <span className="text-xs px-3 py-1 rounded-full border border-neutral-200 bg-white/70 text-neutral-600">
            Technical documentation
          </span>
          <span className="text-xs px-3 py-1 rounded-full border border-neutral-200 bg-white/70 text-neutral-600">
            Product availability
          </span>
          <span className="text-xs px-3 py-1 rounded-full border border-neutral-200 bg-white/70 text-neutral-600">
            System details
          </span>
        </div>
      </div>

      <div className="rounded-3xl overflow-hidden border border-neutral-200/80 shadow-sm bg-white">
        <div className="relative">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3067.103025368623!2d-75.62517348782043!3d39.75979519524103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6fe75d85ed30f%3A0xac3eff6665d8aeb2!2s251%20Little%20Falls%20Dr%2C%20Wilmington%2C%20DE%2019808%2C%20EE.%20UU.!5e0!3m2!1ses-419!2smx!4v1764914699738!5m2!1ses-419!2smx"
            className="w-full h-56 sm:h-72 lg:h-[360px] border-0"
            allowFullScreen=""
            loading="lazy"
          ></iframe>

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
