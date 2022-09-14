import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from "./view/landingpage/Home"
import Youtube from "./view/youtube/YoutubeMain"


function App() {

  const fetchData = () => {

    const url = "https://youtube.googleapis.com/youtube/v3/channels?part=statistics&id=UC_x5XG1OV2P6uZZ5FSM9Ttw&key=AIzaSyAjEM5r3PKbvad-Zy0QlVEqIWk8WDiPByI"
    fetch(url)
    .then((data) => data.json())
    .then((result) => {
       console.log(result)
    })
  }
  
  const API_KEY = "AIzaSyAjEM5r3PKbvad-Zy0QlVEqIWk8WDiPByI"

  useEffect(() => {
    fetchData()
  }, []);
  return (
    <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/youtube" element={<Youtube />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
