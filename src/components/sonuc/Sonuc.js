import React from 'react'
import { useSelector } from 'react-redux'
import "./sonuc.css"
const Sonuc = () => {
    const time = useSelector(state => state.typer.time)
    const correct = useSelector(state => state.typer.correct)
    const wrong = useSelector(state => state.typer.wrong)
    const keyCorrect = useSelector(state => state.typer.keyCorrect)
    const keyWrong = useSelector(state => state.typer.keyWrong)


    return (
        <>
            {
                time === 0 && <div className="sonuc">
                    <div className="table">
                        <div className="title">
                            <div className="title1">Sonuç</div>
                            <div className="ekran">Ekran Görüntüsü</div>
                        </div>
                        <div className="countTotal">
                            <div className="count">{Math.ceil(keyCorrect / 5)} DKS</div>
                            <div className="description">(kelime yazabiliyorum)</div>
                        </div>
                        <div className="info tus">
                            <div>Tuş vuruşu</div>
                            <div className="keycount">(<span style={{ marginRight: "10px" }}>{keyCorrect}</span> | <span style={{ color: "red", marginLeft: "10px" }}>{keyWrong}</span>) <span style={{ fontSize: "25px", marginLeft: "10px" }}>{keyCorrect + keyWrong}</span></div>
                        </div>
                        <div className="info correct">
                            <div>Doğruluk</div>
                            <div className="oran" >{Math.round((correct / (correct + wrong)) * 100)} %</div>
                        </div>

                        <div className="info correctWord">
                            <div>Doğru kelime</div>
                            <div className="correctCount">{correct}</div>
                        </div>
                        <div className="info wrongWord">
                            <div>Yanlış kelime</div>
                            <div className="wrongCount">{wrong}</div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default Sonuc
