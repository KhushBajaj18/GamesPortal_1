import React from 'react';
import { Link } from 'react-router-dom';
import './BottomNavigation.css';


function BottomNavigation() {
  return (
    <div className="bottom-navigation">
      
      <button className="nav-button"><Link to="/">🏠 Home</Link> </button>
      <button className="nav-button"><Link to="/premium">🎮 Premium Games</Link></button>
      <button className="nav-button"><Link to="/popular">🌟 Popular Games</Link></button>
      <button className="nav-button">
        📤 Share
      </button>
    </div>
  );
}

export default BottomNavigation;
