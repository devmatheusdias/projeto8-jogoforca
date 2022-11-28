export default function BotaoLetra({letra, className, onclick}) {

    return (
        <button className={className} onClick={onclick}>{letra.toUpperCase()}</button>
    );
}
