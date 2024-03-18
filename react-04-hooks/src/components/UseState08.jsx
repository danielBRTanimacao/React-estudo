import React, { useState } from "react";

export default () => {
    const [client, SetClient] = useState({
        nameClient: "",
        nickname: "",
        city: "",
        email: ""
    });

    return (
        <>
            <h3>Exercicio 07</h3>
            <hr />
            <button
                onClick={() => {
                    const objClient = { ...client };
                    objClient.nameClient = "Daniel";
                    SetClient(objClient);
                }}
            >
                Nome
            </button>

            <button
                onClick={() => {
                    const objClient = { ...client };
                    objClient.nickname = "Mamute";
                    SetClient(objClient);
                }}
            >
                Apelido
            </button>

            <button
                onClick={() => {
                    const objClient = { ...client };
                    objClient.city = "Iati";
                    SetClient(objClient);
                }}
            >
                Cidade
            </button>

            <button
                onClick={() => {
                    const objClient = { ...client };
                    objClient.email = "cururu@gmail.com";
                    SetClient(objClient);
                }}
            >
                Email
            </button>

            <hr />

            <div>{client.nameClient}</div>
            <div>{client.city}</div>
            <div>{client.nickname}</div>
            <div>{client.email}</div>
        </>
    );
};
