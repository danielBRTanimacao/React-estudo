import { useRef, useState } from "react";
import { v4 } from "uuid";

// React Hooks ferramentas para auxiliar
// useRef
// useState / estado -> É uma variavel que quando os valores são trocados a tela ira "recarregar os valores"

function Home() {
    const [products, setProducts] = useState([]);
    const input_text = useRef();

    function additingItens() {
        setProducts({ id: v4(), name: input_text.current.value }, ...products);
        // let text_input = document.querySelector("p#txtinput");
        // products.push(input_text.current.value);
        // text_input.innerHTML = products;
    }
    return (
        <div className="container pt-5 pb-5 mt-5 bg-secondary">
            <h1 className="display-4 text-light">Lista de compras</h1>
            <div className="input-group w-50 pt-2">
                <input
                    class="form-control"
                    type="text"
                    placeholder="Produto..."
                    ref={input_text}
                />
                <button className="btn btn-primary" onClick={additingItens}>
                    Adicionar
                </button>
            </div>
            {products.map((product) => (
                <div className="text-light bg-primary" key={product.id}>
                    {product.name}
                </div>
            ))}
            {/* <div class="bg-light mt-5 w-50">
                <p class="p-2" id="txtinput"></p>
            </div> */}
        </div>
    );
}

export default Home;
