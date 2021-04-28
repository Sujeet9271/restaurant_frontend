import './App.css';
import Home from './components/Home';
import Signin from './components/Signin'
import Signup from './components/Signup'
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom"
import { useEffect, useState } from 'react';
import Logout from './components/Logout';
import Sidebar from './components/Sidebar'
import Category from './components/Category';
import SubCategory from './components/SubCategory'
import Products from './components/Products';
import AllProducts from './components/AllProducts'
import AllSubcategory from './components/AllSubcategory';
import Menu from './components/Menu';
import TodayOrders from './components/TodayOrders';
import AllOrders from './components/AllOrders'




function App() {
  return (

    <Router>

      <div className="App">

      <Sidebar />

        <Switch>

          <Route exact path='/Logout' component={Logout} />

          <Route exact path='/Signin' component={Signin} />

          <Route exact path='/Signup' component={Signup} />

          <Route exact path='/Home' component={Home} />

          <Route exact path='/menu' component={Menu} />

          <Route exact path='/orders/today' component={TodayOrders} />

          <Route exact path='/orders/all' component={AllOrders} />

          <Route exact path='/menu/category' component={Category} />

          <Route exact path='/menu/category/:id' component={SubCategory} />

          <Route exact path='/menu/subcategory' component={AllSubcategory} />

          <Route exact path='/menu/category/:category/subcategory/:subcategory/items/' component={Products} />

          <Route exact path='/menu/products' component={AllProducts} />

          <Redirect path='/Home' component={Home} />


        </Switch>

      </div>

    </Router>



  );
}

export default App;
