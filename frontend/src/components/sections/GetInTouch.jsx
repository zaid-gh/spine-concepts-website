import React from "react";
import { Link } from "react-router-dom";

const GetInTouch = () => {
  return (
    <section className="w-full flex justify-center">
      <div
        className="
          relative w-full max-w-xl
          rounded-3xl
          border border-neutral-200/80
          bg-white/70 backdrop-blur
          shadow-[0_10px_30px_rgba(0,0,0,0.06)]
          p-6 sm:p-8 lg:p-10
          overflow-hidden
        "
      >
        <div className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-custom-logo-aqua/15 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-neutral-200/30 blur-3xl" />

        <div className="relative flex flex-col gap-7">
          <div className="flex items-center gap-3">
            <div className="h-11 w-11 rounded-full bg-custom-bg-gray flex items-center justify-center border border-neutral-200/60">
              <img
                src="/assets/images/logo/logo_gradient.png"
                alt="Spine Concepts®"
                className="h-7 w-auto"
              />
            </div>

            <p className="text-[11px] uppercase tracking-[0.25em] text-neutral-500">
              Connect with us
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h2 className="text-2xl sm:text-3xl font-semibold text-neutral-900 leading-[1.1]">
              Get in touch — we’re ready to support.
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 max-w-md">
              Whether you need technical details, product availability, or
              support for a specific procedure, our team can guide you to the
              right solution.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-3 pt-1">
            <Link
              to="/Contact"
              className="
                inline-flex items-center justify-center gap-2
                px-6 h-12
                rounded-full
                bg-custom-logo-aqua
                text-white text-sm font-medium
                shadow-sm
                transition
                hover:bg-[#B1DBE3] hover:shadow-md
                active:scale-[0.99]
              "
            >
              Contact our team
              <span className="text-white/90 text-xs">↗</span>
            </Link>

            <div className="flex items-center gap-2 text-sm text-neutral-500">
              <span className="hidden sm:inline">or</span>
              <Link
                to="/Products"
                className="
                  inline-flex items-center gap-1
                  text-sm font-medium
                  text-neutral-800 hover:text-neutral-950
                  transition
                "
              >
                Browse products
                <span className="text-xs">↗</span>
              </Link>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 pt-1">
            <span className="text-xs px-3 py-1 rounded-full border border-neutral-200 bg-white/70 text-neutral-600">
              Technical support
            </span>
            <span className="text-xs px-3 py-1 rounded-full border border-neutral-200 bg-white/70 text-neutral-600">
              Product availability
            </span>
            <span className="text-xs px-3 py-1 rounded-full border border-neutral-200 bg-white/70 text-neutral-600">
              Clinical guidance
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
