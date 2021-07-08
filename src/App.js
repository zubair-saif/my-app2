import "./App.css";
import React, { Component } from 'react'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: "",
      loading: 'dsdksjdskd',
    };
  }
  render() {
    return <div>{this.state.loading}</div>;
  }
}

export default App;
