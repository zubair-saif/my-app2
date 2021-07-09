import "./App.css";
import React, { Component } from 'react'
import Greet from "./components/Greet";
class App extends Component {
 
  render() {
    return <div className="App">
      <h1>Welcome React</h1>
      <Greet name="Welcome"/>
      <Greet name="juni"/>
      <Greet name="juni"/>

      </div>;
  }
}

export default App;
