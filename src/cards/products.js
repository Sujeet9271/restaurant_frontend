import React, { useState } from "react";
import {
  Button,
  Card,
  Container,
  Image,
  Col,
  Form,
  Modal,
} from "react-bootstrap";
import axiosInstance, { baseURL2 } from "../axios";

const Cards = ({ product, getProduct }) => {
  const [show, setShow] = useState(false);

  const initialData = Object.freeze({
    itemname: product.itemname,
    price: product.price,
    description: product.description,
    image: product.image,
  });
  const [formData, updateFormData] = useState(initialData);

  const product_edit = () => {
    setShow(!show);
    axiosInstance
      .patch(
        "/menu/category/" +
          product.category +
          "/subcategory/" +
          product.sub_category +
          "/item/" +
          product.id +
          "/",
        formData
      )
      .then((res) => {
        console.log(res.data);
        getProduct();
      });
  };
  const product_del = () => {
    axiosInstance
      .delete(
        "/menu/category/" +
          product.category +
          "/subcategory/" +
          product.sub_category +
          "/item/" +
          product.id +
          "/"
      )
      .then((res) => {
        getProduct();
      });
  };

  const handleChange = (e) => {
    e.preventDefault();
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    });
  };

  const handleImage=(e)=>{
    e.preventDefault();
    console.log(e.target.files)
    updateFormData({
      ...formData,
      [e.target.name]: e.target.files,
    });
console.log(formData)
  }

  return (
    <Container>
      <Modal
        show={show}
        onHide={() => {
          setShow(!show);
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Product</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form >
            <Form.Row>
              <Form.Group as={Col} controlId="formGridText">
                <Form.Label>Item Name</Form.Label>
                <Form.Control
                  type="text"
                  name="itemname"
                  placeholder={product.itemname}
                  onChange={handleChange}
                />
              </Form.Group>
            </Form.Row>

            <Form.Group controlId="Price">
              <Form.Label>Price</Form.Label>
              <Form.Control
                placeholder="Price"
                name="price"
                type="number"
                placeholder={product.price}
                min="1"
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="Description">
              <Form.Label>Description</Form.Label>
              <Form.Control
                placeholder="Description"
                name="description"
                placeholder={product.description}
                onChange={handleChange}
              />
            </Form.Group>

              {/* <Form.Group>
                <Form.File
                  name="image"
                  id="exampleFormControlFile1"
                  label="Upload Image"
                  onChange={handleImage}
                />
              </Form.Group> */}
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="primary" onClick={product_edit}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>

      {/* <Modal
        show={show}
        onHide={() => {
          setShow(!show);
        }}
      >

      <Modal.Header closeButton>
          <Modal.Title>Delete Product</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          Are You Sure You Want to Delete this Product?
        </Modal.Body>

        <Modal.Footer>
          <Button variant="danger" onClick={product_del}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal> */}

      <Card className="my-3 p-3 rounded">
        <div style={{ display: "flex" }}>
          <Image
            style={{ width: "10%", height: "10%" }}
            src={`${baseURL2}${product.image}`}
            thumbnail
          />
          <Card.Body>
            <Card.Title>
              <div style={{ display: "flex", marginBottom: "2%" }}>
                {product.itemname}
              </div>
            </Card.Title>
            <Card.Text>
              <div style={{ display: "flex", marginBottom: "2%" }}>
                <h5 className="card-text" style={{ marginLeft: "10px" }}>
                  Category:
                </h5>
                <h6 className="mt-1 ml-1">{product.category_name}</h6>
              </div>
              <div style={{ display: "flex", marginBottom: "2%" }}>
                <h5 className="card-text" style={{ marginLeft: "10px" }}>
                  Sub Category:
                </h5>
                <h6 className="mt-1 ml-1">
                  <i>{product.subcategory_name}</i>
                </h6>
              </div>
              <div style={{ display: "flex", marginBottom: "2%" }}>
                <h5 className="card-text" style={{ marginLeft: "10px" }}>
                  Price:
                </h5>{" "}
                <h6 className="mt-1 ml-1">Rs.{product.price}</h6>
              </div>
              <div style={{ display: "flex", marginBottom: "2%" }}>
                <h5 className="card-text" style={{ marginLeft: "10px" }}>
                  Description:
                </h5>
                <h6 className="mt-1 ml-1">
                  <i>{product.description}</i>
                </h6>
              </div>
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
            </Card.Text>
            <div style={{ justifyContent: "space-around", float: "right" }}>
              <Button
                variant="primary"
                className="mr-1"
                onClick={() => {
                  setShow(!show);
                }}
              >
                Edit
              </Button>
              <Button variant="danger" onClick={product_del}>
                Delete
              </Button>
            </div>
          </Card.Body>
        </div>
      </Card>
    </Container>
  );
};

export default Cards;
