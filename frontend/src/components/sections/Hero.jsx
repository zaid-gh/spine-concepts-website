import React from "react";
import { Link } from "react-router-dom";
import heroBg from "/assets/images/wallpaper/colossus_t/2.webp";
import heroBg2 from "/assets/images/wallpaper/colossus_t/2-1.webp";

const Hero = () => {
  const scrollToSection = () => {
    const section = document.getElementById("about");
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      className={`
        w-full
        rounded-xl overflow-hidden
        lg:h-[calc(100vh-200px)]
        lg:bg-cover lg:bg-center lg:bg-no-repeat
        lg:bg-[url('${heroBg}')]
      `}
    >
      {/* Imagen bloque separado en móvil */}
      <div
        className="
          w-full
          h-[22rem]
          bg-cover bg-center bg-no-repeat
          rounded-xl
          lg:hidden
        "
        style={{ backgroundImage: `url(${heroBg2})` }}
      />

      {/* Contenido texto + botones */}
      <div
        className="
          h-full py-10 px-3 flex flex-col gap-6 
          lg:w-4/6 lg:p-40 lg:justify-center
        "
      >
        <h2
          className="
            text-2xl font-semibold
            lg:text-5xl
          "
        >
          Advanced Systems for Spine Surgery.
        </h2>

        <p className="font-light text-lg">
          Endoscopic systems, open surgery instruments, and implant sets
          designed to enhance efficiency, stability, and surgeon confidence in
          every case.
        </p>

        <div
          className="
            flex gap-4"
        >
          <Link
            to="/Products"
            className="flex items-center px-6 h-10 rounded-full  bg-custom-logo-aqua text-neutral-100 font-medium hover:text-white hover:bg-[#B1DBE3] transition"
          >
            Explore Gallery
          </Link>

          <Link
            to="/Contact"
            className="flex items-center px-6 h-10 rounded-full border border-neutral-500 text-neutral-700 font-medium hover:bg-[#B1DBE3] hover:border-[#B1DBE3] transition hover:text-white"
          >
            Learn more
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
