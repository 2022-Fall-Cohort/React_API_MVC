import React from 'react';

import { useState, useEffect } from 'react';
import HomeIndex from '../Views/HomeIndex';

export default function App() {
  const requestURI = 'https://localhost:7256/api/VideoGames';

  var [videoGames, setVideoGames] = useState(() => []);

  useEffect(() => {
    fetch(requestURI)
      .then((response) => response.json())
      .then((data) => {
        setVideoGames(data);
      });
  }, []);

  // console.log('videoGames is ', videoGames);
  var selection = [null, null, videoGames, false];

  return <HomeIndex data={selection} />;
}
