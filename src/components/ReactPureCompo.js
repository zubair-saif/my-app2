import React, { PureComponent } from 'react'

export default class ReactPureCompo extends PureComponent {
    render() {
        console.log('@@@@@@######################## pure  Compont')
        return (
            <div>
                Pure Component {this.props.name}
            </div>
        )
    }
}
