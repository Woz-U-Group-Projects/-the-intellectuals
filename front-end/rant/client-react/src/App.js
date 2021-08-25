import React from "react";
import  Message from "./components/Message";
import Register from "./components/Register";
import Login from "./components/Login";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';



import "./App.css";

function App() {

    return (
      <Router>
        <div>
          <h1 style={{background: "#00bff3"}}>"Rants"</h1>
          <nav className="navbar navbar-expand-lg navbar-light bg-light" >
            <Link className="navbar-brand" to='/Home'>Home</Link>
            <Link className="navbar-brand" to='/Message'>Messages</Link>
            <Link className="navbar-brand" to= '/'>Login</Link>
            <Link className="navbar-brand" to= '/Register'>Register</Link>
          </nav>
          <Switch>
          <Route path='/Home' exact={true} component={Home} />
          <Route path='/Message' exact={true} component={Message} />
          <Route path='/Register' exact={true} component={Register} />
          <Route path='/' exact={true} component={Login} />
          </Switch>
          <div style={{background: "#ffffff"}} className="Home">
          </div>
        </div>
      </Router>
    );
  }

export default App;
