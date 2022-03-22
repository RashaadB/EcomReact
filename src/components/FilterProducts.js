import React from "react";
import Data from "../products.json"
import Products from '../pages/Products'
import mainProducts from "../partials/_products.scss"

const FilterProducts = () => {
  return (
    <>
       {Data.map((item)=>(
  <Products />
      ))}; 
    


      
    </>
    
  );
};

export default FilterProducts;