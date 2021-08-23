import React from "react";
 import  Message from "./components/Message";
import  Home from "./components/Home";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
 import  Register from "./components/Register";
 import  Login from "./components/Login";


import "./App.css";

function App() {
  return (
		<Router>
		  <Switch>
		  <Route path='/' exact={true} component={Home} />
          <Route path='/Message'exact={true} component={Message} />
          <Route path='/Register' exact={true} component={Register} />
          <Route path='/Login' exact ={true} component={Login} />
          </Switch>
		</Router>
  );
}

export default App;
