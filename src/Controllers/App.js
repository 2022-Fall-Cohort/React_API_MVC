import { useState, useEffect } from 'react';
import HomeIndex from '../Views/HomeIndex';
import VideoGame from '../Models/VideoGame';

export default function App() {
  const requestURI = 'https://localhost:7256/api/VideoGames/';

  var idx = null;
  var id = null;
  var [videoGame, setVideoGame] = useState(() => VideoGame());
  var [videoGames, setVideoGames] = useState(() => []);
  var show = false;

  // GET
  useEffect(() => {
    fetch(requestURI)
      .then((response) => response.json())
      .then((data) => {
        setVideoGames(data);
      });
  }, []);

  // PUT
  var putData = (dataObj, id) => {
    fetch(requestURI + id, {
      method: 'PUT',
      body: JSON.stringify(dataObj),
      headers: { 'Content-type': 'application/json; charset=UTF-8' },
    }).then((response) => {
      if (response.status !== 204) {
        console.log('PUT Failed', response);
        return;
      } else {
        console.log('PUT Succeeded', response);
      }
    });
  };

  // console.log('videoGames is ', videoGames);
  var selection = [
    idx,
    id,
    videoGame,
    setVideoGame,
    videoGames,
    setVideoGames,
    show,
    putData,
  ];

  return <HomeIndex data={selection} />;
}
