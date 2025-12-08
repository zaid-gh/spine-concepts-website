import React from "react";
import { Link } from "react-router-dom";
import { Instagram, Facebook, Linkedin } from "lucide-react";

const Footer = ({ menuOptions }) => {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#ECECEC] text-neutral-700">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-10 py-14 grid grid-cols-1 gap-12 lg:grid-cols-4">
        {/* LOGO + TAGLINE */}
        <div className="flex flex-col gap-4">
          <img
            src="/assets/images/logo/spine_concepts.png"
            alt="Spine Concepts®"
            className="h-12 object-contain opacity-90 mx-auto lg:mx-0"
          />
          <p className="text-sm text-neutral-600 leading-relaxed text-center lg:text-left">
            High-precision spine surgery instruments and systems designed to
            enhance clarity, stability, and confidence in every procedure.
          </p>
        </div>

        {/* MENU */}
        <div className="flex flex-col items-center lg:items-start">
          <p className="text-xs uppercase tracking-[0.22em] text-neutral-500 mb-4">
            Navigation
          </p>

          <ul className="space-y-2 text-sm text-neutral-700">
            {Object.entries(menuOptions).map(([path, name]) => (
              <li key={path}>
                <Link
                  to={path}
                  className="
                    hover:text-custom-logo-aqua transition-colors
                  "
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* CONTACT */}
        <div className="flex flex-col items-center lg:items-start">
          <p className="text-xs uppercase tracking-[0.22em] text-neutral-500 mb-4">
            Contact
          </p>
          <div className="text-sm leading-relaxed text-neutral-600 text-center lg:text-left">
            <p className="font-medium text-neutral-800">Spine Concepts®</p>
            <p>251 Little Falls Drive</p>
            <p>Wilmington, DE 19808</p>
            <p>Phone: (302) 202-9212</p>
            <p>Toll free: (888) 368-0323</p>
          </div>
        </div>

        {/* SOCIAL */}
        <div className="flex flex-col items-center lg:items-end gap-4">
          <p className="text-xs uppercase tracking-[0.22em] text-neutral-500">
            Follow us
          </p>

          <div className="flex gap-5">
            <a
              href="https://www.instagram.com/spineconcepts.medic/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-600 hover:text-custom-logo-aqua transition"
            >
              <Instagram size={20} />
            </a>

            <a
              href="https://www.facebook.com/SpineConcepts.Medical/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-600 hover:text-custom-logo-aqua transition"
            >
              <Facebook size={20} />
            </a>

            <a
              href="https://www.linkedin.com/company/spineconceptsmedical"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-600 hover:text-custom-logo-aqua transition"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="border-t border-neutral-300">
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-10 py-4 text-center text-xs text-neutral-500 tracking-wide">
          © {year} Spine Concepts®. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
