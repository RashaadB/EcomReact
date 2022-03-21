import React from "react";
import Rsb from "../img/rsb.jpg";
import hero from "../img/halfpipe.jpeg";
import rail from "../img/skate.jpeg";
import boardslide from "../img/boardslide.jpeg";

const Home = () => {
  return (
    <>
      <header
        className="hero__wrap"
        style={{ backgroundImage: `url(${hero})` }}
      >
        <img className="logo_rsb" src={Rsb} alt="logo" />

        <div className="header-content">
          <p>Don't skate without updated accessories.</p>
          <p>Find the right deck for the best price.</p>
        </div>
      </header>

      {/* <!-- percent --> */}
      <section className="percent_">
        <h1 className="percent20">Buy 2 Decks & get the 3rd 20% off</h1>
        <h1 className="percent30">
          Sign up with email & get 30% first purchase
        </h1>
      </section>

      {/* <!-- RSB Skateshop --> */}
      <section>
        <div className="row">
          <div className="column">
            <img className="rail" src={rail} alt="skating_rail" />
          </div>
          <div className="column">
            <h2 className="RSB">RSB SKATESHOP</h2>
            <p className="RSB_para">
              I know what the skaters want. Growing up skating, I would always
              complain about not getting the right graphic on my board, my
              boarding being the wrong size, or how easily it was for my board
              to break. Here at RSB Skate shop, we are obligated to finding the
              skater the right deck, a stable deck. It can be costly having to
              keep buying decks when they are not reliable.
            </p>
          </div>
        </div>
      </section>

      {/* <!-- DECKS --> */}
      <section>
        <div className="row">
          <div className="column">
            <img className="rail" src={boardslide} alt="boardsliding" />
          </div>

          <div className="column">
            <h2 className="Decks">DECKS</h2>
            <p className="deck_para">
              The decks are made from durable seven-layered American Maple wood,
              that are interlaid by water-based glue and put together by high
              pressure. All of the decks are 33" long, with a deck-width of
              8.25". Because concave is one of the most important parts of the
              deck, all of our skateboards are medium concave.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
