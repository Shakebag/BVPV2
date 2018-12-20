import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

const apiUrl = "http://localhost:63446/api/values";

class App extends Component {
  state = {
    values: []
  };
  async componentDidMount() {
    var result = await fetch(apiUrl, { method: "GET", mode: "cors" });
    var json = await result.json();
    this.setState({ values: json });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <h1>API Values</h1>
          <ul>
            {this.state.values.map(value => (
              <li key={value}>{value}</li>
            ))}
          </ul>
        </header>
      </div>
    );
  }
}

export default App;
