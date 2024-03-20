import React, { useState } from "react";

export default () => {
    const [text, setText] = useState("");

    return (
        <>
            <h3>Exercicio 13</h3>
            <h4>Input data</h4>
            <hr />
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <p>{text}</p>
        </>
    );
};
