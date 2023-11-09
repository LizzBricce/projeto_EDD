document.addEventListener("DOMContentLoaded", function() {
    var tutorialContent = document.getElementById("tutorial-content");
    var tutorialButton = document.getElementById("tutorialButton");
    var currentIndex = 0; 

    var tutoriais = [
        "Tutorial para mover o personagem: Use as setas do teclado para mover para a direita, esquerda, cima e baixo.",
        "Tutorial para atirar: Pressione a barra de espaço para atirar.",
        "Tutorial para saltar: Pressione 'S' para saltar.",
    ];

    tutorialButton.addEventListener("click", function() {
        if (currentIndex < tutoriais.length - 1) {
            tutorialContent.innerText = tutoriais[++currentIndex]; 
        } else {
            window.location.href = "jogo.html";
        }
    });
});
