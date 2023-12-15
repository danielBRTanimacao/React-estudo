import { useRef } from "react";

// React Hooks ferramentas para auxiliar
// useRef

function Home() {
    const input_text = useRef();

    function additingItens() {
        let text_input = document.querySelector("p#txtinput");
        text_input.innerHTML = input_text.current.value;
    }
    return (
        <div class="container pt-5 pb-5 mt-5 bg-dark">
            <h1 class="display-4 text-light">Lista de compras</h1>
            <div class="input-group w-50 pt-2">
                <input
                    class="form-control"
                    type="text"
                    placeholder="Produto..."
                    ref={input_text}
                />
                <button class="btn btn-primary" onClick={additingItens}>
                    Adicionar
                </button>
            </div>
            <div class="bg-light mt-5 w-50">
                <p class="p-2" id="txtinput"></p>
            </div>
        </div>
    );
}

export default Home;
