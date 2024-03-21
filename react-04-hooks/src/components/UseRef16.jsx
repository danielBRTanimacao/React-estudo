import React, { useRef } from "react";

export default () => {
    const value = useRef(0);
    console.log("Componente renderizado useRef");

    const incremento = () => {
        value.current = value.current + 1;
    };

    return (
        <>
            <h3>React Hooks - UseRef</h3>
            <p>Valor: {value.current}</p>
            <button onClick={incremento}>incremento</button>
        </>
    );
};
