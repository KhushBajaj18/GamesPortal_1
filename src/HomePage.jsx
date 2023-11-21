import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Product from './Components/Product';
import Middle from './Components/Middle';
import End from './Components/End';
import BottomNavigation from './Components/BottomNavigation';
import NavigationBar from './Components/NavigationBar';


import './App.css';
import { responsive } from './Components/data'; 

function HomePage() {
  const [gameData, setGameData] = useState([]);
  const [gameDataMiddle, setGameDataMiddle] = useState([]);
  const [gameDataEnd, setGameDataEnd] = useState([]);
  const [gameDataEndLast, setGameDataEndLast] = useState([]);

  const endpoint = 'https://mv1.in/ContentManager2/v1/fetchHomePage';
  const headers = {
    appid: '263',
    profilerid: '263',
    Access_token: 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI2MjgxMzE3MjkyMDQxIiwiZXhwIjoxNzAyNzk0NzAyLCJpYXQiOjE3MDAyMDI3MDJ9.i9vxznCujZ2K38xZDhoa50PRNv5Np3hoIF5ydzkBxqyPAF6N0lS1a08kpImKVRprToJE6fJGU1sLETVr9Tdgyg',
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
    setGameData(result.data.categories[0].banners)


    setGameDataMiddle(result.data.categories[0].subCategories[0].content3)
    setGameDataEnd(result.data.categories[0].subCategories[1].content3)
    setGameDataEndLast(result.data.categories[0].subCategories[2].content3)
    }
    heroGame()
  }, []); 

  return (
    <div className="App">
      <NavigationBar />

      {/* Carousel for Products */}
      <Carousel showDots={false} responsive={responsive}>
        {gameData.map((game) => (
          <Product key={game.id} name={game.bannerImageTitle} gameurl={game.gameurl} imageUrl={game.imageUrl} />
        ))}
      </Carousel>

      <Carousel showDots={false} responsive={responsive}>
        {gameDataMiddle.map((game) => (
           <Product key={game.id} name={game.title} gameurl={game.gameurl} imageUrl={game.previewImageUrl} />
        ))}
      </Carousel>

      {/* Carousel for End Section */}
      <Carousel showDots={false} responsive={responsive}>
        {gameDataEnd.map((game) => (
          <Product key={game.id} name={game.title} gameurl={game.gameurl} imageUrl={game.previewImageUrl} />
        ))}
      </Carousel>

      <Carousel showDots={false} responsive={responsive}>
        {gameDataEndLast.map((game) => (
          <Product key={game.id} name={game.title} gameurl={game.gameurl} imageUrl={game.previewImageUrl} />
        ))}
      </Carousel>

      <BottomNavigation />
    </div>
  );
}

export default HomePage;