import React, { useState } from "react";

import CompA from "./UseState12a";
import CompB from "./UseState12b";

export default () => {
    const [state, SetState] = useState(true);

    return (
        <>
            <h3>Exercicio 12</h3>
            <h4>Conditional rendering - Change Component</h4>
            <hr />
            <button
                onClick={() => {
                    SetState(!state);
                }}
            >
                Change component
            </button>
            {state ? <CompA /> : <CompB />}
        </>
    );
};
