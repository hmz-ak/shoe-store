import React, { useContext } from "react";
import { ShoeContext } from "../context/ShoeContext";

const Shoes = () => {
  const { shoes } = useContext(ShoeContext);
  return (
    <div>
      {shoes.map((product) => {
        return product.gender == "MEN" ? (
          <div>
            <li key={product.id}>{product.name}</li>
            <li>{product.price}</li>
            <li>{product.category}</li>
            <li>{product.gender}</li>
            <li>{product.brand}</li>
            <img src={product.imageURL} alt="name" />
          </div>
        ) : (
          <div></div>
        );
      })}
    </div>
  );
};

export default Shoes;
