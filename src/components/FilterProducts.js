import React from "react";
// const api = axios.create({
//   baseURL: `http://localhost:3001`,
// });

class FilterProducts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      error: null,
    };
  }
  //react lifestyle fetching api take response turn into json
  componentDidMount() {
    fetch("https://exquisite-faloodeh-ab6fc2.netlify.app/products/getpost", {
      mode: "cors",
      credentials: "true",
    })
      .then((res) => res.json())
      .then(
        (data) => {
          this.setState({
            products: data,
          });
        },
        (error) => {
          this.setState({
            error,
          });
        }
      );
  }

  render() {
    const { products } = this.state;
    return (
      <>
        {products.map((item, key) => (
          <div className="searchBtn">
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
              <button
                className="button-value"
                onClick="filterProducts('decks')"
              >
                Decks
              </button>
              <button
                className="button-value"
                onClick="filterProducts('price')"
              >
                Price
              </button>
              <button className="button-value" onClick="filterProducts('name')">
                whatever
              </button>
            </div>
            <div id="products"></div>
          </div>
        ))}

        <div className="decks">
          {products.map((item, key) => (
            <div key={key} className="items" style={{ paddingTop: "50px" }}>
              <h2>{item.deck_name}</h2>
              <a href="./img/brown.jpeg" target="_blank">
                <img src={item.deck_image} alt="brown" />
              </a>
              <h2 style={{ paddingTop: "10px" }}>
                {item.deck_spec}: {item.deck_size}
              </h2>
              <h2 style={{ paddingTop: "10px" }}>${item.deck_price}</h2>
            </div>
          ))}
          ;
        </div>
      </>
    );
  }
}

// const FilterProducts = () => {
//   return (
//     <>
//       {this.state.decks.map((decks) => (
//         <h2 key={decks.id}>{decks.deck_name}</h2>
//       ))}
//     </>
//   );
// };

// const FilterProducts = (data) => {
//   console.log(data);

//   // const updateProducts = () => {
//   //   return data.reverse();
//   // };

// return (
//   <>
//     <div className="decks" />
//       {data.data.filter().map((item, key) => (
//         <div key={key} className="items" >
//           <h2>{item.name}</h2>
//           <a href="./img/brown.jpeg" target="_blank">
//             <img src={item.image} alt="brown" />
//           </a>
//         </div>
//       ))}
//       ;
//   </>
// );
// };

export default FilterProducts;
