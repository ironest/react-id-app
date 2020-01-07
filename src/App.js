import React, { Component } from 'react';
import './App.css'; 

class App extends Component {

  state = {
    username: "",
    password: "",
    extraUsernameInfo: "",
    extraPasswordInfo: ""
  }

  inputUserOnChange = (event) => {

    const {value} = event.target;

    this.setState({
      username: value,
      extraUsernameInfo: ""
    });
    if (value.length > 0 && value.length < 5){
      this.setState({extraUsernameInfo: "At least 5 chars long"});
    }
  }

  inputPassOnChange = (event) => {

    const {value} = event.target;

    this.setState({
      password: value,
      extraPasswordInfo: ""
    });

    if ( value.length > 0
         &&
         (value.toLowerCase() === value
         ||
         value.toUpperCase() === value)
        ){
      this.setState({extraPasswordInfo: "Use both upper and lower case"});
    }
  
  }

  render() {

    const { username, password, extraUsernameInfo, extraPasswordInfo } = this.state

    return (
      <div className="container">
        <div className="panel">

          <p className="alertMsg">{extraUsernameInfo}</p>
          <label>Username</label>
          <input type="text" value={username} onChange={this.inputUserOnChange} />

          <p className="alertMsg">{extraPasswordInfo}</p>
          <label>Password</label>
          <input type="password" value={password} onChange={this.inputPassOnChange} />
        </div>

        <div className="panel">

          <div className="idCard">
            <h2>ID Card</h2>
            { username && <img className="profilePic" src={`https://robohash.org/${username}.png?set=set1&size=250x250`} /> }
            <p>Username: {username}</p>
            <p>Password: {password}</p>
          </div>
        </div>
        <div></div>
      </div>
    );

  }


}

export default App;
