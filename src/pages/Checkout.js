import React from "react";
import Main from "../partials/_checkout.scss";

const Checkout = () => {
  return (
    <>
      {/* <!-- Checkout --> */}
      {/* 
      <div className="row">
        <div className="col-75">
          <div className="container">
            <form action="/action_page.php">
              <div className="row">
                <div className="col-50">
                  <h3>Billing Address</h3>
                  <label for="fname">
                    <i className="fa fa-user"></i> Full Name
                  </label>
                  <input
                    type="text"
                    id="fname"
                    name="firstname"
                    placeholder="Rashaad Bracley"
                  />
                  <label for="email">
                    <i className="fa fa-envelope"></i> Email
                  </label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    placeholder="Rsamuel@example.com"
                  />
                  <label for="adr">
                    <i className="fa fa-address-card-o"></i> Address
                  </label>
                  <input
                    type="text"
                    id="adr"
                    name="address"
                    placeholder="542 W. 15th Street"
                  />
                  <label for="city">
                    <i className="fa fa-institution"></i> City
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    placeholder="Fort Mill"
                  />

                  <div className="row">
                    <div className="col-50">
                      <label for="state">State</label>
                      <input
                        type="text"
                        id="state"
                        name="state"
                        placeholder="SC"
                      />
                    </div>
                    <div className="col-50">
                      <label for="zip">Zip</label>
                      <input
                        type="text"
                        id="zip"
                        name="zip"
                        placeholder="29707"
                      />
                    </div>
                  </div>
                </div>

                <div className="col-50">
                  <h3>Payment</h3>
                  <label for="fname">Accepted Cards</label>
                  <div className="icon-container">
                    <i className="fa fa-cc-visa"></i>
                    <i className="fa fa-cc-amex"></i>
                    <i className="fa fa-cc-mastercard"></i>
                    <i className="fa fa-cc-discover"></i>
                  </div>
                  <label for="cname">Name on Card</label>
                  <input
                    type="text"
                    id="cname"
                    name="cardname"
                    placeholder="Rashaad S. Bracley"
                  />
                  <label for="ccnum">Credit card number</label>
                  <input
                    type="text"
                    id="ccnum"
                    name="cardnumber"
                    placeholder="336-867-5309"
                  />
                  <label for="expmonth">Exp Month</label>
                  <input
                    type="text"
                    id="expmonth"
                    name="expmonth"
                    placeholder="September"
                  />
                  <div className="row">
                    <div className="col-50">
                      <label for="expyear">Exp Year</label>
                      <input
                        type="text"
                        id="expyear"
                        name="expyear"
                        placeholder="2050"
                      />
                    </div>
                    <div className="col-50">
                      <label for="cvv">CVV</label>
                      <input
                        type="text"
                        id="cvv"
                        name="cvv"
                        placeholder="352"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <label>
                <input type="checkbox" checked="checked" name="sameadr" />
                Shipping address same as billing
              </label>
              <input
                type="submit"
                value="Continue to checkout"
                className="btn"
              />
            </form>
          </div>
        </div>

        {/* <!-- Cart --> 

        <div className="col-25">
          <div className="container">
            <h4>
              Cart
              <span className="price">
                <i className="fa fa-shopping-cart"></i> <b>4</b>
              </span>
            </h4>
            <p>
              <a href="./img/sad_girl.jpeg" target="_blank">
                The Sad Girl
              </a>
              <span className="price">$60</span>
            </p>
            <p>
              <a href="./img/mint_green.jpeg" target="_blank">
                The Minty Girl
              </a>
              <span className="price">$60</span>
            </p>
            <p>
              <a href="./img/grass_pin.jpeg" target="_blank">
                The Gass Pointe{" "}
              </a>
              <span className="price">$60</span>
            </p>
            <p>
              <a href="./img/carolina_blu.jpeg" target="_blank">
                The Carolina Girl
              </a>
              <span className="price">$60</span>
            </p>
            <hr />
            <p>
              Total{" "}
              <span className="price">
                <b>$240</b>
              </span>
            </p>
          </div>
        </div>
      </div> */}

      <div class="row">
        <div class="col-75">
          <div class="container">
            <form action="/action_page.php">
              <div class="row">
                <div class="col-50">
                  <h3>Billing Address</h3>
                  <label for="fname">
                    <i class="fa fa-user"></i> Full Name
                  </label>
                  <input
                    type="text"
                    id="fname"
                    name="firstname"
                    placeholder="Rashaad Bracley"
                  />
                  <label for="email">
                    <i class="fa fa-envelope"></i> Email
                  </label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    placeholder="Rsamuel@example.com"
                  />
                  <label for="adr">
                    <i class="fa fa-address-card-o"></i> Address
                  </label>
                  <input
                    type="text"
                    id="adr"
                    name="address"
                    placeholder="542 W. 15th Street"
                  />
                  <label for="city">
                    <i class="fa fa-institution"></i> City
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    placeholder="Fort Mill"
                  />

                  <div class="row">
                    <div class="col-50">
                      <label for="state">State</label>
                      <input
                        type="text"
                        id="state"
                        name="state"
                        placeholder="SC"
                      />
                    </div>
                    <div class="col-50">
                      <label for="zip">Zip</label>
                      <input
                        type="text"
                        id="zip"
                        name="zip"
                        placeholder="29707"
                      />
                    </div>
                  </div>
                </div>

                <div class="col-50">
                  <h3>Payment</h3>
                  <label for="fname">Accepted Cards</label>
                  <div class="icon-container">
                    <i class="fa fa-cc-visa" style={{ color: "navy blue" }}></i>
                    <i class="fa fa-cc-amex" style={{ color: "blue" }}></i>
                    <i class="fa fa-cc-mastercard" style={{ color: "red" }}></i>
                    <i
                      class="fa fa-cc-discover"
                      style={{ color: "orange" }}
                    ></i>
                  </div>
                  <label for="cname">Name on Card</label>
                  <input
                    type="text"
                    id="cname"
                    name="cardname"
                    placeholder="Rashaad S. Bracley"
                  />
                  <label for="ccnum">Credit card number</label>
                  <input
                    type="text"
                    id="ccnum"
                    name="cardnumber"
                    placeholder="336-867-5309"
                  />
                  <label for="expmonth">Exp Month</label>
                  <input
                    type="text"
                    id="expmonth"
                    name="expmonth"
                    placeholder="September"
                  />
                  <div class="row">
                    <div class="col-50">
                      <label for="expyear">Exp Year</label>
                      <input
                        type="text"
                        id="expyear"
                        name="expyear"
                        placeholder="2050"
                      />
                    </div>
                    <div class="col-50">
                      <label for="cvv">CVV</label>
                      <input
                        type="text"
                        id="cvv"
                        name="cvv"
                        placeholder="352"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <label>
                <input type="checkbox" checked="checked" name="sameadr" />
                Shipping address same as billing
              </label>
              <input type="submit" value="Continue to checkout" class="btn" />
            </form>
          </div>
        </div>

        {/* <!-- Cart --> */}
        <div class="col-25">
          <div class="container">
            <h4>
              Cart
              <span class="price" style={{ color: "black" }}>
                <i class="fa fa-shopping-cart"></i> <b>4</b>
              </span>
            </h4>
            <p>
              <a href="./img/sad_girl.jpeg" target="_blank">
                The Sad Girl
              </a>
              <span class="price">$60</span>
            </p>
            <p>
              <a href="./img/mint_green.jpeg" target="_blank">
                The Minty Girl
              </a>
              <span class="price">$60</span>
            </p>
            <p>
              <a href="./img/grass_pin.jpeg" target="_blank">
                The Gass Pointe{" "}
              </a>
              <span class="price">$60</span>
            </p>
            <p>
              <a href="./img/carolina_blu.jpeg" target="_blank">
                The Carolina Girl
              </a>
              <span class="price">$60</span>
            </p>
            <hr />
            <p>
              Total{" "}
              <span class="price" style={{ color: "black" }}>
                <b>$240</b>
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
