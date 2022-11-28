import { useState } from "react";
import BotaoLetra from "./BotaoLetra";

let cont = 0;

export default function Letras({ alfabeto, botoesClicados, setBotoesClicados, setForcaImagem, array }) {


  function clicouBotao(letra) {

    if (!botoesClicados.includes(letra)) {
      setBotoesClicados([...botoesClicados, letra]);

      for (let index = 0; index < array.length; index++) {
        if (letra == array[index]) {
        } else if (index == array.length - 1) {
          cont++;
          setForcaImagem(`/assets/img/forca${cont}.png`)
          alert(cont)
        }
      }
    }

  }

  return (
    <div className="letras-container">
      <ul className="letras-lista">
        {alfabeto.map((letra) => <BotaoLetra className={`letra ${botoesClicados.includes(letra) && "letra-disabled"}`} letra={letra} onclick={() => { clicouBotao(letra) }} ></BotaoLetra>)}
      </ul>
    </div>
  );


}
