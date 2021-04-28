import { SettingsPhoneTwoTone } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import { Container, Form, Col, Button, Modal } from "react-bootstrap";
import axiosInstance from "../axios";
import Cards from "../cards/products";

const ALLproducts = () => {
  useEffect(() => {
    getProduct();
  }, []);

  const initialData = Object.freeze({
    itemname: "",
    category: 1,
    sub_category: 1,
    price: 1,
    description: "",
    image: null,
    available: "true",
  });

  const [Products, setProducts] = useState([]);
  const [Category, setCategory] = useState([]);
  const [SubCategory, setSubCategory] = useState([]);
  const [loading, setLoading] = useState(false);
  const [chainSub, setChain] = useState([]);
  const [formData, updateFormData] = useState(initialData);

  const [show, setShow] = useState(false);

  const getProduct = async () => {
    try {
      const res = await axiosInstance.get("/menu/allitems/");
      console.log(res.data);
      setProducts(res.data.items);
      setCategory(res.data.category);
      setSubCategory(res.data.subcategory);
      setLoading(true);
    } catch (err) {
      alert(err.message);
    }
  };

  const chainSubCategory = (e) => {
    const id = parseInt(e.target.value.trim());
    updateFormData({
      ...formData,
      [e.target.name]: id,
    });
    const newarr = [];
    SubCategory.map((sub) => {
      if (sub.category == e.target.value) {
        newarr.push({
          id: sub.id,
          sub_category: sub.sub_category,
        });
      }
    });
    setChain(newarr);
  };

  const handleChange = (e) => {
    console.log(e.target.name, e.target.value);
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    });
  };

  const handlesub = (e) => {
    const id = parseInt(e.target.value.trim());
    updateFormData({
      ...formData,
      [e.target.name]: id,
    });
  };

  const handleSubmit = async () => {
    setShow(!show)
    try {
      const res = await axiosInstance.post("/menu/allitems/", {
        itemname: formData.itemname,
        category: formData.category,
        sub_category: formData.sub_category,
        price: formData.price,
        description: formData.description,
        image: formData.image,
        available: 'true',
      });
      getProduct();
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <>
      <Container>
        <Button
          className="mt-5"
          style={{ marginLeft: "25vw" }}
          variant="primary"
          onClick={() => {
            setShow(!show);
          }}
        >
          Add Product
        </Button>
        <Modal
          show={show}
          onHide={() => {
            setShow(!show);
          }}
        >
          <Modal.Header closeButton>
            <Modal.Title>Modal title</Modal.Title>
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

              <Form.Group controlId="Category">
                <Form.Label>Category</Form.Label>
                <Form.Control
                  as="select"
                  custom
                  name="category"
                  onChange={chainSubCategory}
                >
                  <option value="0">Choose Category</option>
                  {loading &&
                    Category.map((category) => (
                      <option value={category.id}>{category.category}</option>
                    ))}
                </Form.Control>
              </Form.Group>

              <Form.Group controlId="SubCategory">
                <Form.Label>Sub Category</Form.Label>
                <Form.Control
                  as="select"
                  custom
                  name="sub_category"
                  onChange={handlesub}
                >
                  <option value="0"> Sub Category</option>
                  {loading &&
                    chainSub.map((subcategory) => (
                      <option value={subcategory.id}>
                        {subcategory.sub_category}
                      </option>
                    ))}
                </Form.Control>
              </Form.Group>

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
    </>
  );
};

export default ALLproducts;
