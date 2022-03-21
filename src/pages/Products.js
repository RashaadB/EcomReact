import React from "react";
import heroImg1 from "../img/girl.jpeg.crdownload";
import heroImg2 from "../img/pink.jpeg";
import heroImg3 from "../img/skate_team.jpeg";
import brown from "../img/brown.jpeg";
import sadGirl from "../img/sad_girl.jpeg";
import threeNine from "../img/nine_three.jpeg";
import mintGreen from "../img/mint_green.jpeg";
import blueOrange from "../img/girl_bluOrange.jpeg";
import grass from "../img/grass_pin.jpeg";
import book from "../img/book.jpeg";
import rise from "../img/blm.jpeg";
import chocolate from "../img/coco.jpeg";
import retro from "../img/nine_three_black.jpeg";
import carolinaGirl from "../img/carolina_blu.jpeg";
import tangerine from "../img/orange.jpeg";
import mainProducts from "../partials/_products.scss"

const Products = () => {
  return (
    <>
      {/* <!-- header --> */}

      <header>
        <div className="hero">
          <div className="hero-img">
            <img src={heroImg1} alt="" />
            <h1>Don't Skate Alone.</h1>
          </div>
          <div className="hero-img">
            <img src={heroImg2} alt="" />
            <h1>Skate witch-yo.</h1>
          </div>
          <div className="hero-img">
            <img src={heroImg3} alt="" />
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
            <img src={brown} alt="brown" />
          </a>
        </div>

        <div className="items">
          <h2>The Sad Girl</h2>
          <a href="./img/sad_girl.jpeg" target="_blank">
            <img src={sadGirl} alt="SAD GIRL" />
          </a>
        </div>

        <div className="items">
          <h2>The Niels Retro</h2>
          <a href="./img/nine_three.jpeg" target="_blank">
            <img src={threeNine} alt="three_nine" />
          </a>
        </div>

        <div className="items">
          <h2>The Minty Girl</h2>
          <a href="./img/mint_green.jpeg" target="_blank">
            <img src={mintGreen} alt="mint green" />
          </a>
        </div>

        <div className="items">
          <h2>The Mango Girl</h2>
          <a href="./img/girl_bluOrange.jpeg" target="_blank">
            <img src={blueOrange} alt="blue_orange" />
          </a>
        </div>

        <div className="items">
          <h2>The Gass Pointe</h2>
          <a href="./img/grass_pin.jpeg" target="_blank">
            <img src={grass} alt="grass" />
          </a>
        </div>

        <div className="items">
          <h2>The Open Book</h2>
          <a href="./img/book.jpeg" target="_blank">
            <img src={book} alt="book" />
          </a>
        </div>

        <div className="items">
          <h2>The Rise Up</h2>
          <a href="./img/blm.jpeg" target="_blank">
            <img src={rise} alt="rise up" />
          </a>
        </div>

        <div className="items">
          <h2>Chocolate Mint</h2>
          <a href="./img/coco.jpeg" target="_blank">
            <img src={chocolate} alt="chocolate" />
          </a>
        </div>

        <div className="items">
          <h2>The Niels Retro Black</h2>
          <a href="./img/nine_three_black.jpeg" target="_blank">
            <img src={retro} alt="retro" />
          </a>
        </div>

        <div className="items">
          <h2>The Carolina Girl</h2>
          <a href="./img/carolina_blu.jpeg" target="_blank">
            <img src={carolinaGirl} alt="carolina girl" />
          </a>
        </div>

        <div className="items">
          <h2>The Tangerine</h2>
          <a href="./img/orange.jpeg" target="_blank">
            <img src={tangerine} alt="tangerine" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Products;
