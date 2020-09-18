import React, { useContext } from "react";
import { ShoeContext } from "../context/ShoeContext";

const Shoes = () => {
  const { shoes } = useContext(ShoeContext);
  return (
    <div>
      {shoes.map((product) => {
        return product.name;
      })}
    </div>
  );
};

export default Shoes;
