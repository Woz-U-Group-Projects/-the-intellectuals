import React from "react";
import  Message from "./Message";
import Register from "./Register";
import Login from "./Login";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import '../task.min.css'
class Home extends React.Component {

  

  render() {
    return (
      <Router>
        <div>
          <h3>Home</h3>
          <a href='/Message'>Messages</a>
          <a href= '/Login'>Login</a>
          <a href= '/Register'>Register</a>
          <Switch>
          <Route path='/Message' component={Message} />
          <Route path='/Register' component={Register} />
          <Route path='/Login' component={Login} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default Home;
