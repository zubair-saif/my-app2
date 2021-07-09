import React, { Component } from 'react'
import ChildComponents from './ChildComponents'

class ParentsComponents extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             parentName:'Parents'
        }
        this.greetParents=this.greetParents.bind(this)
    }
    
    greetParents(child){
     alert(`Hello ${this.state.parentName} from ${child}`)
    }

    render() {
        return (
            <div>
               <ChildComponents greetHandler={this.greetParents}/>
            </div>
        )
    }
}

export default ParentsComponents
