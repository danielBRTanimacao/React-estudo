import React from "react";
import { useState } from "react";
import UseState05a from "./UseState05a";

export default () => {
    const [value, setValue] = useState(0);

    function update() {
        setValue(1000);
    }

    return (
        <>
            <h1>Exercicio 03</h1>
            <h3>
                Valor: <strong>{value}</strong>
            </h3>
            <hr />
            <div>
                <UseState05a func={update} />
            </div>
        </>
    );
};
