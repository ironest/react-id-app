import React, {Component} from "react";

class Output extends Component {

    render() {

        const {username, password} = this.props;

        return(
            <div className="panel">
                <div className="idCard">
                <h2>ID Card</h2>
                { username && <img className="profilePic" src={`https://robohash.org/${username}.png?set=set1&size=250x250`} /> }
                <p>Username: {username}</p>
                <p>Password: {password}</p>
                </div>
            </div>
        )
    }

}

export default Output;