import React from 'react';
import { useState } from 'react';

import { Button } from 'react-bootstrap';
import { Fragment } from 'react';
import Edit from './Edit';
import Create from './Create';
import Delete from './Delete';
import Details from './Details';
import 'bootstrap/dist/css/bootstrap.css';
import '../index.css';

var selectionEdit = [];
var selectionCreate = [];
var selectionDelete = [];
var selectionDetails = [];

export default function HomeIndex(props) {
  var idx = props.data[0];
  var id = props.data[1];
  var videoGame = props.data[2];
  var videoGames = props.data[3];
  const [showEdit, setShowEdit] = useState(() => props.data[4]);
  const [showCreate, setShowCreate] = useState(() => props.data[5]);
  const [showDelete, setShowDelete] = useState(() => props.data[6]);
  const [showDetails, setShowDetails] = useState(() => props.data[7]);
  var putData = props.data[8];
  var postData = props.data[9];
  var deleteData = props.data[10];
  // console.log(props);

  var getShowEdit = () => {
    return showEdit;
  };

  var getShowCreate = () => {
    return showCreate;
  };

  var getShowDelete = () => {
    return showDelete;
  };

  var getShowDetails = () => {
    return showDelete;
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
        <thead>
          <tr>
            <th>Title</th>
            <th>Studio Id</th>
            <th>Main Character Id</th>
          </tr>
        </thead>
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
                  <td>
                    <div className="d-flex align-items-center justify-content-center">
                      <Button
                        onClick={(e) => {
                          e.preventDefault();
                          setShowDetails(true);
                          idx = ix;
                          id = item.id;
                          selectionDetails = [
                            idx,
                            id,
                            videoGame,
                            videoGames,
                            setShowDetails,
                            getShowDetails,
                          ];
                        }}
                      >
                        Details
                      </Button>
                    </div>
                  </td>
                  <td>
                    <div className="d-flex align-items-center justify-content-center">
                      <Button
                        onClick={(e) => {
                          e.preventDefault();
                          setShowDelete(true);
                          idx = ix;
                          id = item.id;
                          selectionDelete = [
                            idx,
                            id,
                            videoGame,
                            videoGames,
                            setShowDelete,
                            getShowDelete,
                            deleteData,
                          ];
                        }}
                      >
                        Delete
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
        <Delete show={showDelete} data={selectionDelete} />
        <Details show={showDetails} data={selectionDetails} />
      </div>
    </div>
  );
}
