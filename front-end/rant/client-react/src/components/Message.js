import React from "react";
import axios from "axios";
import  Home from "./Home";

import { BrowserRouter as Router, Route } from 'react-router-dom';

import '../task.min.css'
class Message extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tasks: [] };
    this.messageContent = React.createRef();
  }

  componentDidMount() {
    this.getData();
  }

  getData = () => {

    //UNCOMMENT the appropriate url for the backend framework

    // Java Spring Boot uses port 8080
    let url = "http://localhost:8080/message/fetch";

    // C# dotnetcore uses port 5000
    //let url = "http://localhost:5000/projects";

    // Express uses port 3001 (react uses 3000)
    //let url = "http://localhost:3001/tasks";
    axios.get(url).then(response => this.setState({ tasks: response.data }));
  };

  sendMessage = () => {
    //uncomment and update url to appropriate url for backend connection
    //let url = "http://localhost:3001/tasks";
    let url = "http://localhost:8080/message/post";
    axios.post(url, { 
                        id: 456, ///WTF
                        message: this.messageContent.current.value,
                        content: this.messageContent.current.value 
      }).then(response => {
      // refresh the data
      this.getData();
      // empty the input
      this.messageContent.current.value = "";
    });
  };

  //create update and delete functions to complete CRUD


  render() {
    return (
      <Router>
      <div>
        <a href='/'>Home</a>
        <h3>MESSAGES</h3>
        <input ref={this.messageContent} />
        <button type="button" className="btn btn-primary" onClick={this.sendMessage}>Send</button>
        <ul>
          {this.state.tasks.map(p => (
            <li key={p.id}>
              {p.message} 
              <button type="button" className="btn btn-danger">Delete</button>
            </li>
          ))}
        </ul>
        <Route exact path='/' component={Home} />
        {/* <Route path='/Home' exact render={(props) => {(
        <>
        <div>
          <h3>Home</h3>
          <a href='/Task'>Task</a>
          <Route path='/Task' component={Task} />
        </div>
        </>
        )} /> */}
      </div>
      </Router>
    );
  }
}

export default Message;
