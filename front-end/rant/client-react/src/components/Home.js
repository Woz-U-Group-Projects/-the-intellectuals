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

          <div style={{background: "#ffffff"}} className="Home">
          <h1 style={{background: "#00bff3"}}>"Rants"</h1>
          <a href='/Message'>Chat</a>
          <Route path='/Message' component={Message} />
          </div>
        </div>
      </Router>
    );
  }
}
  Headers.defaultProps = {
  title: 'hows the day',
  }

export default Home;
