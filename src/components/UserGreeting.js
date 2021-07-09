import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLogedin: true,
    };
  }

  render() {
    //javascript variable approach for condition
    //   let message=this.state.isLogedin;
    //   if(message){
    //       message=<div><h1>welcome super admin</h1></div>
    //   }else{
    //     message=<div> <h1>welcome Guest User</h1></div>
    //   }
    //   return <div>{message}</div>

    //by using ternary operators

    // return this.state.isLogedin ? (
    //   <div>
    //     <h1>welcome super admin</h1>
    //   </div>
    // ) : (
    //   <div>
    //     <h1>welcome Guest User</h1>
    //   </div>
    // );

    // simple if else condition approach 

    // if (this.state.isLogedin) {
    //   return (
    //     <div>
    //       <h1>welcome super admn</h1>
    //     </div>
    //   );
    // } else {
    //   return (
    //     <div>
    //       <h1>welcome Guest User</h1>
    //     </div>
    //   );
    // }

    // short circut approach 
    return this.state.isLogedin && <div><h1>Welcome Super admin</h1></div>
  }
}

export default UserGreeting;
