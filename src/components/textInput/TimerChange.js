import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getwords, selectedWord, setTimer } from '../../redux/typerSpeedSlice';

const TimerChange = () => {

    const time = useSelector(state => state.typer.time)


    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(getwords())
        dispatch(selectedWord(""))

    }



    return (
        <div className="timer">
            <div className="dakika" >{time}</div>
            <div className="button">
                <button className="butonYenile" onClick={handleClick}>Yenile</button>
            </div>
        </div>
    )
}

export default TimerChange
