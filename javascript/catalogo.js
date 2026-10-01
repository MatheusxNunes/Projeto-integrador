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

const formBusca = document.querySelector('.busca');
const campoBusca = document.querySelector('.busca-campo');
const itensCatalogo = document.querySelectorAll('.card');

// Verificar se o formulário de busca existe
if (formBusca) {

    formBusca.addEventListener('submit', function(event) {
        event.preventDefault();
    });
}

// Verificar o texto que foi digitado
if (campoBusca) {
    campoBusca.addEventListener('input', function() {

        // Pegar o texto digitado
        const termoBusca = campoBusca.value.toLowerCase();

        // Verificar todos os produtos
        itensCatalogo.forEach(function(item) {

            // Pegar o nome do produto
            const titulo = item.querySelector('h3').innerText.toLowerCase();

            // Verificar se o produto corresponde à pesquisa
            if (titulo.includes(termoBusca)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }

        });

    });

}