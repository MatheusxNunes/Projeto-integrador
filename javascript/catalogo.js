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

    const listasCards = JSON.parse.apply(localStorage.getItem("catalogoCards")) || [];

    listasCards.forEach(function(card) {

        const novoCard = document.createElement("div");

        novoCard.classList.add("card");

            novoCard.innerHTML = '<img src"${card.imagemUrl}" class="card-img" alt="${card.titulo}"> <div class="card-body"> <h3 class="card-title"> <p>${card.descricao}</p> <p>${card.preco}</p> <button class="botao" >TENHO INTERESSE</button> </div>';

        containerCatalogo.appendChild(novoCard);
    });