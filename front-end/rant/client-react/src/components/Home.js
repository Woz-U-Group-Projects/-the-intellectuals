import React from "react";
import  Task from "./Task";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import '../task.min.css'
class Home extends React.Component {

  

  render() {
    return (
      <Router>
        <div>
          <h3>Home</h3>
          <a href='/Task'>Task</a>
          <Route path='/Task' component={Task} />
          
        </div>
      </Router>
    );
  }
}

export default Home;
