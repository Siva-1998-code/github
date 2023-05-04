import React from 'react';
import './index.css';
import AboutUs from './New folder/AboutUs'
import AppBar from './New folder/AppBar'
import Catagory from './New folder/Catagory'
import Gamecards1 from './New folder/Gamecards1'
import Home from './New folder/Home'
import LatestGames from './New folder/LatestGames'
import { Routes , Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <AppBar />
      <AboutUs />
      <Catagory />
      <Gamecards1 />
      <Home />
      <LatestGames />
    </div>
  );
}

export default App;
