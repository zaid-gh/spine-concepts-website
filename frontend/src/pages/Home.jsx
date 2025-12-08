import React from "react";
import {
  SpineConcepts3DSection,
  RectangleSection,
  About,
  Gallery,
} from "../components";
import mockData from "../data/mockData";
import img1 from "/assets/images/wallpaper/colossus_t/2.webp";
import img11 from "/assets/images/wallpaper/colossus_t/2-1.webp";
import img2 from "/assets/images/wallpaper/colossus_t/4-1.webp";
import img22 from "/assets/images/wallpaper/colossus_t/4-2.webp";
import img3 from "/assets/images/wallpaper/pedicle_screw/8.webp";
import img33 from "/assets/images/wallpaper/pedicle_screw/7-2.webp";
import wallpaperFooter from "/assets/images/wallpaper/wallpaper_footer.webp";
import wallpaperFooter2 from "/assets/images/wallpaper/wallpaper_fotter_2.webp";
import wallpaperFooter3 from "/assets/images/wallpaper/wallpaper_fotter_3.webp";
import loop from "/assets/images/Spine_Concepts_Loop.mp4";

const Home = () => {
  const { categories } = mockData;

  return (
    <section className="w-full flex flex-col items-center ">
      <div className="flex flex-col pt-6 px-6 gap-6 max-w-screen-2xl w-full">
        <RectangleSection
          title="Advanced Systems for Spine Surgery"
          subtitle="Endoscopic systems, open surgery instruments, and implant sets designed to enhance efficiency, stability, and surgeon confidence in every case."
          image={wallpaperFooter2}
          image2={wallpaperFooter3}
          alignment="items-start"
          textAlign="left"
          page1="Products"
          button1="Explore Products"
        />

        <RectangleSection
          title="Complete Sets for Open Spine Surgery"
          subtitle="Instrumentation trays engineered for stability, clarity, and surgeon workflow."
          image={img2}
          image2={img22}
          alignment="items-end"
          textAlign="right"
          page1="Products/open"
          button1="Explore Open Surgery"
        />

        <RectangleSection
          title="Endoscopic Spine Surgery Systems"
          subtitle="High-performance endoscopic tools developed to support minimally invasive techniques with clarity, stability, and surgeon confidence."
          image={img3}
          image2={img33}
          alignment="items-start"
          textAlign="left"
          page1="Products/endoscopic"
          button1="Explore Endoscopic"
        />
      </div>

      <div className="w-full pt-6">
        <Gallery
          products={categories.flatMap((category) => category.products)}
        />
      </div>
      <div
        className="
          w-full
          h-[20rem]
          lg:h-[60rem]
          bg-cover bg-center bg-no-repeat
          "
        style={{
          backgroundImage: `url(${wallpaperFooter})`,
        }}
      ></div>
    </section>
  );
};

export default Home;
