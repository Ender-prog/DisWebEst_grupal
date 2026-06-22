document.addEventListener("DOMContentLoaded", () => {

    const navbar = document.querySelector(".navbar");
    navbar.style.opacity = "0";
    navbar.style.transform = "translateY(-100px)";
    navbar.style.transition = "all 1s ease";

    setTimeout(() => {
        navbar.style.opacity = "1";
        navbar.style.transform = "translateY(0)";
    }, 100);

    const logo = document.querySelector(".navbar-brand img");

    logo.style.transform = "rotate(-1000deg) scale(0)";
    logo.style.transition = "all 3s ease";

    setTimeout(() => {
        logo.style.transform = "rotate(0deg) scale(1)";
    }, 300);

    const titulo = document.querySelector("h1");
    const textoOriginal = titulo.textContent;

    titulo.textContent = "";
    titulo.style.opacity = "1";

    let i = 0;

    function escribirTitulo() {
        if (i < textoOriginal.length) {
            titulo.textContent += textoOriginal.charAt(i);
            i++;
            setTimeout(escribirTitulo, 70);
        }
    }

    escribirTitulo();

    titulo.style.transform = "translateY(-80px)";
    titulo.style.transition = "all 1s ease";

    setTimeout(() => {
        titulo.style.transform = "translateY(0)";
    }, 500);

    const subtitulo = document.querySelector(".text-muted");

    subtitulo.style.opacity = "0";
    subtitulo.style.transition = "all 1.5s ease";

    setTimeout(() => {
        subtitulo.style.opacity = "1";
    }, 1200);

    const carousel = document.querySelector("#carouselEscuela");

    carousel.style.opacity = "0";
    carousel.style.transform = "scale(0.9)";
    carousel.style.transition = "all 1s ease";

    setTimeout(() => {
        carousel.style.opacity = "1";
        carousel.style.transform = "scale(1)";
    }, 1400);

    const cards = document.querySelectorAll(".card");

    cards.forEach((card, index) => {

        card.style.opacity = "0";
        card.style.transform = "translateY(80px)";
        card.style.transition = "all 0.8s ease";

        setTimeout(() => {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }, 1800 + index * 300);

        card.addEventListener("mouseenter", () => {
            card.style.transform = "translateY(-15px)";
            card.style.boxShadow = "0 15px 30px rgba(0,0,0,0.25)";
            card.style.scale = "1.1";
        });

        card.addEventListener("mouseleave", () => {
            card.style.transform = "translateY(0)";
            card.style.boxShadow = "";
            card.style.scale = "1";
        });

    });

    const imagenes = document.querySelectorAll(".card-img-top");


    const botones = document.querySelectorAll(".btn");

    botones.forEach(btn => {

        btn.style.transition = "all 0.3s ease";

        btn.addEventListener("mouseenter", () => {
            btn.style.transform = "scale(1.12)";
        });

        btn.addEventListener("mouseleave", () => {
            btn.style.transform = "scale(1)";
        });

    });

    const footer = document.querySelector("footer");

    footer.style.opacity = "0";
    footer.style.transition = "all 1s ease";

    setTimeout(() => {
        footer.style.opacity = "1";
    }, 2500);

});