import React from "react";
import axios from "axios";
import '../task.min.css'
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tasks: [] };
    this.userName = React.createRef();
    this.password = React.createRef();
  }

  componentDidMount() {
    this.getData();
  }

  getData = () => {

    //UNCOMMENT the appropriate url for the backend framework

    // Java Spring Boot uses port 8080
    let url = "http://localhost:8080/user/fetch";

    // C# dotnetcore uses port 5000
    //let url = "http://localhost:5000/projects";

    // Express uses port 3001 (react uses 3000)
    //let url = "http://localhost:3001/tasks";
    axios.get(url).then(response => this.setState({ tasks: response.data }));
  };

  addTask = () => {
    //uncomment and update url to appropriate url for backend connection
    //let url = "http://localhost:3001/tasks";
    let url = "http://localhost:8080/user/signup";
    axios.post(url, { 
                        id: 456, ///WTF
                        username: this.userName.current.value,
                        password: this.password.current.value 
      }).then(response => {
      // refresh the data
      this.getData();
      // empty the input
      this.userName.current.value = "";
      this.password.current.value = "";
    });
  };

  //create update and delete functions to complete CRUD


  render() {
    return (
	<form action="@{/login}" method="post">
      <div>
        <a href='/'>Home</a>
        <a href='/Message'>Chat</a>
        <a href='/Register'>Register</a>
        <h3>Login</h3>
        <label>Username<input ref={this.userName} />
        </label>
        <label>Password<input type="password" ref={this.password} />
        </label>
        <button type="button" className="btn btn-primary" onClick={this.addTask}>Sign in</button>
        <ul>
          {this.state.tasks.map(p => (
            <li key={p.id}>
              {p.message}
            </li>
          ))}
        </ul>
      </div>
     </form>
    );
  }
}

export default Login;
