import React from "react";



const Navbar = () => {
  return (
    <>
      <nav>
        <img className="nav_img" src="../img/rsb.jpg" alt="logo" />
        {/* <NavLink exact={true} to="/"></NavLink> */}
        <a href="/">HOME</a>
        <a href="/products">DECKS</a>
        <a href="/checkout">CHECKOUT</a>
      </nav>
    </>
  );
};

export default Navbar;
