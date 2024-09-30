import { createViewport, onWindowResize, animate } from "./js/viewport";
import { loadHTML } from "./js/loader";

//Carrusel load
loadHTML("./views/courruselEliab.html","carruselEliab")
.then(()=>{ loadHTML("./views/carolseProtecor.html","carruselProtector")});    

createViewport();
onWindowResize();
window.addEventListener('resize', onWindowResize, false);

let viewport = document.getElementById('viewport');
let hero = document.getElementById('hero');

let v = getComputedStyle(viewport).height;
let viewportValue = parseFloat(v);

let halfHeight = (viewportValue/2) - 30.0;

hero.style.top = `${halfHeight}px`;

animate();


