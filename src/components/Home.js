import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import SearchIcon from '@material-ui/icons/Search';
import { Image } from 'react-bootstrap';

const Home = () => {



  return (
    <div>
        <Image className="home__image"
          src="https://www.9-elephants.co.uk/wp-content/uploads/thai-food.jpg"
        />
        <h1 style={{justifyContent:'center',textAlign:'center',color:'white'}}>You Order, We deliver </h1>
       
    </div>
  )
}

export default Home