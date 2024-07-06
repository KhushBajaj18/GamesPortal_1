import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Product from './Product';
import BottomNavigation from './BottomNavigation';
import NavigationBar from './NavigationBar';

function Premium() {
  const [gameData, setGameData] = useState([]);

  const endpoint = 'https://mv1.in/ContentManager2/v1/fetchCategories?categoryId=10002241&pageNo=1';
  const headers = {
    appid: '263',
    profilerid: '263',
    Access_token: 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI2MjgxMzE3MjkyMDQxIiwiZXhwIjoxNzAzMTYzNjMxLCJpYXQiOjE3MDA1NzE2MzF9.OL1IPaWxLdTmqBPiVjLhr99nquUolad9V1C-ECeaFM1hWo2SXKY_ZAwin2cqUcRB5lhVC7TK_S5ZaMv9uunqvw',
    channel: 'wap',
    Msisdn: '6281317292041',
    deviceId: 'SYS',
    operator: 'Telcomcel',
  };



  useEffect(() => {
    async function heroGame(){
      const response= await axios.get(endpoint, { headers })
    const result= await response.data
    console.log(result)
    setGameData(result.data.categories[0].subCategories[0].content3)


    }
    heroGame()
  }, []); 



  return (
    <div className="App">
      <NavigationBar />

      {/* Carousel for Products */}
        <div className='flex flex-wrap gap-7'>{gameData.map((game) => (
          <Product key={game.id} name={game.title} gameurl={game.gameurl} imageUrl={game.previewImageUrl} />
        ))}</div> 
      

  

      <BottomNavigation />
    </div>
  );
}

export default Premium