import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getwords } from '../../redux/typerSpeedSlice';
import "./textContent.css"
const TextContent = () => {
    const items = useSelector(state => state.typer.items)
    const time = useSelector(state => state.typer.time)
    const correct = useSelector(state => state.typer.correct)
    const wrong = useSelector(state => state.typer.wrong)

    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getwords())
    }, [dispatch])

    return (
        <>
            {
                time !== 0 && <div className="text">
                    <div className="textAlanı">
                        {
                            items.map((word, i) => (
                                <span key={i}>
                                    <span>
                                        {
                                            word.split("").map((char, index) => (
                                                <span className={correct && "correctWord" || wrong && "wrongWord"} key={index}>{char}</span>
                                            ))
                                        }
                                    </span>
                                    <span> </span>
                                </span>
                            ))
                        }
                    </div>
                </div>
            }
        </>
    )
}

export default TextContent
