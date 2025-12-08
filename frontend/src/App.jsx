import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "./components";

const Home = lazy(() => import("./pages/Home"));
const Products = lazy(() => import("./pages/ProductsMenu"));
const Contact = lazy(() => import("./pages/Contact"));
const Us = lazy(() => import("./pages/Us"));
const Resources = lazy(() => import("./pages/Resources"));
const ProductDetail = lazy(() => import("./pages/ProductDetail"));

const App = () => {
  const menuOptions = {
    "/": "Home",
    "/Products": "Products",
    "/Us": "Us",
    "/Contact": "Contact",
    "/Resources": "Resources",
  };
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route element={<Layout menuOptions={menuOptions} />}>
            <Route path="/" element={<Home />} />
            <Route path="/Products" element={<Products />} />
            <Route path="/Products/:mode" element={<Products />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Us" element={<Us />} />
            <Route path="/Product/:id" element={<ProductDetail />} />
            <Route path="/Resources" element={<Resources />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
