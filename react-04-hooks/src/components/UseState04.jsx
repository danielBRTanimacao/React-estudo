import React from "react";
import { useState } from "react";

import UseState04a from "./UseState04a";

import "./UseState_04.css";

export default () => {
    return (
        <>
            <h1>EXERCICIO 04</h1>
            <div className="layout">
                <UseState04a unit={1} />
                <UseState04a unit={5} />
                <UseState04a unit={10} />
            </div>
        </>
    );
};
