import { createViewport, onWindowResize, animate } from "./js/viewport";
import { loadHTML } from "./js/loader";

//Carrusel load
initializeCarousel();

//shader load
let previousWidth = window.innerWidth;

const viewport = document.getElementById('viewport');
let hero = document.getElementById('hero');
const isMobileDevice = isMobile();
centerHeroTitle();

document.body.classList.add('no-scroll');

window.addEventListener("load", ()=>{
    setTimeout(()=>{
        shaderFitScreen();
        createViewport();
        onWindowResize();
        animate();
        document.body.classList.remove('no-scroll');
        let loading = document.querySelector('#loadig-screen');
        if (loading) {
            loading.style.display = 'none';
        }
    }, 1000);  
})

//shader and hero sizes
const shaderFitScreen = ()=>{
    
    if (!isMobileDevice){
        viewport.style.height = window.innerHeight-16;
    }else{
        viewport.style.height = window.innerHeight;
    }

    viewport.style.width = window.innerWidth;

    centerHeroTitle();
}

window.addEventListener('resize', ()=>{
    const currentWidth = window.innerWidth;
    if (isMobileDevice){
        const significanteChange = 
            currentWidth > previousWidth || currentWidth < previousWidth;
        
        if ( significanteChange ){
            //---> aspect ratio
            shaderFitScreen();
        }
    } else {
        //-->Aspect ratio
        shaderFitScreen();
    }

    previousWidth = currentWidth;
    centerHeroTitle();
    onWindowResize();
});

function centerHeroTitle(){
    let v = getComputedStyle(viewport).height;
    let viewportValue = parseFloat(v);

    let halfHeight = (viewportValue/2) - 60.0;

    hero.style.top = `${halfHeight}px`
    hero.style.width = "100%"
}

function isMobile(){
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

////

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