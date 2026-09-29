/*
const catalogo = document.querySelector(".calogo");

const itens = JSON.parse(localStorage.getItem("itensDoacao")) || [];

itens.forEach(function(itenm) {
    const card = document.createElement("div");

    card.classList.add("card");

    card.innerHTML = ' <img src="${item.imagem || "img/Midia (10).jpg"}" class="card-img" alt="${item.titulo}"><div class="card-body"><h3 class="card-title">${itenm.titulo}</h3><p>${item.descricao}</p><p>R$ ${item.preco}</p><button class="botao">Tenho interesse</button></div>;'

    catalogo.appendChild(card);
});
*/

const containerCatalogo = document.getElementById("container-catalogo");

const listaCards = JSON.parse(localStorage.getItem("catalogoCards")) || [];

const usuarioId = localStorage.getItem("usuarioId");


if (containerCatalogo) {

    listaCards.forEach(function(card) {
 
        const novoCard = document.createElement("div");
 
        novoCard.classList.add("card");
 
        novoCard.innerHTML = `
            <img src="${card.imagemUrl}" class="card-img" alt="${card.titulo}">
            <div class="card-body">
                <h3 class="card-title">${card.titulo}</h3>
                <p>${card.descricao}</p>
                <span class="preco">R$ ${card.preco}</span>
                ${card.usuarioId === usuarioId ? '<button class="botao-excluir" data-id="${card.id}">EXCLUIR</button>': ""}
            </div>`;
 
        containerCatalogo.appendChild(novoCard);
    });

    

    document.querySelectorAll(".botao-excluir").forEach(function(botao){

        botao.addEventListener("click", function(){
            const id = Number(this.dataset.id);
                let listaCard = JSON.parse(localStorage.getItem("catalogoCards")) || [];

                listaCards = listaCards.filter(function(card) {
                    return card.id !== id;
                });

                localStorage.setItem("catalogoCards", JSON.stringify(listaCards));

        this.closest(".card").remove();
        });
    });
}
         
        
        
    
