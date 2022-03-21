import React from "react";
import rsbLogo from "../img/rsb.jpg";


const Navbar = () => {
  return (
    <>
      <nav>
        <img className="nav_img" src={rsbLogo} alt="logo" />
        {/* <NavLink exact={true} to="/"></NavLink> */}
        <a href="/">HOME</a>
        <a href="/products">DECKS</a>
        <a href="/checkout">CHECKOUT</a>
      </nav>
    </>
  );
};

export default Navbar;
