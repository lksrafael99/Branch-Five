// Quando a página carregar, mostra o conteúdo suavemente.
document.addEventListener("DOMContentLoaded", function () {
    const content = document.querySelector("#home-content");
    content.classList.add("is-visible");

    // Ao clicar no botão, vai até a seção da equipe.
    const button = document.querySelector("#team-button");
    const team = document.querySelector("#team");

    button.addEventListener("click", function (event) {
        event.preventDefault();
        team.scrollIntoView({ behavior: "smooth" });
    });
});
