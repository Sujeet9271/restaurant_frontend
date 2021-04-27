import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import axiosInstance from '../axios';
import Cards from '../cards/products';

const Products = () => {
    const id = useParams(

    )
    useEffect(() => {
        getProduct();
      }, []);
    
      const [Products, setProducts] = useState([]);
      const [loading, setLoading] = useState(false);
      const [newCategory, setNew] = useState('');
    
      const getProduct = async () => {
        try {
          const res = await axiosInstance.get('/menu/category/'+id.category+'/subcategory/'+id.subcategory+'/items/');
          console.log(res.data)
          setProducts(res.data);
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
          axiosInstance.post('/menu/category/'+id.category+'/subcategory/'+id.subcategory+'/items/',{
              category:newCategory
          }).then((res)=>{
              getProduct();
          })
      }
    
      
    return (
        <>
       {loading && Products.map((product)=>(
           <Cards product={product}></Cards>
       ))}

    </>
    )
}

export default Products
