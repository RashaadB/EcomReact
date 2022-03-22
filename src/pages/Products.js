import React from "react";

import mainProducts from "../partials/_products.scss"
import FilterProducts from "../components/FilterProducts"


const Products = () => {
  return (
    <>
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
      <div className="decks">
        <div className="items">
          <h2>The Niels</h2>
          <a href="./img/brown.jpeg" target="_blank">
            <img src="../img/brown.jpeg" alt="brown" />
          </a>
        </div>

        <div className="items">
          <h2>The Sad Girl</h2>
          <a href="./img/sad_girl.jpeg" target="_blank">
            <img src="./img/sad_girl.jpeg" alt="SAD GIRL" />
          </a>
        </div>

        <div className="items">
          <h2>The Niels Retro</h2>
          <a href="./img/nine_three.jpeg" target="_blank">
            <img src="./img/nine_three.jpeg" alt="three_nine" />
          </a>
        </div>

        <div className="items">
          <h2>The Minty Girl</h2>
          <a href="./img/mint_green.jpeg" target="_blank">
            <img src="./img/mint_green.jpeg" alt="mint green" />
          </a>
        </div>

        <div className="items">
          <h2>The Mango Girl</h2>
          <a href="./img/girl_bluOrange.jpeg" target="_blank">
            <img src="./img/girl_bluOrange.jpeg" alt="blue_orange" />
          </a>
        </div>

        <div className="items">
          <h2>The Gass Pointe</h2>
          <a href="./img/grass_pin.jpeg" target="_blank">
            <img src="./img/grass_pin.jpeg" alt="grass" />
          </a>
        </div>

        <div className="items">
          <h2>The Open Book</h2>
          <a href="./img/book.jpeg" target="_blank">
            <img src="./img/book.jpeg" alt="book" />
          </a>
        </div>

        <div className="items">
          <h2>The Rise Up</h2>
          <a href="./img/blm.jpeg" target="_blank">
            <img src="./img/blm.jpeg" alt="rise up" />
          </a>
        </div>

        <div className="items">
          <h2>Chocolate Mint</h2>
          <a href="./img/coco.jpeg" target="_blank">
            <img src="./img/coco.jpeg" alt="chocolate" />
          </a>
        </div>

        <div className="items">
          <h2>The Niels Retro Black</h2>
          <a href="./img/nine_three_black.jpeg" target="_blank">
            <img src="./img/nine_three_black.jpeg" alt="retro" />
          </a>
        </div>

        <div className="items">
          <h2>The Carolina Girl</h2>
          <a href="./img/carolina_blu.jpeg" target="_blank">
            <img src="./img/carolina_blu.jpeg" alt="carolina girl" />
          </a>
        </div>

        <div className="items">
          <h2>The Tangerine</h2>
          <a href="./img/orange.jpeg" target="_blank">
            <img src="./img/orange.jpeg" alt="tangerine" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Products;
