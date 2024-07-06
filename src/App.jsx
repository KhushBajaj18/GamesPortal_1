import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import Popular from './Components/Popular';
import Premium from './Components/Premium';
import BottomNavigation from "./Components/BottomNavigation";

export default function App() {
  return (
    <div className="App overflow-x-hidden">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/popular" element={<Popular />} />
          <Route path="/premium" element={<Premium />} />
        </Routes>
        <BottomNavigation />
      </Router>
    </div>
  );
}
