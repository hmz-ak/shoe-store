import React, { createContext, useState } from "react";
import { products } from "../data/data";
export const ShoeContext = createContext();

const ShoeContextProvider = (props) => {
  const [shoes, setshoes] = useState(products);
  return (
    <ShoeContext.Provider value={{ shoes }}>
      {props.children}
    </ShoeContext.Provider>
  );
};

export default ShoeContextProvider;
