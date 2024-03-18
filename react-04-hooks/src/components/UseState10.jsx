import React, { useState } from "react";

export default () => {
    const [tab, setTab] = useState(1);

    return (
        <>
            <h3>Exercicio 09</h3>
            <h4>Conditional rendering - Variable table</h4>
            <hr />
            <select
                name="select"
                id="select"
                onChange={(e) => setTab(parseInt(e.target.value))}
            >
                <option value="1">Tab 1</option>
                <option value="2">Tab 2</option>
                <option value="3">Tab 3</option>
            </select>
            {tab === 1 && <p>Tab 1</p>}
            {tab === 2 && <p>Tab 2</p>}
            {tab === 3 && <p>Tab 3</p>}
        </>
    );
};
