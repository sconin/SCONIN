import { createViewport, onWindowResize, animate } from "./js/viewport";
import { loadHTML } from "./js/loader";

//Carrusel load
initializeCarousel();

//shader load
let previousWidth = window.innerWidth;
let previousHeight = window.innerHeight;

document.body.classList.add('no-scroll');

window.addEventListener("load", ()=>{
    setTimeout(()=>{
        document.body.classList.remove('no-scroll');
        let loading = document.querySelector('#loadig-screen');
        if (loading) {
            loading.style.display = 'none';
        }
        //shaderFix();
    }, 1000);  
})

//shader and hero sizes
const shaderFix = ()=>{
    
    let welcomeElement = document.getElementById('viewport');
    welcomeElement.style.backgroundColor = "black";
    welcomeElement.style.height = window.visualViewport.height;
    console.log(window.visualViewport);
    welcomeElement.style.width = document.documentElement.clientWidth;
    console.log(welcomeElement.clientHeight, " height")

    centerHeroTitle();
    
    //createViewport();
    //onWindowResize();
}

document.addEventListener('resize', ()=>{
    const currentWidth = window.innerWidth;
    const currentHeight = window.innerHeight;
    const isMobileDevice = isMobile();

    if (isMobileDevice){
        //Cambio orientación (horizontal a vertical y viceversa)
        const orientationChange = 
            (previousWidth > previousHeight && currentWidth < currentHeight) ||
            (previousWidth < previousHeight && currentWidth > currentHeight);
        
        const significanteChange = 
            currentHeight > previousWidth * 2 || currentWidth < previousHeight / 2;
        
        if ( orientationChange || significanteChange ){
            //---> aspect ratio
        }
    } else {
        //-->Aspect ratio
    }

    previousWidth = currentWidth;
    previousHeight =  currentHeight;
});

let viewport = document.getElementById('viewport');
let hero = document.getElementById('hero');

centerHeroTitle();
window.addEventListener('resize', centerHeroTitle, false);

//animate();

function centerHeroTitle(){
    let v = getComputedStyle(viewport).height;
    let viewportValue = parseFloat(v);

    let halfHeight = (viewportValue/2) - 60.0;

    hero.style.top = `${halfHeight}px`
    hero.style.width = "100%"
}


function isMobile(){
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
        window.matchMedia("(max-width: 768px)").matches;
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