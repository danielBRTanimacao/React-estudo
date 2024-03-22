import React, { useState, useEffect, useRef } from "react";

export default () => {
    const [value, setValue] = useState(0);
    const renderInitRef = useRef(true);

    function incremento() {
        setValue(value + 1);
    }

    useEffect(() => {
        if (renderInitRef.current) {
            renderInitRef.current = false;
        } else {
            console.log("Renderizado primeira chamada");
        }
    }, [value]);

    return (
        <>
            <h1>UseEffect 01</h1>
            <button onClick={incremento}>Incrementar</button>
            <h3>{value}</h3>
        </>
    );
};
