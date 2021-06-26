import React from 'react'
import rul from '../images/rules-JANKEN2.jpg'

const Rules = (props) => {
    return (
        <div 
        style={{visibility:props.visib}}
        className="rules"
        >
            <img src={rul} alt="" />
        </div>
    )
}

export default Rules
