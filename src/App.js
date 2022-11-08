import React, { useState, useEffect } from 'react';
import './App.css';
const { v4: uuidv4 } = require('uuid');

function AppGet() {
  var requestURI = 'https://localhost:7256/api/VideoGames';

  const [videoGames, setVideoGames] = useState([]);

  useEffect(() => {
    fetch(requestURI)
      .then((response) => response.json())
      .then((json) => {
        setVideoGames(json);
        // console.log(json);
        return json;
      });
  }, [requestURI]);

  // console.log(videoGames);

  return videoGames;
}

function KeyGen() {
  var key = "'" + uuidv4() + "'";
  // console.log(key);
  return key;
}

export default function App() {
  var videoGames = AppGet();

  return videoGames.map((element) => {
    return (
      <ul key={KeyGen()}>
        <li>
          <h2>Title: {element.title}</h2>
        </li>
        <li>StudioId: {element.studioId}</li>
        <li>MainCharacterId: {element.mainCharacterId}</li>
      </ul>
    );
  });
}
