import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

ReactDOM.createRoot(document.querySelector("#root")).render(
    <React.StrictMode>
        {/*Modo sctictmode deve ser removido na aplicação final!
        Da pra usar uma DIV ou um FRAGMENT ou <> </> simplemente*/}
        <App />
    </React.StrictMode>
);
