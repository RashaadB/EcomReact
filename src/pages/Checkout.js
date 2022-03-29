import React from "react";
import { userSchema } from "../Validations/userValidation";

const createUser = async (event) => {
  event.preventDefault();
  let formData = {
    name: event.target[0].value,
    email: event.target[1].value,
  };
  const isValid = await userSchema.isValid(formData);
  console.log(isValid);
};

const Checkout = () => {
  return (
    <>
      {/* <!-- Checkout --> */}

      <div className="rowCheckout">
        <div className="col-75">
          <div className="container">
            <form action="/action_page.php" onSubmit={createUser}>
              <div className="rowCheckout">
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

                  <div className="rowCheckout">
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
                    <i
                      className="fa fa-cc-visa"
                      style={{ color: "navy blue" }}
                    ></i>
                    <i className="fa fa-cc-amex" style={{ color: "blue" }}></i>
                    <i
                      className="fa fa-cc-mastercard"
                      style={{ color: "red" }}
                    ></i>
                    <i
                      className="fa fa-cc-discover"
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
                  <div className="rowCheckout">
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

        {/* <!-- Cart --> */}
        <div className="col-25">
          <div className="container">
            <h4>
              Cart
              <span className="price" style={{ color: "black" }}>
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
              <span className="price" style={{ color: "black" }}>
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
