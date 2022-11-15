import React from 'react';

import { Modal, Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

var title = null;
var studioId = 0;
var mainCharacterId = 0;

var videoGame = {};
// eslint-disable-next-line no-unused-vars
var videoGames = [];
var setShowCreate = null;
var getShowCreate = null;
var postData = null;

const CreateForm = ({ onSubmit }) => {
  return (
    <Form onSubmit={onSubmit}>
      <Form.Group controlId="formBasicTitle">
        <Form.Label>Video Title</Form.Label>
        <Form.Control
          autoComplete="title"
          type="text"
          placeholder=""
          defaultValue=""
          onChange={(e) => (title = e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="studioId">
        <Form.Label>Studio Id</Form.Label>
        <Form.Control
          autoComplete="studioId"
          type="text"
          placeholder=""
          defaultValue="0"
          onChange={(e) => (studioId = e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="mainCharacterId">
        <Form.Label>Main Character Id</Form.Label>
        <Form.Control
          autoComplete="mainCharacterId"
          type="text"
          placeholder=""
          defaultValue="0"
          onChange={(e) => (mainCharacterId = e.target.value)}
        />
      </Form.Group>

      <Button variant="primary" type="submit" block="true">
        Save
      </Button>
    </Form>
  );
};

function CreateFormSubmit(e) {
  e.preventDefault();
  setShowCreate(false);

  if (title === null) return;

  videoGame.title = title;
  videoGame.studioId = studioId;
  videoGame.mainCharacterId = mainCharacterId;

  postData(videoGame);

  // console.log(videoGame, videoGames);

  title = null;
  studioId = 0;
  mainCharacterId = 0;

  return;
}

export default function Create(props) {
  if (!props.show) {
    return null;
  }

  videoGame = props.data[0];
  videoGames = props.data[1];
  setShowCreate = props.data[2];
  getShowCreate = props.data[3];
  postData = props.data[4];

  // console.log(props, getShowCreate());

  var handleClose = () => {
    setShowCreate(false);
    return;
  };

  return (
    <div>
      <Modal id="createModal" show={getShowCreate} onClose={handleClose}>
        <Modal.Header>
          <Modal.Title>Create</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CreateForm onSubmit={CreateFormSubmit} />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
