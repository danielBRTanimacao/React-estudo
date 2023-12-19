import React from "react";
import Dados from "./components/Dados";

import "./assets/css/Style.css";

export default function App() {
    // Todos os componentes devem começar com letra maiuscula
    return (
        <>
            <h1>Aplicando css</h1>
            <h2 className="cor-text">Mais textos com css</h2>
            <Dados />
        </>
    );
}
