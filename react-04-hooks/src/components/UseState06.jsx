import React, { useCallback, useState } from "react";
import UseState06a from "./UseState06a";

export default () => {
    const [value, setValue] = useState(0);
    const [value1, setValue1] = useState(0);

    function decValue1() {
        setValue((oldValue) => oldValue - 5);
    }

    function decValue2() {
        setValue1((oldValue) => oldValue - 10);
    }

    function incDecValue1() {
        setValue((oldValue) => oldValue + 5);
    }

    function incDecValue2() {
        setValue1((oldValue) => oldValue + 10);
    }

    return (
        <>
            <h3>
                Adição de {value} + {value1} = <strong>{value + value1}</strong>
            </h3>
            <UseState06a funcInc={incDecValue1} funcDec={decValue1} />
            <UseState06a funcInc={incDecValue2} funcDec={decValue2} />
        </>
    );
};
