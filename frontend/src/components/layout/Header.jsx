import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import mockData from "../../data/mockData";

const Header = ({ menuOptions }) => {
  const [isMenuVisible, setIsMenuVisible] = useState(false); // panel móvil
  const [showProductsBar, setShowProductsBar] = useState(false); // panel debajo de Products (desktop)
  const [productsStep, setProductsStep] = useState("type"); // "type" | "category" | "list"
  const [activeSurgeryType, setActiveSurgeryType] = useState(null); // "open" | "endoscopic" | null
  const [activeSubcategory, setActiveSubcategory] = useState(null); // "all" | "consoles" | "disposable" | "implants" | null

  const [mobileProductsMode, setMobileProductsMode] = useState(false); // modo products dentro del hamburger

  const location = useLocation();
  const navigate = useNavigate();

  const { categories } = mockData;

  const surgeryLabels = {
    open: "Open Spine Surgery",
    endoscopic: "Endoscopic Spine Surgery",
  };

  const categoryLabels = {
    all: "View All",
    consoles: "Consoles",
    disposable: "Disposable",
    implants: "Implants",
  };

  // helper para construir ruta /Products/:mode?category=...
  const buildProductsPath = (surgeryType, subcategory) => {
    if (!surgeryType) return "/Products";

    let path = `/Products/${surgeryType}`;
    if (subcategory && subcategory !== "all") {
      path += `?category=${subcategory}`;
    }
    return path;
  };

  // productos de una subcategoría (por ahora usando mockData global endoscópico)
  const getProductsForSubcategory = (subcategoryKey) => {
    if (!subcategoryKey || subcategoryKey === "all") return [];
    const categoryName = categoryLabels[subcategoryKey]; // "Consoles", "Disposable", "Implants"
    const cat = categories.find((c) => c.name === categoryName);
    return cat ? cat.products : [];
  };

  const resetProductsUI = () => {
    setProductsStep("type");
    setActiveSurgeryType(null);
    setActiveSubcategory(null);
  };

  const closeDesktopProductsPanel = () => {
    setShowProductsBar(false);
    resetProductsUI();
  };

  const toggleMenu = () => {
    const next = !isMenuVisible;
    setIsMenuVisible(next);
    setMobileProductsMode(false);
    resetProductsUI();
  };

  const closeMenu = () => {
    setIsMenuVisible(false);
    setMobileProductsMode(false);
    resetProductsUI();
  };

  // Cerrar panel de products y hamburger al cambiar de ruta
  useEffect(() => {
    closeDesktopProductsPanel();
    closeMenu();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  // DESKTOP: click en Products (solo abre/cierra panel)
  const handleDesktopProductsClick = () => {
    const next = !showProductsBar;
    setShowProductsBar(next);
    if (next) resetProductsUI();
  };

  // MOBILE: entrar a modo products dentro del menú
  const handleMobileProductsClick = () => {
    setMobileProductsMode(true);
    resetProductsUI();
  };

  // BACK desktop
  const handleDesktopBack = () => {
    if (productsStep === "list") {
      setProductsStep("category");
    } else if (productsStep === "category") {
      setProductsStep("type");
      setActiveSubcategory(null);
    }
  };

  // BACK mobile
  const handleMobileBack = () => {
    if (productsStep === "list") {
      setProductsStep("category");
    } else if (productsStep === "category") {
      setProductsStep("type");
      setActiveSubcategory(null);
    } else if (productsStep === "type") {
      setMobileProductsMode(false);
      resetProductsUI();
    }
  };

  // DESKTOP: PANEL DE PRODUCTS (RECTÁNGULO VERTICAL BAJO PRODUCTS)

  const DesktopProductsPanel = () => {
    // Paso 1: elegir Open / Endoscopic
    if (productsStep === "type") {
      return (
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <p className="text-[11px] uppercase tracking-[0.25em] text-neutral-500 font-semibold">
              Surgery type
            </p>

            <button
              onClick={() => {
                setActiveSurgeryType("open");
                setProductsStep("category");
              }}
              className={`
                w-full px-4 py-3 rounded-lg border text-sm text-left
                ${
                  activeSurgeryType === "open"
                    ? "bg-neutral-100 border-neutral-300 font-semibold"
                    : "bg-white text-neutral-800 border-neutral-300 hover:bg-neutral-50"
                }
              `}
            >
              Open Spine Surgery
            </button>

            <button
              onClick={() => {
                setActiveSurgeryType("endoscopic");
                setProductsStep("category");
              }}
              className={`
                w-full px-4 py-3 rounded-lg border text-sm text-left
                ${
                  activeSurgeryType === "endoscopic"
                    ? "bg-neutral-100 border-neutral-300 font-semibold"
                    : "bg-white text-neutral-800 border-neutral-300 hover:bg-neutral-50"
                }
              `}
            >
              Endoscopic Spine Surgery
            </button>
          </div>
        </div>
      );
    }

    // Paso 2: elegir categoría
    if (productsStep === "category") {
      return (
        <div className="flex flex-col gap-4">
          <button
            onClick={handleDesktopBack}
            className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-700 hover:text-neutral-900"
          >
            <span className="text-base">‹</span>
            <span>Back</span>
          </button>

          <div className="flex flex-col gap-2">
            <p className="text-[11px] uppercase tracking-[0.25em] text-neutral-500 font-semibold">
              {activeSurgeryType
                ? surgeryLabels[activeSurgeryType]
                : "Surgery type"}
            </p>

            <div className="flex flex-col gap-1">
              {[
                { key: "all", label: "View All" },
                { key: "consoles", label: "Consoles" },
                { key: "disposable", label: "Disposable" },
                { key: "implants", label: "Implants" },
              ].map(({ key, label }) => (
                <button
                  key={key}
                  onClick={() => {
                    if (key === "all") {
                      const path = buildProductsPath(activeSurgeryType, "all");
                      closeDesktopProductsPanel();
                      navigate(path);
                    } else {
                      setActiveSubcategory(key);
                      setProductsStep("list");
                    }
                  }}
                  className={`
                    w-full px-4 py-2 text-sm text-left rounded-md
                    ${
                      activeSubcategory === key && productsStep === "list"
                        ? "bg-neutral-100 font-semibold"
                        : "hover:bg-neutral-50"
                    }
                  `}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>
      );
    }

    // Paso 3: lista de productos de la categoría
    if (productsStep === "list") {
      const products = getProductsForSubcategory(activeSubcategory);

      return (
        <div className="flex flex-col gap-4">
          <button
            onClick={handleDesktopBack}
            className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-700 hover:text-neutral-900"
          >
            <span className="text-base">‹</span>
            <span>Back</span>
          </button>

          <div className="flex flex-col gap-2">
            <p className="text-[11px] uppercase tracking-[0.25em] text-neutral-500 font-semibold">
              {activeSurgeryType
                ? surgeryLabels[activeSurgeryType]
                : "Surgery type"}
            </p>
            <p className="text-xs text-neutral-600 font-medium">
              {categoryLabels[activeSubcategory]}
            </p>

            <div className="flex flex-col gap-2 text-sm">
              {/* View all de esa categoría */}
              <button
                onClick={() => {
                  const path = buildProductsPath(
                    activeSurgeryType,
                    activeSubcategory
                  );
                  closeDesktopProductsPanel();
                  navigate(path);
                }}
                className="w-full px-4 py-2.5 rounded-md bg-neutral-100 hover:bg-neutral-200 text-left"
              >
                View all {categoryLabels[activeSubcategory]}
              </button>

              {/* Lista de productos individuales */}
              {products.map((product) => (
                <button
                  key={product.id}
                  onClick={() => {
                    closeDesktopProductsPanel();
                    navigate(`/Product/${product.id}`);
                  }}
                  className="w-full px-4 py-2.5 rounded-md bg-neutral-100 hover:bg-neutral-200 text-left"
                >
                  {product.name}
                </button>
              ))}

              {products.length === 0 && (
                <p className="text-xs text-neutral-500">
                  No products available yet for this category.
                </p>
              )}
            </div>
          </div>
        </div>
      );
    }

    return null;
  };

  // MOBILE: CONTENIDO PRODUCTS DENTRO DEL HAMBURGER

  const MobileProductsContent = () => {
    // Paso 1: Surgery type
    if (productsStep === "type") {
      return (
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-1">
            <button
              onClick={handleMobileBack}
              className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-700 hover:text-neutral-900"
            >
              <span className="text-base">‹</span>
              <span>Back</span>
            </button>
            <span className="text-xs uppercase tracking-[0.25em] text-neutral-500 font-semibold">
              Products
            </span>
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-[11px] uppercase tracking-[0.25em] text-neutral-500 font-semibold">
              Surgery type
            </p>
            <div className="flex flex-col gap-1 border border-neutral-200 rounded-lg overflow-hidden bg-white">
              <button
                onClick={() => {
                  setActiveSurgeryType("open");
                  setProductsStep("category");
                }}
                className={`
                  w-full px-4 py-3 text-sm text-left
                  ${
                    activeSurgeryType === "open"
                      ? "bg-neutral-100"
                      : "text-neutral-800 hover:bg-neutral-100"
                  }
                `}
              >
                Open Spine Surgery
              </button>
              <button
                onClick={() => {
                  setActiveSurgeryType("endoscopic");
                  setProductsStep("category");
                }}
                className={`
                  w-full px-4 py-3 text-sm text-left
                  ${
                    activeSurgeryType === "endoscopic"
                      ? "bg-neutral-100"
                      : "text-neutral-800 hover:bg-neutral-100"
                  }
                `}
              >
                Endoscopic Spine Surgery
              </button>
            </div>
          </div>
        </div>
      );
    }

    // Paso 2: categoría
    if (productsStep === "category") {
      return (
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-1">
            <button
              onClick={handleMobileBack}
              className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-700 hover:text-neutral-900"
            >
              <span className="text-base">‹</span>
              <span>Back</span>
            </button>
            <span className="text-xs uppercase tracking-[0.25em] text-neutral-500 font-semibold">
              {activeSurgeryType
                ? surgeryLabels[activeSurgeryType]
                : "Products"}
            </span>
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-[11px] uppercase tracking-[0.25em] text-neutral-500 font-semibold">
              Category
            </p>
            <div className="flex flex-col gap-1">
              {[
                { key: "all", label: "View All" },
                { key: "consoles", label: "Consoles" },
                { key: "disposable", label: "Disposable" },
                { key: "implants", label: "Implants" },
              ].map(({ key, label }) => (
                <button
                  key={key}
                  onClick={() => {
                    if (key === "all") {
                      const path = buildProductsPath(activeSurgeryType, "all");
                      closeMenu();
                      navigate(path);
                    } else {
                      setActiveSubcategory(key);
                      setProductsStep("list");
                    }
                  }}
                  className={`
                    w-full px-4 py-3 text-sm text-left rounded-md
                    ${
                      activeSubcategory === key && productsStep === "list"
                        ? "bg-neutral-100 font-semibold"
                        : "hover:bg-neutral-100"
                    }
                  `}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>
      );
    }

    // Paso 3: lista de productos en mobile
    if (productsStep === "list") {
      const products = getProductsForSubcategory(activeSubcategory);

      return (
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-1">
            <button
              onClick={handleMobileBack}
              className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-700 hover:text-neutral-900"
            >
              <span className="text-base">‹</span>
              <span>Back</span>
            </button>
            <span className="text-xs uppercase tracking-[0.25em] text-neutral-500 font-semibold">
              {activeSurgeryType
                ? surgeryLabels[activeSurgeryType]
                : "Products"}
            </span>
            <span className="text-xs text-neutral-600">
              {categoryLabels[activeSubcategory]}
            </span>
          </div>

          <div className="flex flex-col gap-3 text-sm">
            {/* View all de la categoría */}
            <button
              onClick={() => {
                const path = buildProductsPath(
                  activeSurgeryType,
                  activeSubcategory
                );
                closeMenu();
                navigate(path);
              }}
              className="w-full px-4 py-2.5 rounded-md bg-neutral-100 hover:bg-neutral-200 text-left"
            >
              View all {categoryLabels[activeSubcategory]}
            </button>

            {/* Lista de productos */}
            {products.map((product) => (
              <button
                key={product.id}
                onClick={() => {
                  closeMenu();
                  navigate(`/Product/${product.id}`);
                }}
                className="w-full px-4 py-3 rounded-lg bg-neutral-100 hover:bg-neutral-200 text-left"
              >
                {product.name}
              </button>
            ))}

            {products.length === 0 && (
              <p className="text-xs text-neutral-500">
                No products available yet for this category.
              </p>
            )}
          </div>
        </div>
      );
    }

    return null;
  };

  //RENDER GENERAL

  return (
    <header className="relative w-full">
      {/* NAV PRINCIPAL */}
      <div
        className="w-full flex items-center justify-center bg-custom-bg-gray h-14 z-50 border-b border-neutral-200
      lg:h-20"
      >
        <div className="grid grid-cols-10 items-center w-full max-w-screen-2xl">
          {/* Logo */}
          <div className="col-span-2 col-start-2 flex justify-center lg:col-span-2">
            <Link to="/">
              <div className="flex flex-row items-center">
                <img
                  src="/assets/images/icon/logo.png"
                  alt="Spine Concepts"
                  className="h-8 pr-4 w-auto"
                />
                <img
                  src="/assets/images/logo/typography_no_r.png"
                  alt="Spine Concepts"
                  className="h-8 w-auto lg:block"
                />
              </div>
            </Link>
          </div>

          {/* Navegación desktop */}
          <nav className="hidden col-span-6 justify-center px-40 py-2 lg:flex">
            <ul className="flex space-x-12 text-sm">
              {Object.entries(menuOptions).map(([path, name]) => (
                <li key={path}>
                  {name === "Products" ? (
                    <button
                      type="button"
                      className="font-light hover:font-medium transition"
                      onClick={handleDesktopProductsClick}
                    >
                      Products
                    </button>
                  ) : (
                    <Link
                      to={path}
                      className="font-light hover:font-medium transition"
                      onClick={closeDesktopProductsPanel}
                    >
                      {name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Móvil */}
          <div className="col-span-2 col-start-9 flex justify-center items-center pr-6 lg:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-full border border-neutral-400 bg-white/80 backdrop-blur"
              aria-label="Toggle navigation menu"
            >
              <svg
                className="h-5 w-5 text-neutral-800"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
              >
                <line x1="4" y1="7" x2="20" y2="7" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="17" x2="20" y2="17" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* DESKTOP: overlay click-outside + panel de Products */}
      {showProductsBar && (
        <>
          <div
            className="fixed inset-0 z-30"
            onClick={closeDesktopProductsPanel}
          />
          <div className="hidden lg:block">
            <div className="absolute left-1/2 -translate-x-1/2 mt-2 z-40">
              <div className="w-80 bg-white border border-neutral-200 rounded-xl shadow-lg p-5">
                <DesktopProductsPanel />
              </div>
            </div>
          </div>
        </>
      )}

      {/* PANEL MÓVIL*/}
      <div
        className={`
          fixed inset-0 z-40 lg:hidden transition-opacity duration-200
          ${
            isMenuVisible
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }
        `}
      >
        <div className="absolute inset-0 bg-black/40" onClick={closeMenu} />

        <div
          className={`
            absolute right-0 top-0 h-full w-72
            bg-white shadow-xl
            flex flex-col py-8 px-6 gap-6
            transform transition-transform duration-300
            ${isMenuVisible ? "translate-x-0" : "translate-x-full"}
          `}
        >
          {!mobileProductsMode ? (
            <>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs uppercase tracking-[0.25em] text-neutral-500 font-semibold">
                  Menu
                </span>
                <button
                  onClick={closeMenu}
                  aria-label="Close navigation menu"
                  className="p-1 rounded-full hover:bg-neutral-200 transition"
                >
                  <svg
                    className="h-5 w-5 text-neutral-700"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  >
                    <line x1="6" y1="6" x2="18" y2="18" />
                    <line x1="6" y1="18" x2="18" y2="6" />
                  </svg>
                </button>
              </div>

              <ul className="space-y-4 text-sm font-light">
                {Object.entries(menuOptions).map(([path, name]) => (
                  <li key={path}>
                    {name === "Products" ? (
                      <button
                        type="button"
                        onClick={handleMobileProductsClick}
                        className="text-left w-full font-normal"
                      >
                        Products
                      </button>
                    ) : (
                      <Link
                        to={path}
                        onClick={closeMenu}
                        className="text-left block font-normal"
                      >
                        {name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <MobileProductsContent />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
