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
          <h1 style={{background: "#00bff3"}}>"Rants"</h1>

          <nav className="navbar navbar-expand-lg navbar-light bg-light" >
            <h3><a className="navbar-brand" href='/'>Home</a></h3>
            <a className="navbar-brand" href='/Message'>Messages</a>
            <a className="navbar-brand" href= '/Login'>Login</a>
            <a className="navbar-brand" href= '/Register'>Register</a>
          </nav>
          <Switch>
          <Route path='/Message' component={Message} />
          <Route path='/Register' component={Register} />
          <Route path='/Login' component={Login} />
          </Switch>
          <div style={{background: "#ffffff"}} className="Home">
          <Route path='/Message' component={Message} />
          </div>
          <div>
            {/* <img 
              alt= 'The Rant' 
              // src={'../image/nsey-benajah-5_gku5Usbzk-unsplash.jpg'}
              ClassName="home-rant-image"
              style={{ float: 'middle' }}
               /> */}
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
