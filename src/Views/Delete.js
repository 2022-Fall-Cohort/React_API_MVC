import React from 'react';

import { Modal, Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

// eslint-disable-next-line no-unused-vars
var title = null;
// eslint-disable-next-line no-unused-vars
var studioId = 0;
// eslint-disable-next-line no-unused-vars
var mainCharacterId = 0;

var idx = null;
// eslint-disable-next-line no-unused-vars
var id = null;
// eslint-disable-next-line
var videoGame = {};
var videoGames = [];
var setShowDelete = null;
var getShowDelete = null;
var deleteData = null;

const DeleteForm = ({ onSubmit }) => {
  return (
    <Form onSubmit={onSubmit}>
      <Form.Group controlId="formBasicTitle">
        <Form.Label>Video Title</Form.Label>
        <Form.Control
          autoComplete="title"
          type="text"
          placeholder={videoGames[idx].title}
          defaultValue={videoGames[idx].title}
          readOnly={true}
        />
      </Form.Group>

      <Form.Group controlId="studioId">
        <Form.Label>Studio Id</Form.Label>
        <Form.Control
          autoComplete="studioId"
          type="text"
          placeholder={videoGames[idx].studioId}
          defaultValue={videoGames[idx].studioId}
          readOnly={true}
        />
      </Form.Group>

      <Form.Group controlId="mainCharacterId">
        <Form.Label>Main Character Id</Form.Label>
        <Form.Control
          autoComplete="mainCharacterId"
          type="text"
          placeholder={videoGames[idx].mainCharacterId}
          defaultValue={videoGames[idx].mainCharacterId}
          readOnly={true}
        />
      </Form.Group>

      <Button variant="primary" type="submit" block="true">
        Delete
      </Button>
    </Form>
  );
};

function DeleteFormSubmit(e) {
  e.preventDefault();
  setShowDelete(false);

  deleteData(videoGames[idx], id);

  // console.log(videoGame, videoGames);

  title = null;
  studioId = 0;
  mainCharacterId = 0;

  return;
}

export default function Delete(props) {
  if (!props.show) {
    return null;
  }

  idx = props.data[0];
  id = props.data[1];
  videoGame = props.data[2];
  videoGames = props.data[3];
  setShowDelete = props.data[4];
  getShowDelete = props.data[5];
  deleteData = props.data[6];

  // console.log(props, getShowDelete());

  var handleClose = () => {
    setShowDelete(false);
    return;
  };

  return (
    <div>
      <Modal id="DeleteModal" show={getShowDelete} onClose={handleClose}>
        <Modal.Header>
          <Modal.Title>Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <DeleteForm onSubmit={DeleteFormSubmit} />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
