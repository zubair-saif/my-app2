import React from 'react'

export default function ChildComponents(props) {
    return (
        <div>
            <button onClick={()=>{props.greetHandler('child')}}>greetParents</button>
        </div>
    )
}
