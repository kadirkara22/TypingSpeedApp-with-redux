import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { empty, getwords } from '../../redux/typerSpeedSlice';
import "./textContent.css"
const TextContent = () => {
    const items = useSelector(state => state.typer.items)
    const time = useSelector(state => state.typer.time)

    const dispatch = useDispatch();

    const selectWord = () => {

    }
    useEffect(() => {
        dispatch(getwords())
    }, [dispatch])


    return (
        <div className="text">
            <textarea className="textAlanı" value={items.join(" ")} onChange={(e) => e.target.value}></textarea>
        </div>
    )
}

export default TextContent
