import { useState } from "react";

export default () => {
    const [value, setValue] = useState(0);

    function diminuir() {
        setValue((valueOld) => valueOld - 1);
    }

    function aumentar() {
        setValue((valueOld) => valueOld + 1);
    }

    return (
        <>
            <h4>useState</h4>
            <h4>valor: {value}</h4>
            <button onClick={diminuir}>Diminuir</button>
            <button onClick={aumentar}>Aumentar</button>
        </>
    );
};
