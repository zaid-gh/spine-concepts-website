import React from "react";
import { AboutUs, GetInTouch } from "../components";
import wallpaperFooter from "/assets/images/wallpaper/wallpaper_footer.webp";

const Us = () => {
  return (
    <section className="w-full min-h-screen bg-custom-bg-gray">
      <div className="max-w-screen-2xl mx-auto px-5 sm:px-8 lg:px-10 pt-8 lg:pt-20 pb-16">
        <div className="relative overflow-hidden rounded-[36px] border border-neutral-200/70 bg-white/40 backdrop-blur p-6 sm:p-8 lg:p-10">
          <div className="pointer-events-none absolute inset-0 opacity-[0.08]">
            <img
              src={wallpaperFooter}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>

          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div className="w-full">
              <AboutUs />
            </div>

            <div className="w-full lg:sticky lg:top-24">
              <GetInTouch />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Us;
