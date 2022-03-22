import React from "react";
import data from "../products.json";
import ProductsStyle from "../partials/_products.scss";
import FilterProducts from "../components/FilterProducts";

const Products = () => {
  const updateProducts = () => {
    return data.reverse();
  };
  return (
    <>
      {/* <!-- header --> */}

      <header>
        <div className="hero">
          <div className="hero-img">
            <img src="../img/girl.jpeg.crdownload" alt="" />
            <h1>Don't Skate Alone.</h1>
          </div>
          <div className="hero-img">
            <img src="../img/pink.jpeg" alt="" />
            <h1>Skate witch-yo.</h1>
          </div>
          <div className="hero-img">
            <img src="../img/skate_team.jpeg" alt="" />
            <h1>GIRL.</h1>
          </div>
        </div>
      </header>

      {/* <!-- items --> */}

      <h1 className="price">All Decks $60 | Click on Deck</h1>
      <button onClick={updateProducts}>update</button>
      <FilterProducts data={data} />
    </>
  );
};

export default Products;
