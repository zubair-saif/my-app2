import React, { Component } from "react";
import ReactPureCompo from "./ReactPureCompo";
import RegularComp from "./RegularComp";

export class ParentsComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "zubair",
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "zubair",
      });
    }, 2000);
  }

  render() {
      console.log('@@@@@@######################## Parent Compont')
    return (
      <div>
        ParentsComp
        <RegularComp name={this.state.name}></RegularComp>
        <ReactPureCompo name={this.state.name}></ReactPureCompo>
      </div>
    );
  }
}

export default ParentsComp;
