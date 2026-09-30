const containerCatalogo = document.getElementById("container-catalogo");
 
const listaCards = JSON.parse(localStorage.getItem("catalogoCards")) || [];
 
listaCards.forEach(function(card) {
 
    const novoCard = document.createElement("div");
 
    novoCard.classList.add("card");
 
    novoCard.innerHTML = `
        <img
            src="${card.imagemUrl}"
            class="card-img"
            alt="${card.titulo}"
        >
 
        <div class="card-body">
 
            <h3 class="card-title">
                ${card.titulo}
            </h3>
 
            <p>
                ${card.descricao}
            </p>
 
            <p>
                R$ ${card.preco}
            </p>
 
            <button class="botao">
                TENHO INTERESSE
            </button>
 
        </div>
    `;
 
    containerCatalogo.appendChild(novoCard);
});