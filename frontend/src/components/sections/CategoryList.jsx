import React, { useState, useEffect } from "react";
import mockData from "../../data/mockData";
import { useNavigate } from "react-router-dom";

const CategoryList = ({ initialFilter = "All", categories }) => {
  const { categories: mockCategories } = mockData;
  const dataCategories = categories || mockCategories; // fallback a mockData

  const navigate = useNavigate();

  const [activeFilter, setActiveFilter] = useState(initialFilter); // "All" | nombre de categoría

  const handleProductClick = (id) => {
    navigate(`/Product/${id}`);
  };

  useEffect(() => {
    setActiveFilter(initialFilter);
  }, [initialFilter]);

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

      {/* Secciones por categoría */}
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
              · {category.products.length} products ·
            </p>
          </div>

          {/* Feed */}
          <div
            className="
              grid grid-cols-2
              w-full max-w-3xl
              gap-0
            "
          >
            {category.products.map((product) => (
              <button
                key={product.id}
                type="button"
                onClick={() => handleProductClick(product.id)}
                className="
                  relative group
                  aspect-[3/4]
                  overflow-hidden
                  bg-white
                "
              >
                {/* Imagen */}
                <img
                  src={product.photos[0]}
                  alt={product.name}
                  className="
                    w-full h-full object-contain
                    transition-transform duration-300
                    group-hover:scale-[1.04]
                  "
                />

                {/* Overlay + título en hover */}
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
                    {product.name}
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

export default CategoryList;
