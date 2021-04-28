import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Modal } from "react-bootstrap";
import { useParams, useHistory } from "react-router";
import axiosInstance from "../axios";
import Cards from "../cards/products";

const Products = () => {
  const id = useParams();
  const history = useHistory();
  useEffect(() => {
    getProduct();
  }, []);

  const initialData = Object.freeze({
    itemname: "",
    price: 1,
    description: "",
    image: null,
    available: true,
  });

  const [Products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [newCategory, setNew] = useState("");
  const [show, setShow] = useState(false);
  const [formData, updateFormData] = useState(initialData);

  const getProduct = async () => {
    try {
      const res = await axiosInstance.get(
        "/menu/category/" +
          id.category +
          "/subcategory/" +
          id.subcategory +
          "/items/"
      );
      console.log(res.data);
      setProducts(res.data);
      setLoading(true);
    } catch (err) {
      alert(err.message);
    }
  };

  const handleChange = (e) => {
    console.log(e.target.name, e.target.value);
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShow(!show);
    axiosInstance
      .post(
        "/menu/category/" +
          id.category +
          "/subcategory/" +
          id.subcategory +
          "/items/",
        {
          itemname: formData.itemname,
          price: formData.price,
          description: formData.description,
          image: formData.image,
          available: "true",
        }
      )
      .then((res) => {
        updateFormData(initialData);
        getProduct();
      });
  };

  return (
    <Container>
    <div style={{display:"flex", justifyContent:'space-evenly'}}>

    
    <Button
        variant="primary"
        className="mt-5"
        onClick={() => {
          history.push("/menu/products/");
        }}
      >
        Show All Products
      </Button>

      
    <Button
        className="mt-5"
        variant="primary"
        onClick={() => {
          setShow(!show);
        }}
      >
        Add Product
      </Button>

    </div>
      

      <Modal
        show={show}
        onHide={() => {
          setShow(!show);
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Product</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridText">
                <Form.Label>Item Name</Form.Label>
                <Form.Control
                  type="text"
                  name="itemname"
                  placeholder="Item Name"
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
                min="1"
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="Description">
              <Form.Label>Description</Form.Label>
              <Form.Control
                placeholder="Description"
                name="description"
                onChange={handleChange}
              />
            </Form.Group>

            {/* <Form.Group id="formGridCheckbox">
                <Form.Check type="checkbox" label="Available" />
              </Form.Group> */}
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="primary" onClick={handleSubmit}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>

      {loading &&
        Products.map((product) => (
          <Cards product={product} getProduct={getProduct}></Cards>
        ))}
    </Container>
  );
};

export default Products;
