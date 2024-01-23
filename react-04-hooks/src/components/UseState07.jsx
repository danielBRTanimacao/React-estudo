import React, { useState } from "react";
import UseState07a from "./UseState07a";

export default () => {
    const [value, setValue] = useState([0, 0, 0]);

    function update(indc, uni) {
        const tmp = [...value];
        tmp[indc] = tmp[indc] + uni;
        setValue(tmp);
    }

    function decValue() {
        update(0, -1);
    }

    function valueInc() {
        update(0, 1);
    }
    function decValue1() {
        update(1, -1);
    }

    function valueInc1() {
        update(1, 1);
    }
    function decValue2() {
        update(2, -1);
    }

    function valueInc2() {
        update(2, 1);
    }

    return (
        <>
            <h3>
                <ul>
                    <li>{value[0]}</li>
                    <li>{value[1]}</li>
                    <li>{value[2]}</li>
                </ul>
            </h3>

            <UseState07a funcDec={decValue} funcInc={valueInc} />
            <UseState07a funcDec={decValue1} funcInc={valueInc1} />
            <UseState07a funcDec={decValue2} funcInc={valueInc2} />
        </>
    );
};
