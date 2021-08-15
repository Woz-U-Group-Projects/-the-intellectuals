import React from "react";
import axios from "axios";
import '../task.min.css'
class Task extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tasks: [] };
    this.taskName = React.createRef();
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

  addTask = () => {
    //uncomment and update url to appropriate url for backend connection
    //let url = "http://localhost:3001/tasks";
    let url = "http://localhost:8080/message/post";
    axios.post(url, { 
                        id: 456, ///WTF
                        message: this.taskName.current.value,
                        content: this.taskName.current.value 
      }).then(response => {
      // refresh the data
      this.getData();
      // empty the input
      this.taskName.current.value = "";
    });
  };

  //create update and delete functions to complete CRUD


  render() {
    return (
      <div>
        <h3>MESSAGES</h3>
        <input ref={this.taskName} />
        <button type="button" className="btn btn-primary" onClick={this.addTask}>Send</button>
        <ul>
          {this.state.tasks.map(p => (
            <li key={p.id}>
              {p.message} <button type="button" className="btn btn-danger">Delete</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Task;
