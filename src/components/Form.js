import React, { Component } from "react";

export class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      comments: "",
      topic: "react",
    };
  }
  usernameHandler = (event) => {
    this.setState({
      username: event.target.value,
    });
  };
  commentsHandler = (event) => {
    this.setState({
      comments: event.target.value,
    });
  };
  onchangeTopicHandler = (event) => {
    this.setState({
      topic: event.target.value,
    });
  };
  onSubmitHandler = (event) => {
    alert(
      `${this.state.username} and ${this.state.comments} and topic is ${this.state.topic}`
    );
    event.preventDefault();
  };
  render() {
    const { username, comments, topic } = this.state;
    return (
      <div>
        <form onSubmit={this.onSubmitHandler}>
          <div>
            <label>Firt Name</label>
            <input
              type="text"
              value={username}
              onChange={this.usernameHandler}
            />
          </div>
          <div>
            <label>comments</label>
            <textarea
              type="text"
              value={comments}
              onChange={this.commentsHandler}
            />
          </div>
          <div>
            <label>topic</label>
            <select value={topic} onChange={this.onchangeTopicHandler}>
              <option value="Angular">Angular</option>
              <option value="react">React</option>
              <option value="Vue">Vue</option>
            </select>
          </div>
          <div>
            <button type="submit">submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
