import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  OnIncreament(props) {
    this.setState({
      count: this.state.count + props,
    });
  }

  render() {
    return (
      <div>
        <h1>Count-{this.state.count}</h1>
        <button onClick={() => this.OnIncreament(5)}>Increament</button>
      </div>
    );
  }
}

export default Counter;
