//Slideshow Bilder

let slideIndex = 1;
showImages(slideIndex);

function plusImg(n) {
    showImages(slideIndex += n);
}

function showImages(n) {
    let i;
    let x = document.getElementsByClassName("mySlides");
    if (n > x.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = x.length }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex - 1].style.display = "block";
}

//-------------------------------------------------------------------------------------------------------------------
// Alle Bilder auswählen
const images = document.querySelectorAll('.mySlides');

const slideContainer = document.querySelector('.slide-container');
let isFullscreen = false;
const fullscreenBtn = document.querySelector('.fullscreen-btn');

// Funktion für den Vollbildmodus
function openFullscreen() {
    if (!isFullscreen) {
        slideContainer.classList.add('fullscreen');
        fullscreenBtn.style.display = "none";

        // Schließen-Button erstellen
        const closeButton = document.createElement('button');
        closeButton.innerHTML = "&#10005;"; // "X" Symbol
        closeButton.classList.add('close-fullscreen');
        closeButton.onclick = closeFullscreen;

        slideContainer.appendChild(closeButton);
        isFullscreen = true;
    }
}

// Funktion zum Schließen des Vollbildmodus
function closeFullscreen() {
    slideContainer.classList.remove('fullscreen');
    const closeButton = document.querySelector('.close-fullscreen');
    if (closeButton) {
        closeButton.remove();
    }
    isFullscreen = false;
    fullscreenBtn.style.display = "block";
}

// Klick-Event für den Vollbildmodus aktivieren (Vollbild-Symbol)
fullscreenBtn.addEventListener('click', openFullscreen);

