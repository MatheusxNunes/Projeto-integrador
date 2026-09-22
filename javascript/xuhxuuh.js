//?

const FORM_CARD = document.getElementById("form-criar-card");

if (FORM_CARD){
    FORM_CARD.addEventListener("submit", function(event){
        event.preventDefault();

        const   novocard = {
            id: Date.now(),
        }
    })
}

