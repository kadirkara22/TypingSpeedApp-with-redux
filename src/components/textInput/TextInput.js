import React, { useEffect, useState } from 'react'
import TimerChange from './TimerChange'
import "./textInput.css"
import { useDispatch, useSelector } from 'react-redux'
import { decreaseKeyWrong, decreaseWrong, increaseCorrect, increaseKeyCorrect, selectedWord, setCurrentChar, setIndex, setTime } from '../../redux/typerSpeedSlice'

const TextInput = () => {


    const words = useSelector(state => state.typer.words)
    const items = useSelector(state => state.typer.items)
    const time = useSelector(state => state.typer.time)
    const currentIndex = useSelector(state => state.typer.currentIndex)
    const isStarted = useSelector(state => state.typer.isStarted)



    const dispatch = useDispatch()

    const handleChange = (e) => {
        dispatch(selectedWord(e.target.value))

    }

    let interval = null;
    const start = () => {
        clearInterval(interval);
        interval = setInterval(() => {
            dispatch(setTime(interval))
        }, 1000)
    }

    const handleKeyDown = (e) => {

        if (e.key === " ") {
            checkWord();
            dispatch(selectedWord(""))
            dispatch(setIndex())
        } else {
            dispatch(setCurrentChar(e.key))
        }

        if (e.key && isStarted === false) {
            start();
        }

    }

    const checkWord = () => {
        const wordToCompare = items[currentIndex];
        const isCompare = wordToCompare === words.trim();

        if (isCompare) {
            dispatch(increaseCorrect())
            dispatch(increaseKeyCorrect(wordToCompare.length))
        } else {
            dispatch(decreaseWrong())
            dispatch(decreaseKeyWrong(wordToCompare.length))
        }

    }


    return (
        <div className="textInput">
            <div className="fromInput">
                <input className="input" type="text" onChange={handleChange} onKeyDown={handleKeyDown} value={time === 0 ? "" : words}></input>
            </div>
            <TimerChange />


        </div>
    )
}

export default TextInput
