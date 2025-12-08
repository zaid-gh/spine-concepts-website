import React, { useState, useEffect } from "react";
import resourcesData from "../../data/resourcesData";

const ResourcesList = ({ initialFilter = "All", categories }) => {
  const dataCategories = categories || resourcesData.categories; // fallback a resourcesData

  const [activeFilter, setActiveFilter] = useState(initialFilter); // "All" | nombre de categoría

  // sincroniza el estado
  useEffect(() => {
    setActiveFilter(initialFilter);
  }, [initialFilter]);

  const handleDocumentClick = (doc) => {
    const target = doc.url || doc.file;
    if (!target) return;
    window.open(target, "_blank", "noopener,noreferrer");
  };

  // Categorías visibles según el filtro
  const visibleCategories =
    activeFilter === "All"
      ? dataCategories
      : dataCategories.filter((category) => category.name === activeFilter);

  return (
    <section className="w-full py-10 bg-white">
      {/* Barra de filtros */}
      <div className="w-full flex flex-col items-center mb-8">
        <p className="text-[11px] uppercase tracking-[0.25em] text-neutral-500 mb-3">
          Filter by category
        </p>

        <div className="flex flex-wrap justify-center gap-2">
          {/* Opción All */}
          <button
            type="button"
            onClick={() => setActiveFilter("All")}
            className={`
              px-4 py-1.5 rounded-full text-xs md:text-sm border
              ${
                activeFilter === "All"
                  ? "bg-neutral-500 text-white border-neutral-500"
                  : "bg-white text-neutral-800 border-neutral-300 hover:border-neutral-500"
              }
              transition
            `}
          >
            All
          </button>

          {/* Una pill por cada categoría */}
          {dataCategories.map((category) => (
            <button
              key={category.name}
              type="button"
              onClick={() => setActiveFilter(category.name)}
              className={`
                px-4 py-1.5 rounded-full text-xs md:text-sm border
                ${
                  activeFilter === category.name
                    ? "bg-neutral-500 text-white border-neutral-500"
                    : "bg-white text-neutral-800 border-neutral-300 hover:border-neutral-500"
                }
                transition
              `}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Secciones por categoría (según filtro) */}
      {visibleCategories.map((category) => (
        <div
          key={category.name}
          className="flex flex-col items-center gap-4 mb-10"
        >
          {/* Encabezado de categoría */}
          <div className="flex flex-col items-center gap-1">
            <h2 className="text-lg lg:text-xl font-semibold text-neutral-900 text-center">
              {category.name}
            </h2>
            <p className="text-[11px] uppercase tracking-[0.25em] text-neutral-500 text-center">
              · {category.documents.length} resources ·
            </p>
          </div>

          {/* Grid tipo Instagram de resources */}
          <div
            className="
              grid grid-cols-2
              w-full max-w-3xl
              gap-0
            "
          >
            {category.documents.map((doc) => (
              <button
                key={doc.id}
                type="button"
                onClick={() => handleDocumentClick(doc)}
                className="
                  relative group
                  aspect-[3/4]
                  overflow-hidden
                  bg-white
                "
              >
                {/*Thumbnail*/}
                {doc.thumbnail ? (
                  <img
                    src={doc.thumbnail}
                    alt={doc.name}
                    className="
                      w-full h-full object-contain
                      transition-transform duration-300
                      group-hover:scale-[1.04]
                    "
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-xs text-neutral-400 border border-dashed border-neutral-200">
                    No thumbnail
                  </div>
                )}

                {/* Overlay + título en hover (desktop) */}
                <div
                  className="
                    absolute inset-0
                    bg-gradient-to-t from-black/55 via-black/20 to-transparent
                    opacity-0
                    group-hover:opacity-100
                    transition-opacity duration-300
                    flex items-end justify-center
                    px-2 pb-3
                  "
                >
                  <p className="text-xs text-white text-center font-light line-clamp-2">
                    {doc.name}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default ResourcesList;
