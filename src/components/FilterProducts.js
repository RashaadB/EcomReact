import React from "react";


const FilterProducts = (data) => {
  console.log(data);

  
    const updateProducts = () => {
      return data.reverse();
    };

  return (
    <>
      <div className="decks">
        {data.data.filter().map((item, key) => (
          <div key={key} className="items">
            <h2>{item.name}</h2>
            <a href="./img/brown.jpeg" target="_blank">
              <img src={item.image} alt="brown" />
            </a>
          </div>

         
        ))}
      </div>
    </>
  );
};

export default FilterProducts;
