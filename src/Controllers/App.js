import { useState, useEffect } from 'react';
import HomeIndex from '../Views/HomeIndex';

function AppGet() {
  const requestURI = 'https://localhost:7256/api/VideoGames/';

  var [videoGames, setVideoGames] = useState([]);

  useEffect(() => {
    fetch(requestURI)
      .then((response) => response.json())
      .then((data) => {
        setVideoGames(data);
      });
  }, []);

  return videoGames;
}

export default function App() {
  var videoGames = AppGet();
  return <HomeIndex data={videoGames} />;
}
