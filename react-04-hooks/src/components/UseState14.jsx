import React, { useState } from "react";

export default () => {
    const [text, setText] = useState("");
    const [nome, setNomes] = useState([]);

    function insert() {
        setNomes((prev) => [...prev, text]);
        setText("");
    }

    return (
        <>
            <h3>Exercicio 13</h3>
            <h4>Input data - collection</h4>
            <hr />
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button onClick={insert}>Inserir</button>
            <ul>
                {nome.map((data, index) => (
                    <li key={index}>{data}</li>
                ))}
            </ul>
        </>
    );
};
