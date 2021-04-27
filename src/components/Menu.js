import React, { useEffect, useState } from 'react'
import axiosInstance from '../axios';

const Menu = () => {
    useEffect(() => {
        getSubCategory();
      }, []);
    
      const [SubCategory, setSubCategory] = useState([]);
      const [loading, setLoading] = useState(false);
    
      const getSubCategory = async () => {
        try {
          const res = await axiosInstance.get('/menu/');
          console.log(res.data)
          setSubCategory(res.data);
          setLoading(true);
        } catch (err) {
          alert(err.message);
        }
      };
    return (
        <div>
            
        </div>
    )
}

export default Menu
