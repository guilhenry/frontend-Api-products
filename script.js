const apiUrl = "http://localhost:8080/Api/Product";

// Função para capturar dados e cadastrar produto
document.getElementById('btnCadastrar').addEventListener('click', function() {
    // Captura os valores dos campos
    const produtoId = document.getElementById('productId').value;
    const produtoNome = document.getElementById('productName').value;
    const produtoPreco = document.getElementById('productValue').value;

    // Validação simples para garantir que os campos não estão vazios
    if (produtoId === "" || produtoNome === "" || produtoPreco === "") {
        alert("Por favor, preencha todos os campos!");
        return;
    }

    // Montar o objeto produto
    const produto = {
        id: parseInt(produtoId),  // Converter para número
        name: produtoNome,        // Já é string
        preco: parseFloat(produtoPreco)
    }
    console.log("JSON do produto:", JSON.stringify(produto));//confirmando que o json foi enviado.

    // Enviar o produto via requisição POST para a API
    fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',  // Definir o tipo de conteúdo
        },
        
        body: JSON.stringify(produto),
          // Converter o objeto produto para JSON
    })
    .then(response => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error('Erro ao cadastrar produto.');
        }
    })
    .then(data => {
        console.log("Produto cadastrado com sucesso:", data);
        alert("Produto cadastrado com sucesso!");
    })
    .catch(error => {
        console.error("Erro ao conectar com a API:", error);
        alert("Erro ao cadastrar produto!");
    });
});