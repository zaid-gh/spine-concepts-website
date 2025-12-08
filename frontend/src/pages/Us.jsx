import React from "react";
import { AboutUs, GetInTouch } from "../components";
import wallpaperFooter from "/assets/images/wallpaper/wallpaper_footer.webp";

const Us = () => {
  return (
    <section
      className="
        w-full min-h-screen
        pt-6
        lg:pt-[5rem] 
        bg-custom-bg-gray
      "
    >
      <div className="max-w-screen-2xl mx-auto flex flex-col gap-20 lg:flex-row">
        {/* Bloque superior: About + CTA en desktop */}
        <div
          className="
            w-full
            flex flex-col gap-10
            lg:flex-row lg:items-start lg:gap-16
          "
        >
          {/* Columna About */}
          <div className="w-full lg:w-1/2">
            <AboutUs />
          </div>

          {/* Columna Get in touch */}
          <div className="w-full lg:w-1/2">
            <GetInTouch />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Us;
