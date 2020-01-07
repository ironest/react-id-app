import React, { Component } from 'react';
import './App.css'; 
import Login from './Login';
import Output from './Output';

class App extends Component {

  state = {
    username: "",
    password: ""
  }

  liftUserToParent = (value) => {
    this.setState({
      username: value,
    });
  }

  liftPassToParent = (value) => {
    this.setState({
      password: value
    });  
  }

  render() {

    const { username, password } = this.state

    return (
      <div className="container">
        <Login username={username}
               password={password}
               liftUserToParent={this.liftUserToParent}
               liftPassToParent={this.liftPassToParent}
               
        />
        <Output username={username}
                password={password}
        />
      </div>
    );

  }


}

export default App;
