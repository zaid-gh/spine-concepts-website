import React from "react";

const AboutUs = () => {
  return (
    <section className="w-full">
      <div className="flex flex-col gap-6">
        <p className="text-[11px] uppercase tracking-[0.25em] text-neutral-500">
          About Spine Concepts
        </p>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-neutral-900 leading-[1.05]">
          Focused on the spine. Driven by real outcomes.
        </h1>

        <div className="text-sm sm:text-base leading-relaxed text-neutral-700 max-w-2xl">
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

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
          <div className="rounded-2xl border border-neutral-200/70 bg-white/70 p-4 shadow-sm">
            <p className="text-xs uppercase tracking-[0.22em] text-neutral-500">
              Approach
            </p>
            <p className="mt-2 text-sm text-neutral-700">
              Practical systems built with clinicians in mind.
            </p>
          </div>
          <div className="rounded-2xl border border-neutral-200/70 bg-white/70 p-4 shadow-sm">
            <p className="text-xs uppercase tracking-[0.22em] text-neutral-500">
              Quality
            </p>
            <p className="mt-2 text-sm text-neutral-700">
              Reliable, evidence-driven product decisions.
            </p>
          </div>
          <div className="rounded-2xl border border-neutral-200/70 bg-white/70 p-4 shadow-sm">
            <p className="text-xs uppercase tracking-[0.22em] text-neutral-500">
              Support
            </p>
            <p className="mt-2 text-sm text-neutral-700">
              Clear guidance from inquiry to implementation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
