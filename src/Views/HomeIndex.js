import React from 'react';
import { useState } from 'react';

import { Button } from 'react-bootstrap';
import { Fragment } from 'react';
import Edit from './Edit';
import Create from './Create';
import 'bootstrap/dist/css/bootstrap.css';

var selectionEdit = [];
var selectionCreate = [];

export default function HomeIndex(props) {
  var idx = props.data[0];
  var id = props.data[1];
  var videoGame = props.data[2];
  var videoGames = props.data[3];
  const [showEdit, setShowEdit] = useState(() => props.data[4]);
  const [showCreate, setShowCreate] = useState(() => props.data[5]);
  var putData = props.data[6];
  var postData = props.data[7];
  // console.log(props);

  var getShowEdit = () => {
    return showEdit;
  };

  var getShowCreate = () => {
    return showCreate;
  };

  // console.log(videoGames);

  return (
    <div>
      <div className="d-flex align-items-center justify-content-left">
        <Button
          onClick={(e) => {
            e.preventDefault();
            setShowCreate(true);
            selectionCreate = [
              videoGame,
              videoGames,
              setShowCreate,
              getShowCreate,
              postData,
            ];
            // console.log(selectionCreate);
          }}
        >
          <h5>Create</h5>
        </Button>
      </div>

      <table>
        <tbody>
          {videoGames.map((item, ix) => {
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
                          setShowEdit(true);
                          idx = ix;
                          id = item.id;
                          selectionEdit = [
                            idx,
                            id,
                            videoGame,
                            videoGames,
                            setShowEdit,
                            getShowEdit,
                            putData,
                          ];
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
        <Edit show={showEdit} data={selectionEdit} />
        <Create show={showCreate} data={selectionCreate} />
      </div>
    </div>
  );
}
