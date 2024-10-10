import { createViewport, onWindowResize, animate } from "./js/viewport";
import { loadHTML } from "./js/loader";

//Carrusel load
initializeCarousel();

createViewport();
onWindowResize();
window.addEventListener('resize', onWindowResize, false);

let viewport = document.getElementById('viewport');
let hero = document.getElementById('hero');
centerHeroTitle();

window.addEventListener('resiza', centerHeroTitle, false);

animate();

function centerHeroTitle(){
    let v = getComputedStyle(viewport).height;
    let viewportValue = parseFloat(v);

    let halfHeight = (viewportValue/2) - 30.0;

    hero.style.top = `${halfHeight}px`
    hero.style.width = "100%"
}

async function loadConfigureCarousel(htmlPath, elementId, carouselSelector, options) {
    await loadHTML(htmlPath, elementId);
    const carouselElement  = document.querySelector(carouselSelector);
    new bootstrap.Carousel(carouselElement, options);
}

async function initializeCarousel() {
    try {
        await loadConfigureCarousel("./views/courruselEliab.html", "carruselEliab","#carouselEliabIndicators", {
            interval: 2000,
            touche: true
        });
        await loadConfigureCarousel("./views/carolseProtecor.html", "carruselProtector","#carouselProtectorIndicators", {
            interval: 2000,
            touche: true
        });
    } catch (error) {
        console.error("Error al cargar y configurar los carruseles:", error);
    }
}