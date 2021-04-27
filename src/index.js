
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();



// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';

// import './App.css';
// import Header from './components/Header';
// import Home from './components/Home';
// import Signin from './components/Signin'
// import Signup from './components/Signup' 
// import Forgotpassword from './components/Forgotpassword'
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
// import reportWebVitals from './reportWebVitals';


// function routing() {
//   return (

//     <Router>
   
//    <React.StrictMode>



     
//         <Switch>

//         <Route exact path ='/' component={App} />
        
//         <Route path='/Forgotpassword'>
//           <Forgotpassword />
//           </Route>

//         <Route path='/Signin'>
//           <Signin />
//           </Route>

//           <Route path='/Signup'>
//           <Signup />
//           </Route>


//           <Route path='/'>
//           <Header />
//             <Home />
//           </Route>

//         </Switch>

  
//       </React.StrictMode>,
//     </Router>
//   );
// }
// ReactDOM.render( routing, document.getElementById('root'));

// reportWebVitals();

