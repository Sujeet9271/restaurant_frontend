import React, { useEffect, useState } from "react";
import { Button, Container, Form, FormControl, InputGroup } from "react-bootstrap";
import axiosInstance from "../axios";
import Cards from "../cards/subcategory";

const AllSubcategory = () => {
  useEffect(() => {
    getSubCategory();
  }, []);

  const [SubCategory, setSubCategory] = useState([]);
  const [Category, setCategory] = useState([]);

  const [subcategory, setNewSubCategory] = useState('');
  const [category, setNewCategory] = useState(0);

  const [loading, setLoading] = useState(false);
  const [newSub, setNew] = useState("");

  const getSubCategory = async () => {
    try {
      const res = await axiosInstance.get("/menu/allsubs/");
      console.log(res.data);
      setSubCategory(res.data.subcategory);
      setCategory(res.data.category);
      setLoading(true);
    } catch (err) {
      alert(err.response.data);
    }
  };
  const handleSelect=(e)=>{
      setNewCategory(e.target.value)
      
    }


  const handleSubmit=(e)=>{
      e.preventDefault()
      console.log(category)
      axiosInstance.post('/menu/allsubs/',{
          category:category,
          sub_category:subcategory
      }).then(()=>{
          getSubCategory()
      })

  }
  return (
    <Container className="mt-5">
      <Form inline>
        
        <Form.Control
          as="select"
          onChange={handleSelect}
          className="my-1 mr-sm-2"
          id="inlineFormCustomSelectPref"
          custom
        >
          <option value="0">Choose Category</option>
          {loading &&
            Category.map((category) => (
              <option value={category.id}>{category.category}</option>
            ))}
        </Form.Control>
        <InputGroup className="my-1 mr-sm-2">
          <FormControl
            id="inlineFormInputGroupUsername2"
            placeholder="Enter Sub Category to add"
            onChange={(e)=>{setNewSubCategory(e.target.value)}}
          />
        </InputGroup>
        <Button className="my-1" onClick={handleSubmit}>Add</Button>
      </Form>
      {loading &&
        SubCategory.map((subcategory) => <Cards subcategory={subcategory} re={getSubCategory} />)}
    </Container>
  );
};

export default AllSubcategory;
