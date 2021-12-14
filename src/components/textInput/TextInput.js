import React from 'react'
import TimerChange from './TimerChange'
import "./textInput.css"

const TextInput = () => {
    return (
        <div className="textInput">
            <div className="fromInput">
                <input className="input"></input>
            </div>
            <TimerChange />


        </div>
    )
}

export default TextInput
