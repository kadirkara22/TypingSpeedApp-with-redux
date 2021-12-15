import React, { useEffect, useState } from 'react'
import TimerChange from './TimerChange'
import "./textInput.css"
import { useDispatch, useSelector } from 'react-redux'
import { selectedWord, setTime } from '../../redux/typerSpeedSlice'

const TextInput = () => {


    const words = useSelector(state => state.typer.words)
    const isStarted = useSelector(state => state.typer.isStarted)
    const time = useSelector(state => state.typer.time)
    const dispatch = useDispatch()
    const handleChange = (e) => {
        dispatch(selectedWord(e.target.value))
    }
    let timer = null;
    const start = () => {
        clearInterval(timer);
        timer = setInterval(() => {
            dispatch(setTime(timer))
        }, 1000)
    }
    console.log(time)
    const handleSubmit = (e) => {
        if (e.key && isStarted === false) {
            start();
        }

    }



    return (
        <div className="textInput">
            <div className="fromInput">
                <input className="input" onChange={handleChange} onKeyDown={handleSubmit}></input>
            </div>
            <TimerChange />


        </div>
    )
}

export default TextInput
