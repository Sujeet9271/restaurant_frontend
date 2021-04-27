import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import axiosInstance from "../axios";
import Cards from "../cards/category";

const Category = () => {
  useEffect(() => {
    getCategory();
  }, []);

  const [categories, setCategory] = useState([]);
  const [loading, setLoading] = useState(false);
  const [newCategory, setNew] = useState('');

  const getCategory = async () => {
    try {
      const res = await axiosInstance.get("/menu/category/");
      setCategory(res.data);
      setLoading(true);
    } catch (err) {
      alert(err.message);
    }
  };

  const handleChange=(e)=>{
    e.preventDefault()
    setNew(e.target.value)

}

  const handleSubmit=(e)=>{
      e.preventDefault()
      axiosInstance.post('/menu/category/',{
          category:newCategory
      }).then((res)=>{
          getCategory();
      })
  }

  

  return (
    <>
      <Container style={{marginTop:'5%'}}>
      <Form>
              <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                <Form.Group as={Row} controlId="formPlaintext">
                  <Form.Control
                    type="text"
                    name="category"
                    placeholder="Enter Category to Add"
                    onChange={handleChange}
                    style={{width:'50vw'}}
                  />
                </Form.Group>
                <Button onClick={handleSubmit} style={{ height: "2%" }}>
                  Add
                </Button>
              </div>
            </Form>
        {loading &&
          categories.map((category) => (
            <Container>
              <Row>
                <Col>
                  <Cards category={category} re={getCategory} key={category.id} />
                </Col>
              </Row>
            </Container>
          ))}
      </Container>
    </>
  );
};

export default Category;
