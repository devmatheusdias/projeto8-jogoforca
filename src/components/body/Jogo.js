import React from "react";

export default function Jogo({ forcaImagem, array, botoesClicados }) {

    function escolherPalavra(){
        
    }

    return (
        <main>
            <div>
                <img className="imagem-forca" src={forcaImagem} alt="" />

            </div>

            <div className="container-direito">
                <button className="escolher-palavra" onClick={escolherPalavra}>Escolher Palavra</button>
                <div className="lista-letra-oculta">
                    {array.map((letra) => <p className={`letra-oculta ${botoesClicados.includes(letra) && "letra-exposta"}`}>{letra}</p>)}
                </div>
            </div>
        </main>
    );
}

