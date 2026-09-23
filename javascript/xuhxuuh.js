//?

const FORM_CARD = document.getElementById("form-criar-card");

if (FORM_CARD){
    FORM_CARD.addEventListener("submit", function(event){
        event.preventDefault();

        const   novocard = {
            id: Date.now(),
            titulo: document.getElementById("titulo-ard").value,
            descricao: document.getElementById("descricao-card").value,
            preco: document.getElementById("preco-card").value,
            imagemUrl: document.getElementById("imagem-card").value,
        };

        const listaCards = JSON.parse(localStorage.getItem("catalogoCArds")) || [] 
        
        listaCards.push(novoCard);
        localStorage.setItem("catalogoCards", JSON.stringify(listaCards));

        alert("Item adicionado ao catálogo com sucesso!");
        window.location.href = "index.html";

    });

}

const  containerCatalogo = document.getElementById("container-catalogo");

if (containerCatalogo) {
    const listaCards = JSON.parse(localStorage.getItem("catalogoCards")) || []


    containerCatalogo.innerText = "";

        if(listaCards.length === 0) {
            containerCatalogo.innerText = '<p style="text-aling: center; grid-colum: 1/-1; color #7777;" >Nenhum item cadastrado ainda</p>; <span class="preco">RS $ {card-preco}</span></div>';
        }else {
            listaCards.forEach(function(card){
            const cardHTML = '<div class="card-item" data-id="${card.id}"><img src="${card.imagemUrl}" alt="${card-titulo}" onerror="this.src="`https://picsum.photos/300/200"><div> <h3>${card-titulo}</h3> <p>""{card-descricao}</p> <span class="preco">RS ${card-preco}</span> </div>';

            containerCatalogo.innerHTML += cardHTML;
        });
    }
}
