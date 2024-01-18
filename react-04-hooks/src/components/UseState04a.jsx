import React from "react";
import { useState } from "react";

export default ({ unit }) => {
    const [value, setValue] = useState(0);

    const minus = () => {
        setValue((oldValue) => oldValue - unit);
    };

    const more = () => {
        setValue((oldValue) => oldValue + unit);
    };

    return (
        <>
            <button onClick={minus}>-</button>
            <h3>
                Valor: <strong>{value}</strong>
            </h3>
            <button onClick={more}>+</button>
        </>
    );
};
