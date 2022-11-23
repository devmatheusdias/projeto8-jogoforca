import React from "react";

export default function Jogo(props) {

    const { enabledComponents, palavra, state} = props

    const arrayPalavra = [...palavra];


    return (
        <main>
            <div>
                <img className="gallows-image" src="/assets/img/forca0.png" alt="" />
            </div>

            <div className="right-container">
                <button className={`choose-word ${state ? "" : "disabled-chose-word"}`} onClick={enabledComponents} disables={state}>Escolher Palavra</button>
                <div className="container-hidden-word">
                        {arrayPalavra.map((letra) => <HiddenWord palavra={letra}></HiddenWord>)}
                        {/* <HiddenWord palavra={arrayPalavra}></HiddenWord> */}

                </div>

            </div>

        </main>
    );
}

function HiddenWord(props) {
    const {palavra} = props;

    return (
        <div className="hidden-word">{palavra}</div>
    );
}