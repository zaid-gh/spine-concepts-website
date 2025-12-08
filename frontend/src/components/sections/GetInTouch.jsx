import React from "react";
import { Link } from "react-router-dom";

const GetInTouch = () => {
  return (
    <section className="w-full h-full flex items-center justify-center">
      <div
        className="
          w-full
          rounded-3xl
          border border-neutral-200
          bg-white
          shadow-sm
          px-6 py-8
          lg:px-10 lg:py-10
          flex flex-col gap-6
        "
      >
        {/* Logo + etiqueta */}
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-custom-bg-gray flex items-center justify-center">
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

        {/* Título + texto */}
        <div className="flex flex-col gap-3">
          <h2 className="text-2xl lg:text-3xl font-semibold text-neutral-900">
            Get in touch — we’re ready to support.
          </h2>
          <p className="text-sm lg:text-base text-neutral-600 max-w-md">
            Whether you need technical details, product availability, or support
            for a specific procedure, our team can guide you to the right
            solution.
          </p>
        </div>

        {/* Botones */}
        <div className="flex flex-col gap-3 pt-2 lg:flex-row lg:items-center">
          <Link
            to="/Contact"
            className="
              inline-flex items-center justify-center
              px-6 h-11
              rounded-full
              bg-custom-logo-aqua
              text-white text-sm font-medium
              hover:bg-[#B1DBE3]
              transition
            "
          >
            Contact our team
          </Link>

          <div className="flex items-center gap-2 text-sm text-neutral-500">
            <span className="hidden lg:inline">or</span>
            <Link
              to="/Products"
              className="inline-flex items-center text-sm font-medium text-neutral-800 hover:text-neutral-950"
            >
              Browse products
              <span className="ml-1 text-xs">↗</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
