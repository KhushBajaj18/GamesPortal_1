import React from 'react';
import { Link } from 'react-router-dom';
import './BottomNavigation.css';


function BottomNavigation() {
  return (
    <div className="bottom-navigation bg-slate-800">
      
      <button className="nav-button"><Link to="/">🏠 <br /> Home</Link> </button>
      <button className="nav-button"><Link to="/premium">🎮 <br /> Premium Games</Link></button>
      <button className="nav-button"><Link to="/popular">🌟 <br /> Popular Games</Link></button>
      <button className="nav-button">📤 <br /> Share</button>
    </div>
  );
}

export default BottomNavigation;
