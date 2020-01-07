import React, {Component} from "react";

class Login extends Component {

    state = {
        extraUsernameInfo: "",
        extraPasswordInfo: ""
    }

    inputUserOnChange = (event) => {

        const {value} = event.target;

        this.setState({
            extraUsernameInfo: ""
        });  

        this.props.liftUserToParent(value);

        if (value.length > 0 && value.length < 5){
            this.setState({extraUsernameInfo: "At least 5 chars long"});
        }

    }

    inputPassOnChange = (event) => {
        
        const {value} = event.target;

        this.setState({
            extraPasswordInfo: ""
        });  

        this.props.liftPassToParent(value);

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

        const {username, password} = this.props;
        const {extraUsernameInfo, extraPasswordInfo} = this.state;

        return(
            <div className="panel">

                <p className="alertMsg">{extraUsernameInfo}</p>
                <label>Username</label>
                <input type="text" value={username} onChange={this.inputUserOnChange} />
    
                <p className="alertMsg">{extraPasswordInfo}</p>
                <label>Password</label>
                <input type="password" value={password} onChange={this.inputPassOnChange} />
          </div>
        )
    }

}

export default Login;