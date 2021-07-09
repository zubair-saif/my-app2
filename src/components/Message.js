import React, { Component } from "react";

class Message extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Welcome Visitors",
    };
  }

  onClickMethod() {
    this.setState({
      message: "thanks for subcribing",
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={() => this.onClickMethod()}>subcribe</button>
      </div>
    );
  }
}
export default Message;
