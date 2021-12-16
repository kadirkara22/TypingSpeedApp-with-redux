import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getwords } from '../../redux/typerSpeedSlice';
import "./textContent.css"
const TextContent = () => {
    const items = useSelector(state => state.typer.items)
    const words = useSelector(state => state.typer.words)
    const time = useSelector(state => state.typer.time)
    const correct = useSelector(state => state.typer.correct)
    const wrong = useSelector(state => state.typer.wrong)
    const currentIndex = useSelector(state => state.typer.currentIndex)
    const currentCharIndex = useSelector(state => state.typer.currentCarIndex)
    const currentChar = useSelector(state => state.typer.currentChar)


    const dispatch = useDispatch();


    /*   const charStatus = (i, index, char, word) => {
  
  
          if (i === currentIndex && index === currentCharIndex && currentChar) {
  
              if (char === currentChar) {
                  wordStatus(i, word)
              }
              else {
                  wordStatus(i, word)
              }
  
          } else {
              return ""
          }
  
      } */
    const wordStatus = (i, word) => {
        if (i === currentIndex) {
            return "success"
        }
        for (i = 0; i < items.length; i++) {
            if (items[i] === words) {
                return word
            }
            /*   if (i === currentIndex && items[i] !== words) {
                  return "wordWrong"
              } */
        }


    }


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
                                <span key={i} >
                                    <span className={wordStatus(i, word)}>

                                        {
                                            word.split("").map((char, index) => (
                                                <span /* className={charStatus(i, index, char, word)} */ key={index}>{char}</span>
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
