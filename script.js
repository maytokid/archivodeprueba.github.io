const messageText = document.getElementById("message-text");
const message = "PARA MI PSICÓLOGO FAVORITO";
const heart = "❤️";
const colors = ["red", "green", "blue", "orange", "purple"];
let currentIndex = 0;

function displayMessage() {
    if (currentIndex < message.length) {
        const color = colors[currentIndex % colors.length];
        const letter = message[currentIndex];
        const span = document.createElement("span");
        span.style.color = color;
        span.textContent = letter;
        messageText.appendChild(span);
        currentIndex++;
        setTimeout(displayMessage, 100); // Intervalo de tiempo (en milisegundos) entre cada letra
    } else {
        messageText.innerHTML += heart; // Agregar el corazón al final
    }
}

displayMessage();
