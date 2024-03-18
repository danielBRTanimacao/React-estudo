import React, { useState } from "react";
import "./UseState_11.css";
export default () => {
    const [state, setState] = useState(true);

    return (
        <>
            <h3>Exercicio 10</h3>
            <h4>Conditional rendering - Change Css CLass</h4>
            <hr />
            <button
                onClick={() => {
                    setState(!state);
                }}
            >
                Altera paragrafo
            </button>
            <p className={`paragraph ${state ? "class01" : "class02"}`}>
                Texto que vai ser alterado
            </p>
        </>
    );
};
