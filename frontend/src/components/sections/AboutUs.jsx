import React from "react";

const AboutUs = () => {
  return (
    <section className="w-full h-full">
      <div className="flex flex-col gap-6">
        {/* Label */}
        <p className="text-[11px] uppercase tracking-[0.25em] text-neutral-500">
          About Spine Concepts
        </p>

        {/* Título principal */}
        <h1 className="text-3xl lg:text-5xl font-semibold">
          Focused on the spine. Driven by real outcomes.
        </h1>

        {/* Texto */}
        <div className="text-sm lg:text-base leading-relaxed max-w-xl">
          <p className="mb-4">
            We’re not just about products;{" "}
            <strong>
              <em>we’re about solutions</em>
            </strong>{" "}
            that help patients move comfortably and recover with confidence. We
            work closely with surgeons, specialists, and clinical teams, and we{" "}
            <strong>
              <em>listen to real feedback</em>
            </strong>{" "}
            to refine every detail.
          </p>

          <p>
            Whether you’re recovering from an injury or{" "}
            <strong>
              <em>maintaining a healthy spine</em>
            </strong>
            , our focus is on delivering{" "}
            <strong>
              <em>reliable, evidence-driven systems</em>
            </strong>{" "}
            that support your workflow and your patients’ well-being at every
            step.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
