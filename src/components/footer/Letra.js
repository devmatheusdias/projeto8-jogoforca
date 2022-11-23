export default function Letra(props) {

    const {letter, state} = props

    function alertar(){
        alert('HEllo!')
    }

    return (
        <button className={`letter ${state ? "" : "letter-enabled"}`} disabled={state} onClick={alertar} >
            {letter}
        </button>
    );
}
