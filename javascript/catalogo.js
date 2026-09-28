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
 
if (containerCatalogo) {
 
    const listaCards = JSON.parse(localStorage.getItem("catalogoCards")) || [];
 
    listaCards.forEach(function(card) {
 
        const novoCard = document.createElement("div");
 
        novoCard.classList.add("card");
 
        novoCard.innerHTML = `
            <img src="${card.imagemUrl}" class="card-img" alt="${card.titulo}">
 
            <div class="card-body">
                <h3 class="card-title">${card.titulo}</h3>
                <p>${card.descricao}</p>
                <span class="preco">R$ ${card.preco}</span>
                <button class="botao">TENHO INTERESSE</button>
            </div>
        `;
 
        containerCatalogo.appendChild(novoCard);
    });
}