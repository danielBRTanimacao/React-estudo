import React, { useState, useEffect, useRef } from "react";

export default () => {
    const [paises, setPaises] = useState([]);
    const pathApiRef = useRef("https://restcountries.com/v3.1/all");

    // https://restcountries.com/v3.1/all

    useEffect(() => {
        fetch(pathApiRef.current)
            .then((response) => response.json())
            .then((data) => setPaises(data));
    }, []);

    return (
        <>
            <h1>UseEffect api</h1>
            <h3>Apresentar lista de paises da api</h3>
            <ul>
                {paises.map((pais) => (
                    <li key={pais.cca2}>{pais.name.common}</li>
                ))}
            </ul>
        </>
    );
};
