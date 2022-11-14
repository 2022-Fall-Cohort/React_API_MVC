import React from 'react';
import { useState } from 'react';

import { Button } from 'react-bootstrap';
import { Fragment } from 'react';
import Edit from './Edit';
import 'bootstrap/dist/css/bootstrap.css';

var selection = [];

export default function HomeIndex(props) {
  var idx = props.data[0];
  var id = props.data[1];
  var videoGame = props.data[2];
  var setVideoGame = props.data[3];
  var videoGames = props.data[4];
  var setVideoGames = props.data[5];
  const [show, setShow] = useState(props.data[6]);
  var putData = props.data[7];
  // console.log(props);

  return (
    <div>
      <table>
        <tbody>
          {videoGames.map((item, ix) => {
            // console.log(item, ix);
            return (
              <Fragment key={item.id}>
                <tr>
                  <td>{item.title}</td>
                  <td>{item.studioId}</td>
                  <td>{item.mainCharacterId}</td>
                  <td>
                    <div className="d-flex align-items-center justify-content-center">
                      <Button
                        onClick={(e) => {
                          e.preventDefault();
                          setShow(true);
                          idx = ix;
                          id = item.id;
                          selection = [
                            idx,
                            id,
                            videoGame,
                            setVideoGame,
                            videoGames,
                            setVideoGames,
                            setShow,
                            (show) => {
                              return show;
                            },
                            putData,
                          ];
                          // console.log(selection);
                        }}
                      >
                        Edit
                      </Button>
                    </div>
                  </td>
                </tr>
              </Fragment>
            );
          })}
        </tbody>
      </table>
      <div>
        <Edit show={show} data={selection} />
      </div>
    </div>
  );
}
