import React from "react";
import { Link } from "react-router-dom";

const RectangleSection = ({
  title,
  subtitle,
  image,
  image2,
  alignment,
  textAlign,
  button1,
  button2,
  page1,
  page2,
}) => {
  const isVideo =
    typeof image === "string" && /\.(mp4|webm|ogg)$/i.test(image || "");

  return (
    <section
      className={`
        relative
        w-full
        rounded-xl overflow-hidden
        flex flex-col ${alignment}
        lg:h-[calc(100vh-250px)]
      `}
    >
      {/* Fondo en desktop */}
      {!isVideo ? (
        <div
          className="
            hidden
            lg:block
            absolute inset-0
            bg-cover bg-center bg-no-repeat
          "
          style={{ backgroundImage: `url(${image})` }}
        />
      ) : (
        <div
          className="
            hidden
            lg:block
            absolute inset-0
          "
        >
          <video
            src={image}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* Imagen / video  bloque separado en móvil */}
      {!isVideo ? (
        <div
          className="
            w-full
            h-[22rem]
            bg-cover bg-center bg-no-repeat
            rounded-xl
            lg:hidden
          "
          style={{ backgroundImage: `url(${image2})` }}
        />
      ) : (
        <div
          className="
            w-full
            h-[22rem]
            rounded-xl
            overflow-hidden
            lg:hidden
          "
        >
          <video
            src={image2}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* Contenido de texto + botones*/}
      <div
        className={`
          relative z-10
          h-full py-10 px-3 
          flex flex-col ${alignment}
          gap-6 
          lg:w-4/6 lg:p-20 lg:justify-center
        `}
      >
        <div
          className={`
            flex flex-col gap-6
            ${textAlign === "right" ? "text-right" : "text-left"}
          `}
        >
          <h2 className="text-2xl font-semibold lg:text-5xl">{title}</h2>

          <p className="font-light text-lg">{subtitle}</p>
        </div>

        <div className="flex gap-4">
          {button1 && page1 && (
            <Link
              to={`/${page1}`}
              className="flex items-center px-6 h-10 rounded-full bg-custom-logo-aqua text-neutral-100 font-medium hover:text-white hover:bg-[#B1DBE3] transition"
            >
              {button1}
            </Link>
          )}

          {button2 && page2 && (
            <Link
              to={`/${page2}`}
              className="flex items-center px-6 h-10 rounded-full border border-neutral-500 text-neutral-700 font-medium hover:bg-[#B1DBE3] hover:border-[#B1DBE3] transition hover:text-white"
            >
              {button2}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default RectangleSection;
