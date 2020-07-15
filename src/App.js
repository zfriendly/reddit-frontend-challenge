import React, { Component } from "react";
import Nav from "./Nav";
import Search from "./Search";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div>
        <Nav />
        <Search />
        <div>Hello!</div>
      </div>
    );
  }
}

export default App;
