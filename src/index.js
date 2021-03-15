import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Fetch from './fetch'
import { BrowserRouter as Router } from "react-router-dom"

// In order to render more than one component, you need to wrap in a div or fragment <> 
// function AppTwo() {
//   return(
//     <h1> This is app two</h1>
//   )
// }


ReactDOM.render(
  <Router>
    <App/>
    <Fetch login="lenilunderman" />
  </Router>
  ,
  document.getElementById('root')
);
