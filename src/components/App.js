import React from "react";
import Jogo from "./body/Jogo"
import Letras from "./footer/Letras";
import Chute from "./footer/Chute";
import palavras from "../palavras";
import { useState } from "react";

function App() {


  // estado de botões habilitados / desabilitados
  const [state, setState] = useState("true");

  // contagem de erros
  const [erros, setErros] = useState(0);

  const [palavra, setPalavra] = useState("");

  // let palavra = palavras[Math.floor(Math.random() * (palavras.length-1))];

  // habilita os botões bloqueados
  function enabledComponents() {
    setState(""); //seta os atributos "disabled" dos botões para false

    setPalavra(palavras[Math.floor(Math.random() * (palavras.length-1))]); //seta uma palvra aleatoria
  }



  return (
    <div className="body">
      <Jogo enabledComponents={enabledComponents} palavra={palavra} state={state}></Jogo> {/* Passa a função de habilitar botões para o botão "escolher palavra*/}
      <Letras state={state}></Letras>
      <Chute state={state} palavra={palavra}></Chute>
    </div>

  );
}

export default App;
