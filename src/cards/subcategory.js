import { Card, Button, Modal, Form, Row } from "react-bootstrap";
import React, { useState } from "react";
import axiosInstance from "../axios";
import { useHistory } from "react-router";

const Cards = ({ subcategory, re }) => {
const history=useHistory()

  const subCategory_del = (e) => {
    axiosInstance
      .delete(
        "/menu/category/" +
          subcategory.category +
          "/subcategory/" +
          subcategory.id +
          "/"
      )
      .then((res) => {
        re();
      });
  };

  const [newSubCategory, setNew] = useState("");
  const [showModal, setShow] = useState(false);

  const handleChange = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    setNew(e.target.value);
  };
  const edit = (e) => {
    axiosInstance
      .patch(
        "/menu/category/" +
          subcategory.category +
          "/subcategory/" +
          subcategory.id +
          "/",
        {
          sub_category: newSubCategory,
        }
      )
      .then((res) => {
        re();
      });
    setShow(!showModal);
  };

  return (
    <Card className="my-3 p-3 rounded" style={{ width: "50vw" }}>
      <Card.Body>
        <Card.Title>{subcategory.sub_category}</Card.Title>
        <Card.Text>Category:{subcategory.category_name}</Card.Text>
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <Button
            variant="primary"
            onClick={() => {
              history.push("/menu/category/" + subcategory.category+'/subcategory/'+subcategory.id+'/items/');
            }}
          >
            Show Products
          </Button>
        <Button variant="primary" onClick={() => {setShow(!showModal);}}>
            Edit
          </Button>
          <Button variant="danger" onClick={subCategory_del} >
            Delete
          </Button>
         
        </div>

        <Modal show={showModal}>
          <Modal.Header className="justify-content-space-between">
            Edit Sub Category
            <Button variant='danger' onClick={() => {setShow(!showModal);}}>X</Button>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                <Form.Group as={Row} controlId="formPlaintext">
                  <Form.Control
                    type="text"
                    name="category"
                    placeholder={subcategory.sub_category}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Button onClick={edit} style={{ height: "2%" }}>
                  Edit
                </Button> 
              </div>
            </Form>
          </Modal.Body>
        </Modal>
      </Card.Body>
    </Card>
  );
};

export default Cards;
