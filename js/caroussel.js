let slideAtual = 0;

function mudarSlide(direcao) {
    const slides = document.querySelector('.slides');
    const totalSlides = document.querySelectorAll('.slide').length;

    slideAtual = (slideAtual + direcao + totalSlides) % totalSlides;
    slides.style.transform = `translateX(-${slideAtual * 100}%)`;
}