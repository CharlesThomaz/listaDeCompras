console.log("texto")
const formulario = document.getElementById("formulario");
const input = document.getElementById("produto");
const lista = document.querySelector("#lista");

formulario.addEventListener("submit", (event) => {
    event.preventDefault(); // Evita recarregar a página

    const valorProduto = input.value.trim(); // Pega o valor digitado e remove espaços

    if (valorProduto !== "") {
        const novoItem = document.createElement("li");
        novoItem.append(valorProduto);
        lista.append(novoItem);
        input.value = ""; // Limpa o campo após adicionar
        console.log(lista.textContent);
    } else {
        alert("Digite um produto válido!");
    }
});