import React from 'react';

import { Modal, Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

var title = null;
var studioId = null;
var mainCharacterId = null;

var idx = null;
var id = null;
// eslint-disable-next-line
var videoGame = {};
// eslint-disable-next-line
var setVideoGame = null;
var videoGames = [];
// eslint-disable-next-line
var setVideoGames = null;
var setShow = null;
var getShow = null;
var putdata = null;

const EditForm = ({ onSubmit }) => {
  return (
    <Form onSubmit={onSubmit}>
      <Form.Group controlId="formBasicTitle">
        <Form.Label>Video Title</Form.Label>
        <Form.Control
          autoComplete="title"
          type="text"
          placeholder={videoGames[idx].title}
          defaultValue={videoGames[idx].title}
          onChange={(e) => (title = e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="studioId">
        <Form.Label>Studio Id</Form.Label>
        <Form.Control
          autoComplete="studioId"
          type="text"
          placeholder={videoGames[idx].studioId}
          defaultValue={videoGames[idx].studioId}
          onChange={(e) => (studioId = e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="mainCharacterId">
        <Form.Label>Main Character Id</Form.Label>
        <Form.Control
          autoComplete="mainCharacterId"
          type="text"
          placeholder={videoGames[idx].mainCharacterId}
          defaultValue={videoGames[idx].mainCharacterId}
          onChange={(e) => (mainCharacterId = e.target.value)}
        />
      </Form.Group>

      <Button variant="primary" type="submit" block="true">
        Save
      </Button>
    </Form>
  );
};

export default function Edit(props) {
  if (!props.show) {
    return null;
  }

  idx = props.data[0];
  id = props.data[1];
  videoGame = props.data[2];
  setVideoGame = props.data[3];
  videoGames = props.data[4];
  setVideoGames = props.data[5];
  setShow = props.data[6];
  getShow = props.data[7];
  putdata = props.data[8];

  // console.log(props);

  var handleClose = () => {
    setShow(false);
    return;
  };

  const onEditFormSubmit = (e) => {
    e.preventDefault();
    setShow(false);

    if (title !== null) videoGames[idx].title = title;
    if (studioId !== null) videoGames[idx].studioId = studioId;
    if (mainCharacterId !== null)
      videoGames[idx].mainCharacterId = mainCharacterId;
    // console.log(title, studioId, mainCharacterId);

    title = null;
    studioId = null;
    mainCharacterId = null;

    putdata(videoGames[idx], id);

    return;
  };

  return (
    <div>
      {/* <h1>{videoGames[idx].title}</h1> */}
      <Modal id="myModal" show={getShow} onClose={handleClose}>
        <Modal.Header>
          <Modal.Title>Edit</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditForm onSubmit={onEditFormSubmit} />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
