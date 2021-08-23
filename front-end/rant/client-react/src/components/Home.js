import React from "react";
import '../task.min.css'
class Home extends React.Component {

  

  render() {
    return (

        <div>
          <h3>Home</h3>
          <div style={{background: "#ffffff"}} className="Home">
          <h1 style={{background: "#00bff3"}}>"Rants"</h1>
          <a href='/Message'>Chat</a>
          <a href= '/Login'>Login</a>
          <a href= '/Register'>Register</a>
          </div>
        </div>
    );
  }
}
  Headers.defaultProps = {
  title: 'hows the day',
  }

export default Home;
