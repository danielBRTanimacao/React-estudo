import React from "react";

import Article from "./components/Article";

export default function App() {
    let array = [
        {
            id: 1,
            title: "Um",
            subtitle: "Sub Um"
        },
        {
            id: 2,
            title: "Dois",
            subtitle: "Sub dois"
        },
        {
            id: 3,
            title: "Três",
            subtitle: "Sub três"
        },
        {
            id: 4,
            title: "Quatro",
            subtitle: "Sub quatro"
        },
        {
            id: 5,
            title: "Cinco",
            subtitle: "Sub cinco"
        },
        {
            id: 6,
            title: "Seis",
            subtitle: "Sub seis"
        },
        {
            id: 7,
            title: "Sete",
            subtitle: "Sub sete"
        },
        {
            id: 7,
            title: "Oito",
            subtitle: "Sub oito"
        }
    ];

    let conteudo = array.map((artigos) => (
        <Article
            id={artigos.id}
            titulo={artigos.title}
            subtitulo={artigos.subtitle}
        />
    ));

    return (
        <>
            <h1>Hello</h1>
            {conteudo}
        </>
    );
}
