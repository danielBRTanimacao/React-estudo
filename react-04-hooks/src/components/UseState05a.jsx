import { useState } from "react";

export default () => {
    const [value, setValue] = useState(0);

    function update() {
        setValue(5);
    }

    return (
        <>
            <h1>Value</h1>
            <h3>{value}</h3>
            <button onClick={update}>Atualizar</button>
        </>
    );
};
