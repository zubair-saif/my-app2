import React, { Component } from 'react'

export class RegularComp extends Component {
    render() {
        console.log('@@@@@@######################## RegularComp')
        return (
            <div>
                RegularComp {this.props.name}
            </div>
        )
    }
}

export default RegularComp
