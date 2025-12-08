import React from "react";
import { useNavigate, Link } from "react-router-dom";

const Gallery = ({ products = [] }) => {
  const navigate = useNavigate();

  const handleProductClick = (id) => {
    navigate(`/Product/${id}`);
  };

  const shuffled = [...products].sort(() => Math.random() - 0.5);
  const stripProducts = shuffled.slice(0, 10);

  const loopProducts = [
    ...stripProducts,
    ...stripProducts,
    ...stripProducts,
    ...stripProducts,
  ];

  return (
    <section className="w-full flex flex-col items-center justify-center text-center">
      <div className="w-full overflow-hidden">
        <div
          className="
            flex flex-nowrap
            min-w-max 
            animate-marquee
            
          "
        >
          {loopProducts.map((product, index) => (
            <div
              key={`${product.id}-${index}`}
              className="
                relative
                flex-shrink-0
                w-80
                lg:w-[30rem]
                aspect-square
                bg-white
                cursor-pointer
              "
              onClick={() => handleProductClick(product.id)}
            >
              <img
                src={product.photos[0]}
                alt={product.id}
                className="absolute w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
        <div className="w-full px-6 py-20 flex flex-col items-center text-center bg-white">
          <h2 className="text-3xl lg:text-5xl font-semibold">
            Explore our Spine Surgery Solutions.
          </h2>

          <p className="mt-4 font-light text-lg max-w-2xl">
            Discover endoscopic systems, open surgery instruments, and implant
            sets engineered to improve precision, workflow, and patient
            outcomes.
          </p>

          <Link
            to="/Products"
            className="
            mt-8
            px-8 py-3
            rounded-full
            bg-neutral-600
            text-white
            font-medium
            hover:bg-neutral-300
            transition
          "
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
