import Letter from "./Letter";

export default function LettersList() {

    const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

    return (
        <div className="letters-container">
            <ul className="letters-list">
                {letters.map((letter) => <Letter letter={letter} />)}
            </ul>
        </div>
    );
}
