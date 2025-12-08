import React from "react";
import { useParams, useLocation } from "react-router-dom";

import { RectangleSection, CategoryList } from "../components";
import mockData from "../data/mockData";
import wallpaperFooter from "/assets/images/wallpaper/wallpaper_footer.webp";
import img2 from "/assets/images/wallpaper/colossus_t/4-3.webp";
import img22 from "/assets/images/wallpaper/colossus_t/4-2.webp";
import img3 from "/assets/images/wallpaper/pedicle_screw/8.webp";
import img3333 from "/assets/images/wallpaper/pedicle_screw/7-2.webp";
import img33 from "/assets/images/wallpaper/protesis_cervical/6-2.webp";
import img333 from "/assets/images/wallpaper/protesis_cervical/6-3.webp";

const Products = () => {
  const { mode } = useParams(); // "open" | "endoscopic" | undefined
  const location = useLocation();

  // Leer ?category=consoles / disposable / implants
  const params = new URLSearchParams(location.search);
  const categoryParam = params.get("category");

  const categoryMap = {
    consoles: "Consoles",
    disposable: "Disposable",
    implants: "Implants",
  };

  const initialFilter =
    categoryParam && categoryMap[categoryParam]
      ? categoryMap[categoryParam]
      : "All";

  //  MENÚ GLOBAL
  if (!mode) {
    return (
      <section className="w-full h-auto flex flex-col items-center">
        {/* Intro dinámica */}
        <div className="w-full max-w-screen-2xl px-6 py-6 flex flex-col items-center text-center gap-3">
          <p className="text-[11px] uppercase tracking-[0.25em] text-neutral-500">
            Product navigation
          </p>

          <h1 className="text-2xl lg:text-3xl font-semibold">
            What are you looking for?
          </h1>

          <p className="text-sm lg:text-base text-neutral-600 max-w-xl">
            Explore complete solutions for open spine surgery or minimally
            invasive endoscopic approaches, depending on your surgical workflow.
          </p>
        </div>

        <div
          className="flex flex-col pb-6 px-6 gap-6 max-w-screen-2xl w-full
        lg:flex-row"
        >
          {/* Bloque Open Surgery */}
          <RectangleSection
            title="Complete Sets for Open Spine Surgery"
            subtitle="Instrumentation trays engineered for stability, clarity, and surgeon workflow."
            image={img2}
            image2={img22}
            alignment="items-start"
            textAlign="left"
            page1="Products/open"
            button1="Explore Open Surgery"
          />

          {/* Bloque Endoscopic Surgery */}
          <RectangleSection
            title="Endoscopic Spine Surgery Systems"
            subtitle="High-performance endoscopic tools developed to support minimally invasive techniques with clarity, stability, and surgeon confidence."
            image={img33}
            image2={img333}
            alignment="items-end"
            textAlign="right"
            page1="Products/endoscopic"
            button1="Explore Endoscopic"
          />
        </div>

        {/* Footer visual */}
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
  }

  // Configuración modo
  const isOpen = mode === "open";

  const heroConfig = isOpen
    ? {
        title: "Complete Sets for Open Spine Surgery",
        subtitle:
          "Instrumentation trays designed to provide intuitive workflows, stability, and confidence in open spine procedures.",
        image: img2,
        image2: img22,
      }
    : {
        title: "Endoscopic Spine Surgery Systems",
        subtitle:
          "High-performance endoscopic tools developed to support minimally invasive techniques with clarity, stability, and surgeon confidence.",
        image: img3,
        image2: img3333,
      };

  return (
    <section className="w-full flex flex-col items-center">
      {/* Hero específico */}
      <div className="flex flex-col py-6 px-6 gap-6 max-w-screen-2xl w-full">
        <RectangleSection
          title={heroConfig.title}
          subtitle={heroConfig.subtitle}
          image={heroConfig.image}
          image2={heroConfig.image2}
          alignment="items-start"
          textAlign="left"
        />
      </div>

      {/* Feed  */}
      <CategoryList initialFilter={initialFilter} />
    </section>
  );
};

export default Products;
