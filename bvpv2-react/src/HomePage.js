import React from "react";
import logo from "./logo.svg";
const apiUrl = "http://localhost:63446/api/values";
class HomePage extends React.Component {
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
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <h1>API Values</h1>
        <ul>
          {this.state.values.map(value => (
            <li key={value}>{value}</li>
          ))}
        </ul>
      </header>
    );
  }
}

export default HomePage;
