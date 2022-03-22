import React from "react";
import Data from "../products.json"


const FilterProducts = () => {
  return (
    <>
    
      {Data.map((item)=>(
        
          <div className="items">
            <h2>{item.name}</h2>
            <a>{item.deck}</ a>
            <a> href={item.size} </a>
            <p>{item.price}</p>
          </div>
          
      ))};
      
    </>
    
  );
};

export default FilterProducts;