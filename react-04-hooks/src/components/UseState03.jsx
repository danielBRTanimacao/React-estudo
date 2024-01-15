import { useState } from "react";

export default () => {
    const [value1, setValue1] = useState(1);
    const [value2, setValue2] = useState(2);

    function diminuir(func) {
        func((oldValue) => oldValue - 1);
    }

    function aumentar(func) {
        func((oldValue) => oldValue + 1);
    }

    return (
        <>
            <h4>useState - Exercicio 1 Aula 16</h4>

            <p>{value1}</p>
            <button onClick={() => diminuir(setValue1)}>-</button>
            <button onClick={() => aumentar(setValue1)}>+</button>
            <hr />
            <p>{value2}</p>
            <button onClick={() => diminuir(setValue2)}>-</button>
            <button onClick={() => aumentar(setValue2)}>+</button>
            <hr />
            <p>
                O resultado de {value1} X {value2} = {value1 * value2}
            </p>
        </>
    );
};
