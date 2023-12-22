import React from "react";

import Article from "./components/Article";

export default function App() {
    let array = [
        {
            title: "Um",
            subtitle: "Sub Um"
        },
        {
            title: "Dois",
            subtitle: "Sub dois"
        }
    ];

    return (
        <>
            <h1>Hello</h1>
            <Article title={array[0].title} subtitle={array[0].subtitle} />
            <Article title={array[1].title} subtitle={array[1].subtitle} />
            <Article title="Noticia dois" subtitle="bico seco Papoca" />
        </>
    );
}
