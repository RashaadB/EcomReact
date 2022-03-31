import React from "react";
// import data from "../products.json";

import FilterProducts from "../components/FilterProducts";

// const button = document.querySelectorAll("[data-carousel-button")

// button.forEach(buttons => {
//   button.addEventListener("click",()=>{
//     const offset = button.dataset.carouselButton === "next" ? 1 : -1
//     const slides = button.closest("[data-carousel]").querySelector("[data-slides]")

//     const activeSlide = slides.querySelector("[data-active]")
//     let newIndex = [...slides.children].indexOf(activeSlide) + offset
//     if (newIndex < 0)  newIndex = slides.children.length - 1
//     if (newIndex >= slides.children.length ) newIndex = 0

//     slides.children[newIndex].dataset.active = true
//     delete activeSlide.dataset.active
//   })
// })

const Products = () => {
  return (
    <>
      <header>
        <div className="hero">
          <div className="hero-img">
            <img src="../img/girl.jpeg.crdownload" alt="img1" />
            <h1>Don't Skate Alone.</h1>
          </div>

          <div className="hero-img">
            <img src="../img/pink.jpeg" alt="img2" />
            <h1>Skate witch-yo.</h1>
          </div>

          <div className="hero-img">
            <img src="../img/skate_team.jpeg" alt="img3" />
            <h1>GIRL.</h1>
          </div>
        </div>
      </header>
      {/* search bar */}

      <div className="searchBtn">
        <div id="search-container">
          <input
            type="search"
            id="search-input"
            placeholder="Search deck  description here.."
          />
          <button id="search">Search</button>
        </div>
        <div id="buttons">
          <button className="button-value" onClick="filterProducts('all')">
            All
          </button>
          <button className="button-value" onClick="filterProducts('decks')">
            Pro
          </button>
          <button className="button-value" onClick="filterProducts('price')">
            Standard
          </button>
          <button className="button-value" onClick="filterProducts('name')">
            Price
          </button>
        </div>
        <div id="products"></div>
      </div>

      {/* <!-- header --> */}

      {/* <!-- items --> */}

      <h1 className="price">| Click on Deck |</h1>
      <FilterProducts />
    </>
  );
};

export default Products;
