import React from "react";
import { useNavigate } from "react-router-dom";

const ProductGrid = ({ products }) => {
  const navigate = useNavigate();

  const handleProductClick = (id) => {
    navigate(`/Product/${id}`);
  };

  return (
    <section className="overflow-hidden lg:rounded-2xl">
      <div
        className="grid grid-cols-2
        lg:grid-cols-3 lg:gap-1"
      >
        {products.map((product) => (
          <div
            key={product.id}
            className="hover:cursor-pointer overflow-hidden"
            onClick={() => handleProductClick(product.id)}
          >
            <div className="bg-custom-light-gray relative aspect-square transition-all duration-200 hover:bg-custom-bg-gray hover:bg-opacity-100">
              <img src={product.photos[0]} alt={product.id} className="" />
            </div>

            <div className="flex flex-col">
              <div
                className="flex justify-center items-center bg-black h-16 bg-opacity-15  z-10
                transition-all duration-200 hover:bg-custom-bg-gray hover:bg-opacity-100"
              >
                <p
                  className="text-xs text-center font-light w-3/4 
                    lg:text-base"
                >
                  {product.name}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;
