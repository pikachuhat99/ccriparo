document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');
    
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        menu.classList.toggle('active');
    });

    // Chiudi il menu quando si clicca su un link
    document.querySelectorAll('.menu a').forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            menu.classList.remove('active');
        });
    });

    // Chiudi il menu quando si clicca fuori
    document.addEventListener('click', (e) => {
        if (!menu.contains(e.target) && !menuToggle.contains(e.target)) {
            menuToggle.classList.remove('active');
            menu.classList.remove('active');
        }
    });
});

let slideIndex = 1;
let slideInterval;

// Inizializza lo slideshow
function initializeSlideshow() {
    showSlides(slideIndex);
    // Avvia l'autoplay
    startAutoPlay();
}

// Funzione per il controllo manuale delle slide
function plusSlides(n) {
    stopAutoPlay();
    showSlides(slideIndex += n);
    startAutoPlay();
}

// Funzione per selezionare una slide specifica
function currentSlide(n) {
    stopAutoPlay();
    showSlides(slideIndex = n);
    startAutoPlay();
}

// Funzione principale per mostrare le slide
function showSlides(n) {
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");
    
    // Gestione dell'indice circolare
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    
    // Nascondi tutte le slide
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    // Rimuovi la classe active da tutti i dots
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    
    // Mostra la slide corrente e attiva il dot corrispondente
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}

// Funzione per l'autoplay
function startAutoPlay() {
    slideInterval = setInterval(function() {
        plusSlides(1);
    }, 5000); // Cambia slide ogni 5 secondi
}

// Funzione per fermare l'autoplay
function stopAutoPlay() {
    clearInterval(slideInterval);
}

// Inizializza lo slideshow quando il DOM è caricato
document.addEventListener('DOMContentLoaded', initializeSlideshow);