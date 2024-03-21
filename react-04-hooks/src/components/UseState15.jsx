import React, { useState } from "react";

export default () => {
    const [count, setCount] = useState(0);

    const handClick = () => {
        setCount((prevCount) => prevCount + 1);
    };

    console.log("Component renderizado");

    return (
        <>
            <div>
                <p>Count: {count}</p>
                <button onClick={handClick}>clique</button>
            </div>
        </>
    );
};
