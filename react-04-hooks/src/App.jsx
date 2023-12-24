import { useState } from "react";

export default () => {
    const [value, setValor] = useState(0);

    function aumentar() {
        setValor((oldValue) => oldValue + 1);
    }

    return (
        <>
            <h1>Titulo</h1>
            <p>Valor: {value}</p>
            <p>Valor: {value}</p>
            <button onClick={aumentar}>Aumentar valor</button>
        </>
    );
};
