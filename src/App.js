import "./App.css";
import React, { Component } from 'react'
import Greet from "./components/Greet";
import Message from "./components/Message";
import Counter from "./components/Counter";
import FunctionClick from "./components/FunctionClick";
import ParentsComponents from "./components/ParentsComponents";
import UserGreeting from "./components/UserGreeting";
import NameListing from "./components/NameListing";
import StyleSheet from "./components/StyleSheet";
import Form from "./components/Form";
class App extends Component {
 
  render() {
    return <div className="App">
      {/* <h1>Welcome React</h1> */}
      {/* <Greet name="Welcome" heroName="hero"/> */}
      {/* <Message/> */}
      {/* <Counter/> */}
      {/* <FunctionClick/> */}
      {/* <ParentsComponents/> */}
      {/* <UserGreeting/> */}
      {/* <NameListing/> */}
      {/* <StyleSheet primary={true}/> */}
      <Form/>
      </div>;
  }
}

export default App;
