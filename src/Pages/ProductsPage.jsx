import React, { useState } from "react";
import Products from "../Components/Products/Products";

export const CardToggle = React.createContext();

const ProductsPage = ({ toggleBtn }) => {
  const x = toggleBtn;
  const [toggleListGrid, setToggleListGrid] = useState(false);
  return (
    <CardToggle.Provider value={{ setToggleListGrid, x }}>
      <Products toggleView={toggleListGrid} />
    </CardToggle.Provider>
  );
};

export default ProductsPage;
