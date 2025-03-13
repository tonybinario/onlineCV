let slideIndex = 1;
showDivs(slideIndex);
// Alle Bilder auswählen
const images = document.querySelectorAll('.mySlides');

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    let i;
    let x = document.getElementsByClassName("mySlides");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length}
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex-1].style.display = "block";
}

// Event-Listener hinzufügen, um den Vollbildmodus zu aktivieren
images.forEach(image => {
    image.addEventListener('click', function() {
        this.classList.toggle('fullscreen');
    });
});
