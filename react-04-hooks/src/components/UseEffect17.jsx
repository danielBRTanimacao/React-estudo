import React, { useState, useEffect } from "react";

export default () => {
    const [value, setValue] = useState(0);

    function incremento() {
        setValue(value + 1);
    }

    useEffect(() => {
        console.log("componente iniciado");
    }, [value]);

    return (
        <>
            <h1>UseEffect 01</h1>
            <button onClick={incremento}>Incrementar</button>
            <h3>{value}</h3>
        </>
    );
};
