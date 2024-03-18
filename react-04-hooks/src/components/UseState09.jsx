import React, { useState } from "react";

export default () => {
    const [login, SetLogin] = useState(false);
    const [btnText, SetbtnText] = useState("Logar");

    return (
        <>
            <h3>Exercicio 08</h3>
            <h4>Conditional rendering - Fake login</h4>
            <hr />

            <button
                onClick={() => {
                    SetLogin(!login);
                    SetbtnText(login ? "Login" : "Sair");
                }}
            >
                {btnText}
            </button>

            {login && <p>Usuario logado!</p>}
        </>
    );
};
