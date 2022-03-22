import React from "react";
import data from "../products.json";
import Products from "../pages/Products";
import mainProducts from "../partials/_products.scss";

const FilterProducts = () => {
  console.log(data);

  return (
    <>
      <div className="decks">
        {data.map((item, key) => (
          <div key={key} className="items">
            <h2>{item.name}</h2>
            <a href="./img/brown.jpeg" target="_blank">
              <img src="../img/brown.jpeg" alt="brown" />
            </a>
          </div>

          //   <div key={key}>
          //   <h2>{item.name}</h2>
          // </div>
        ))}
      </div>
    </>
  );
};

export default FilterProducts;
