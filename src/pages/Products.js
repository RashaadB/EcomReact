import React from "react";
// import data from "../products.json";

import FilterProducts from "../components/FilterProducts";


const Products = () => {
  
  return (
    <>
    {/* search bar */}
    
    <div className="searchBtn" >
        <div id="search-container">
          <input
            type="search"
            id="search-input"
            placeholder="Search deck description here.."
           
          />
          <button id="search">Search</button>
        </div>
        <div id="buttons">
          <button className="button-value" onClick="filterProducts('all')">
            All
          </button>
          <button className="button-value" onClick="filterProducts('decks')">
            Decks
          </button>
          <button className="button-value" onClick="filterProducts('price')">
            Price
          </button>
          <button className="button-value" onClick="filterProducts('name')">
            whatever
          </button>
        </div>
        <div id="products"></div>
      </div>



      {/* <!-- header --> */}
      <FilterProducts />
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
    </>
  );
};

export default Products;
