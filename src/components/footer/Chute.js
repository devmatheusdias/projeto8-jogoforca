import React from "react";
import { useState } from "react";


export default function Chute({ array, chute, setChute }) {


    function mostrarPalavra() {
        let palavra = array.join("");

        if(palavra == chute){
            alert('Acertou!')
        }

    }



    return (
        <div className="forms-container">
            <span className="know-word">
                Já sei a palavra!
            </span>

            <input type="text" className="input" onChange={(event)=> setChute(event.target.value)}/>

            <button className="kick-button" onClick={mostrarPalavra}>Chutar</button>
        </div>
    );
}