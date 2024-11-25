import React from "react";
import { Routes, Route } from "react-router-dom";

import Product from "./сomponents/Product";
import ProductsPage from "./сomponents/ProductsPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<ProductsPage />} />
      <Route path="/product/:id" element={<Product/>} /> 
    </Routes>
  );
};

export default App;
