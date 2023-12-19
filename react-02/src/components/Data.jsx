export default function Data() {
    let nome = "Bico Seco";
    let cliente = {
        name: nome,
        email: nome + "@gmail.com"
    };

    let a = 12;
    let b = 23;

    function add(a, b) {
        return a + b;
    }

    return (
        <>
            <p>Nome do cliente: {cliente.name}</p>
            <p>Email do cliente: {cliente.email}</p>
            <p>
                A soma de {a} + {b} = {add(a, b)}
            </p>
        </>
    );
}
