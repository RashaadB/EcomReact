import React, { Component } from "react";
import axios from "axios";


const api = axios.create({
  baseURL: `http://localhost:3001/getpost/`,
});

class FilterProducts extends Component {
  
 

  constructor(props) {
    super(props);
    api.get("/getpost/").then((res) => {
      console.log(res.data);
      this.setState({ products: res.data });
     
    });
  }
  
  render() {
    return (
      <>
        {this.state.products.filter().map((decks) => (
          <h2 key={decks.id}>{decks.deck_name}</h2>
        ))}
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

//   return (
//     <>
//       {/* <div className="decks" />
//         {data.data.filter().map((item, key) => (
//           <div key={key} className="items" >
//             <h2>{item.name}</h2>
//             <a href="./img/brown.jpeg" target="_blank">
//               <img src={item.image} alt="brown" />
//             </a>
//           </div>
//         ))}
//         ; */}
//     </>
//   );
// };

export default FilterProducts;
