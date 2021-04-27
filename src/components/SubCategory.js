import React, { useEffect, useState } from "react";
import { Button, Container, Form, Row } from "react-bootstrap";
import { useParams } from "react-router";
import axiosInstance from "../axios";
import Cards from "../cards/subcategory";

const Category = () => {
  useEffect(() => {
    getSubCategory();
  }, []);

  const id = useParams()

  const [subcategories, setSubCategory] = useState([]);
  const [loading, setLoading] = useState(false);
  const [newSubCategory, setNew] = useState('');

  const getSubCategory = async () => {

    try {
      const res = await axiosInstance.get("/menu/category/"+id.id+'/subcategory/');
      setSubCategory(res.data);
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
      axiosInstance.post("/menu/category/"+id.id+'/subcategory/',{
          category:id.id,
          sub_category:newSubCategory
      }).then((res)=>{
          getSubCategory();
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
                    placeholder="Enter Sub Category to Add"
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
          subcategories.map((subcategory) => (
            <Container>
              <Row>
             
                  <Cards subcategory={subcategory} re={getSubCategory} category={id.id} key={subcategory.id} />
              
              </Row>
            </Container>
          ))}
      </Container>
    </>
  );
};

export default Category;
