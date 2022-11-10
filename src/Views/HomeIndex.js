import React from 'react';

export default function HomeIndex(props) {
  const videoGames = props.data;
  console.log(videoGames);
  return (
    <div>
      <table>
        {videoGames.map((item) => {
          return (
            <tbody key={item.id}>
              <tr>
                <td>{item.title}</td>
                <td>{item.studioId}</td>
                <td>{item.mainCharacterId}</td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
}
