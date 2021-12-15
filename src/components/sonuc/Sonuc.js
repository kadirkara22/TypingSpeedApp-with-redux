import React from 'react'
import { useSelector } from 'react-redux'
import "./sonuc.css"
const Sonuc = () => {
    const time = useSelector(state => state.typer.time)

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
                            <div className="count">0 DKS</div>
                            <div className="description">(kelime yazabiliyorum)</div>
                        </div>
                        <div className="info tus">
                            <div>Tuş vuruşu</div>
                            <div className="keycount">(<span style={{ marginRight: "10px" }}>0</span> | <span style={{ color: "red", marginLeft: "10px" }}>0</span>) <span style={{ fontSize: "25px", marginLeft: "10px" }}>0</span></div>
                        </div>
                        <div className="info correct">
                            <div>Doğruluk</div>
                            <div className="oran" >NAN%</div>
                        </div>

                        <div className="info correctWord">
                            <div>Doğru kelime</div>
                            <div className="correctCount">0</div>
                        </div>
                        <div className="info wrongWord">
                            <div>Yanlış kelime</div>
                            <div className="wrongCount">0</div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default Sonuc
