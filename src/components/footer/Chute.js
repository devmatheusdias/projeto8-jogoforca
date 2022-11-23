import React from "react";
import { useState } from "react";

export default function Chute(props) {

    const {state, palavra} = props;

    function mostrarPalavra() {
        alert(palavra)
    }

    return (
        <div className="forms-container">
            <span className="know-word">
                Já sei a palavra!
            </span>

            <input type="text" className={`input ${state ? "" : "input-enabled"}`} disabled={state}/>

            <button className="kick-button" onClick={mostrarPalavra}>Chutar</button>
        </div>
    );
}