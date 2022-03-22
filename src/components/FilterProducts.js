import React from "react";


const FilterProducts = (data) => {
  console.log(data);

  return (
    <>
      <div className="decks">
        {data.data.map((item, key) => (
          <div key={key} className="items">
            <h2>{item.name}</h2>
            <a href="./img/brown.jpeg" target="_blank">
              <img src={item.image} alt="brown" />
            </a>
          </div>

          //   <div key={key}>
          //   <h2>{item.name}</h2>
          // </div>
        ))}
      </div>
    </>
  );
};

export default FilterProducts;
