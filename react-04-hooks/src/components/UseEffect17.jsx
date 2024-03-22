import React, { useState, useEffect } from "react";

export default () => {
    const [value, setValue] = useState(0);
    const [name, setName] = useState("");

    function incremento() {
        setValue(value + 1);
    }

    function defName() {
        setName("Daniel");
    }

    useEffect(() => {
        console.log("Executar apenas no arranque do componente");
    }, []);

    useEffect(() => {
        console.log("Executar apenas na alteração do VALUE");
    }, [value]);

    useEffect(() => {
        console.log("Executar apenas na alteração do Name");
    }, [name]);

    return (
        <>
            <h1>UseEffect 01</h1>
            <button onClick={incremento}>Incrementar</button>
            <h3>{value}</h3>
            <button onClick={defName}>Definir nome</button>
            <h3>{name}</h3>
        </>
    );
};
