//product.jsx
import React from 'react';

const Product = ({ imageUrl, name, gameurl}) => {
  const playGame=()=>{
    window.location = gameurl
    console.log(gameurl)
  }
  return (
    <div className='w-96 bg-slate-800 '>
      {/* <img src={imageUrl} alt={name} /> */}
     <button className='mt-5' onClick={playGame}> <img src={imageUrl} alt={name} /></button>
     <h3 className='text-white text-2xl font-bold mt-4 mb-8'>{name}</h3>
    </div>
  );
};

export default Product;