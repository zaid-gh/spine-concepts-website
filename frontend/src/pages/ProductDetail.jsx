import React, { useState, useMemo } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";

import mockData from "../data/mockData";
import resourcesData from "../data/resourcesData";

const ProductDetail = () => {
  const { id } = useParams();

  //Producto actual
  const allProducts = useMemo(
    () => mockData.categories.flatMap((cat) => cat.products),
    []
  );

  const product = allProducts.find((p) => p.id === id);

  // categoría del producto (Consoles, Disposable, Implants)
  const productCategory =
    mockData.categories.find((cat) => cat.products.some((p) => p.id === id))
      ?.name || null;

  // Resources relacionados
  const allResources = useMemo(
    () => resourcesData.categories.flatMap((cat) => cat.documents),
    []
  );

  const normalizedId = (id || "").toLowerCase();

  const relatedResources = allResources.filter((doc) => {
    const rel = doc.relatedProductIds || [];
    return rel.some((rid) => (rid || "").toLowerCase() === normalizedId);
  });

  // Carrusel de imágenes
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!product) {
    return (
      <section className="w-full min-h-screen flex items-center justify-center">
        <p className="text-neutral-600">Product not found.</p>
      </section>
    );
  }

  const photos = product.photos || [];

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) =>
      photos.length ? (prev - 1 + photos.length) % photos.length : 0
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) =>
      photos.length ? (prev + 1) % photos.length : 0
    );
  };

  const currentPhoto = photos[currentImageIndex];

  // Wallpaper estático por producto
  const getWallpaperUrl = () => {
    if (!photos.length) return null;
    const first = photos[0];
    const lastSlash = first.lastIndexOf("/");
    if (lastSlash === -1) return null;
    const folder = first.slice(0, lastSlash);

    return `${folder}/wallpaperproduct.webp`;
  };

  const wallpaperUrl = getWallpaperUrl();

  const handleOpenResource = (doc) => {
    const target = doc.url || doc.file;
    if (!target) return;
    window.open(target, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="w-full flex flex-col">
      {/*CARRUSEL + INFO TÉCNICA  */}
      <div className="w-full flex justify-center">
        <div className="max-w-screen-2xl w-full py-6 px-6 pb-12  lg:pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.1fr)] gap-10 lg:gap-16 items-start">
            {/* CARRUSEL */}
            <div>
              <div className="relative w-full aspect-[4/3] rounded-3xl bg-white flex items-center justify-center overflow-hidden border border-neutral-200/70">
                {currentPhoto && (
                  <img
                    src={currentPhoto}
                    alt={product.name}
                    className="w-[80%] h-[80%] object-contain transition-transform duration-300"
                  />
                )}

                {/* Botones prev / next */}
                {photos.length > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={handlePrevImage}
                      className="
                        absolute left-4 top-1/2 -translate-y-1/2
                        h-9 w-9 rounded-full bg-white/90 border border-neutral-200
                        flex items-center justify-center
                        text-neutral-800 text-sm
                        hover:bg-white
                        backdrop-blur
                        transition
                      "
                    ></button>
                    <button
                      type="button"
                      onClick={handleNextImage}
                      className="
                        absolute right-4 top-1/2 -translate-y-1/2
                        h-9 w-9 rounded-full bg-white/90 border border-neutral-200
                        flex items-center justify-center
                        text-neutral-800 text-sm
                        hover:bg-white
                        backdrop-blur
                        transition
                      "
                    ></button>
                  </>
                )}
              </div>

              {/* Thumbnails */}
              {photos.length > 1 && (
                <div className="mt-4 flex gap-2 overflow-x-auto no-scrollbar">
                  {photos.map((photo, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => setCurrentImageIndex(index)}
                      className={`
                        flex-shrink-0
                        w-20 h-16 rounded-xl border
                        overflow-hidden
                        ${
                          index === currentImageIndex
                            ? "border-neutral-800"
                            : "border-neutral-200 hover:border-neutral-400"
                        }
                        bg-white
                      `}
                    >
                      <img
                        src={photo}
                        alt={`${product.name} thumbnail ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* INFO TÉCNICA */}
            <div className="flex flex-col gap-4 lg:gap-6">
              <div className="flex flex-col gap-2">
                {productCategory && (
                  <p className="text-[11px] uppercase tracking-[0.25em] text-neutral-500">
                    {productCategory}
                  </p>
                )}
                <h1 className="text-2xl lg:text-3xl font-semibold text-neutral-900">
                  {product.name}
                </h1>
              </div>

              <div className="prose max-w-none text-sm lg:text-base text-neutral-700 prose-p:mb-3">
                <ReactMarkdown>{product.description}</ReactMarkdown>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* BANNER DE WALLPAPER */}
      {wallpaperUrl && (
        <div className="w-full flex">
          <div className="w-full">
            <div className="w-full h-40 lg:h-[35rem]  overflow-hidden bg-black/5">
              <div
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${wallpaperUrl})` }}
              />
            </div>
          </div>
        </div>
      )}
      {/* RESOURCES RELACIONADOS */}
      {relatedResources.length > 0 && (
        <div className="w-full bg-custom-bg-gray/70 border-t border-neutral-200">
          <div className="max-w-screen-2xl mx-auto px-6 py-10 lg:py-14">
            <div className="flex flex-col gap-4 mb-6">
              <p className="text-[11px] uppercase tracking-[0.25em] text-neutral-500">
                Related resources
              </p>
              <h3 className="text-xl lg:text-2xl font-semibold text-neutral-900">
                Brochures & surgical documentation
              </h3>
              <p className="text-sm lg:text-base text-neutral-600 max-w-2xl">
                Access product brochures, user manuals, and surgical technique
                guides directly connected to this system.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedResources.map((doc) => (
                <button
                  key={doc.id}
                  type="button"
                  onClick={() => handleOpenResource(doc)}
                  className="
                    group
                    w-full
                    rounded-2xl
                    bg-white
                    border border-neutral-200
                    overflow-hidden
                    text-left
                    shadow-sm
                    hover:shadow-md
                    hover:border-neutral-300
                    transition
                  "
                >
                  {/* Thumbnail */}
                  <div className="w-full aspect-[4/3] bg-neutral-100 overflow-hidden">
                    {doc.thumbnail ? (
                      <img
                        src={doc.thumbnail}
                        alt={doc.name}
                        className="
                          w-full h-full object-contain
                          group-hover:scale-[1.03]
                          transition-transform duration-300
                        "
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-xs text-neutral-400">
                        No preview
                      </div>
                    )}
                  </div>

                  {/* Texto */}
                  <div className="p-4 flex flex-col gap-2">
                    <p className="text-[11px] uppercase tracking-[0.2em] text-neutral-500">
                      {doc.tags?.join(" · ") || "Resource"}
                    </p>
                    <h4 className="text-sm font-semibold text-neutral-900 line-clamp-2">
                      {doc.name}
                    </h4>
                    {doc.description && (
                      <p className="text-xs text-neutral-600 line-clamp-3">
                        {doc.description}
                      </p>
                    )}
                    {doc.date && (
                      <p className="mt-1 text-[10px] text-neutral-400">
                        Updated: {doc.date}
                      </p>
                    )}

                    <span className="mt-2 inline-flex items-center text-xs font-medium text-custom-logo-aqua group-hover:text-[#4E7F87]">
                      Open resource
                      <span className="ml-1">↗</span>
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProductDetail;
