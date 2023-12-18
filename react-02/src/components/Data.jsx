export default function Data() {
    let nome = "Bico Seco";
    let cliente = {
        name: nome,
        email: nome + "@gmail.com"
    };

    return (
        <>
            <p>Nome do cliente: {cliente.name}</p>
            <p>Email do cliente: {cliente.email}</p>
        </>
    );
}
