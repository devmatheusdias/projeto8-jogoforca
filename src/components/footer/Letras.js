import Letra from "./Letra";

export default function Letras(props) {

    const letters = [
        {letter: "a", state: props.state},
        {letter: "b", state: props.state},
        {letter: "c", state: props.state},
        {letter: "d", state: props.state},
        {letter: "e", state: props.state},
        {letter: "f", state: props.state},
        {letter: "g", state: props.state},
        {letter: "h", state: props.state},
        {letter: "i", state: props.state},
        {letter: "j", state: props.state},
        {letter: "k", state: props.state},
        {letter: "l", state: props.state},
        {letter: "n", state: props.state},
        {letter: "o", state: props.state},
        {letter: "p", state: props.state},
        {letter: "q", state: props.state},
        {letter: "r", state: props.state},
        {letter: "s", state: props.state},
        {letter: "t", state: props.state},
        {letter: "u", state: props.state},
        {letter: "v", state: props.state},
        {letter: "w", state: props.state},
        {letter: "x", state: props.state},
        {letter: "y", state: props.state},
        {letter: "z", state: props.state},
    ]
   
    return (
        <div className="letters-container">
            <ul className="letters-list">
                {letters.map((letter) => <Letra letter={letter.letter.toUpperCase()}  state={letter.state} key={letter} />)}
            </ul>
        </div>
    );
}
