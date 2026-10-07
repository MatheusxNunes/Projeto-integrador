const formulario = document.getElementById("form-criar-card");
 
formulario.addEventListener("submit", function(event) {
    event.preventDefault();
 
    const novoCard = {
        id: Date.now(),
        titulo: document.getElementById("titulo-card").value,
        preco: document.getElementById("preco-card").value,
        imagemUrl: document.getElementById("imagem-card").value,
        descricao: document.getElementById("descricao-card").value,
        categoria: document.getElementById("categoria-card").value,//mudei aqui 
        


    };
 
    let listaCards = JSON.parse(localStorage.getItem("catalogoCards")) || [];
 
    listaCards.push(novoCard);
 
    localStorage.setItem("catalogoCards", JSON.stringify(listaCards));
 
    alert("Anúncio adicionado ao catálogo!");
 
    window.location.href = "produto.html";
});