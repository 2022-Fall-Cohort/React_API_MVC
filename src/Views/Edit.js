import React from 'react';

import { Modal, Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

var title = null;
var studioId = 0;
var mainCharacterId = 0;

var idx = null;
var id = null;
// eslint-disable-next-line
var videoGame = {};
var videoGames = [];
var setShowEdit = null;
var getShowEdit = null;
var putData = null;

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
  videoGames = props.data[3];
  setShowEdit = props.data[4];
  getShowEdit = props.data[5];
  putData = props.data[6];

  // console.log(props);

  var handleClose = () => {
    setShowEdit(false);
    return;
  };

  const onEditFormSubmit = (e) => {
    e.preventDefault();
    setShowEdit(false);

    if (title !== null) {
      videoGames[idx].title = title;
    }

    if (studioId !== 0) {
      videoGames[idx].studioId = studioId;
    }

    if (mainCharacterId !== 0) {
      videoGames[idx].mainCharacterId = mainCharacterId;
    }

    title = null;
    studioId = 0;
    mainCharacterId = 0;

    putData(videoGames[idx], id);

    return;
  };

  return (
    <div>
      <Modal id="editModal" show={getShowEdit} onClose={handleClose}>
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
