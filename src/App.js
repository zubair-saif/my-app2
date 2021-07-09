import "./App.css";
import React, { Component } from 'react'
import Greet from "./components/Greet";
import Message from "./components/Message";
import Counter from "./components/Counter";

class App extends Component {
 
  render() {
    return <div className="App">
      {/* <h1>Welcome React</h1> */}
      {/* <Greet name="Welcome"/>
      <Greet name="juni"/>
      <Greet name="juni"/> */}
      {/* <Message/> */}
      <Counter/>
      </div>;
  }
}

export default App;
