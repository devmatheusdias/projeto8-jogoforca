import React from "react";
import Jogo from "./body/Jogo"
import Letras from "./footer/Letras";
import Chute from "./footer/Chute";
import {alfabeto} from "../alfabeto"
import palavras from "../palavras"
import { useState } from "react";

let array = Array.from(palavras[Math.floor(Math.random() * palavras.length)]);

function App() {

  const [botoesClicados, setBotoesClicados] = useState([]);
  
  const [forcaImagem, setForcaImagem] = useState(`/assets/img/forca${0}.png`);

  const [chute, setChute] = useState();


  return (
    <div className="body">
      <Jogo forcaImagem={forcaImagem} setForcaImagem={setForcaImagem} array={array} botoesClicados={botoesClicados}></Jogo>

      <Letras alfabeto={alfabeto} botoesClicados={botoesClicados} setBotoesClicados={setBotoesClicados} setForcaImagem={setForcaImagem} array={array}></Letras>
      

      <Chute array={array} chute={chute} setChute={setChute}></Chute>
    </div>

  );
}

export default App;
