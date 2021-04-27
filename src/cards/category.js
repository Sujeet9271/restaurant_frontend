import { Card, Accordion, Button, Modal, Form, Row } from "react-bootstrap";
import React, { useState } from "react";
import axiosInstance from "../axios";
import { useHistory } from "react-router";

const Cards = ({ category, re }) => {
  const history = useHistory();
  const Category_del = (e) => {
    axiosInstance
      .delete("/menu/category/" + category.id + "/update/")
      .then((res) => {
        re();
      });
  };
  const [newCategory, setNew] = useState("");
  const [showModal, setShow] = useState(false);

  const handleChange = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    setNew(e.target.value);
  };
  const edit = (e) => {
    axiosInstance
      .patch("/menu/category/" + category.id + "/update/", {
        category: newCategory,
      })
      .then((res) => {
        re();
      });
    setShow(!showModal);
  };

  return (
    <Card className="my-3 p-3 rounded h-90">
      <Card.Body>
        <Card.Title>{category.category}</Card.Title>
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
         
         
          <Button
            variant="primary"
            onClick={() => {
              history.push("/menu/category/" + category.id);
            }}
          >
            Show Sub Categories
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              setShow(!showModal);
            }}
          >
            Edit
          </Button>
          <Button
            variant="danger"
            onClick={Category_del}
          >
            Delete
          </Button>
        </div>

        <Modal show={showModal}>
        <Modal.Header className="justify-content-space-between">
            Edit Category
            <Button variant='danger' onClick={() => {setShow(!showModal);}}>X</Button>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                <Form.Group as={Row} controlId="formPlaintext">
                  <Form.Control
                    type="text"
                    name="category"
                    placeholder={category.category}
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
