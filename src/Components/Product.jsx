//product.jsx
import React from 'react';

const Product = ({ imageUrl, name, gameurl}) => {
  const playGame=()=>{
    window.location = gameurl
    console.log(gameurl)
  }
  return (
    <div>
      {/* <img src={imageUrl} alt={name} /> */}
      <h3>{name}</h3>
     <button style={{marginTop:"10rem"}} onClick={playGame}> <img src={imageUrl} alt={name} /></button>
    </div>
  );
};

export default Product;