import React from "react";
import { Link, useLocation } from "react-router-dom";

const Breadcrumb = () => {
  const location = useLocation();
  const pathParts = location.pathname.split("/").filter(Boolean);
  const isHome = pathParts.length === 0;

  return (
    <div className="flex justify-start border-t border-gray-300">
      <div
        className="
          py-3 pl-8 text-sm font-light flex
          lg:pl-32"
      >
        <Link to="/" className="">
          <p>Spine Concepts</p>
        </Link>

        {isHome ? (
          <span className="text-gray-600">/ Home</span>
        ) : (
          pathParts.map((part, index) => {
            const url = "/" + pathParts.slice(0, index + 1).join("/");
            const name = part
              .replace(/-/g, " ")
              .replace(/\b\w/g, (c) => c.toUpperCase());

            return (
              <span key={url} className="flex items-center space-x-2">
                <span>/</span>
                <Link to={url} className="text-gray-600 hover:text-gray-900">
                  {name}
                </Link>
              </span>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Breadcrumb;
