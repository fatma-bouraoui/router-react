
import React, { useState } from 'react'
import { Modal, Button, Form } from 'react-bootstrap';

export const Addmovie = ({addmovie}) => {
    const [show, setShow] = useState(false);
    const [movie, setmovie] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handlechange = (e) => {
      setmovie({...movie , [e.target.name] : e.target.value});
  };
    return (
        <div className="add">
             <Button variant="primary" className='add-btn' onClick={handleShow} ><h4> 
        ADD MOVIE </h4>
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>ADD MOVIE</Modal.Title>
        </Modal.Header>
        <Modal.Body><Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>movie title</Form.Label>
    <Form.Control name="title" type="text" placeholder="Enter title" onChange={handlechange} />
    
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>movie description</Form.Label>
    <Form.Control name="description" type="text" placeholder="enter description" onChange={handlechange} />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>insert image</Form.Label>
    <Form.Control name="image" type="text" placeholder="enter image" onChange={handlechange} />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>rating</Form.Label>
    <Form.Control name="rating" type="number" placeholder="enter rating" onChange={handlechange} />
  </Form.Group>
  
</Form></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>{handleClose();addmovie(movie);}}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    
            
        </div>
    )
}
