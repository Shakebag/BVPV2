import React, { Component } from "react";
import Auth from "./AuthService";

class Login extends Component {
  componentDidMount() {
    let auth = new Auth();
    auth.login();
  }

  render() {
    return (
      <div>
        <a>Login</a>
      </div>
    );
  }
}

export default Login;
