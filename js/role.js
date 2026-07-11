const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("click", () => {

        cards.forEach(c => c.classList.remove("selected"));

        card.classList.add("selected");

        const page = card.dataset.link;

        setTimeout(() => {

            window.location.href = page;

        },300);

    });

});