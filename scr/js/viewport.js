import * as THREE from 'three';
import { uniforms, material } from './shaders';

let camera;
let scene;
let renderer;
let clock;
let heroWidth;

export function createViewport(){
    scene = new THREE.Scene();
    camera = new THREE.OrthographicCamera(-1,1,1,-1,0.1,10);

    renderer = new THREE.WebGLRenderer();
    
    //new logic 
    heroWidth = document.getElementById("hero").offsetWidth;

    renderer.setSize( window.innerWidth, window.innerHeight);

    let welcome = document.getElementById('viewport');
    welcome.appendChild(renderer.domElement);

    const geometry = new THREE.PlaneGeometry(2,2);
    clock = new THREE.Clock();

    const plane = new THREE.Mesh( geometry, material );
    scene.add(plane);

    camera.position.z = 1;
}

export function onWindowResize(){
    const aspectRatio = window.innerWidth / window.innerHeight;

    let width, height;
    if (aspectRatio >= 1){
        width = 1;
        height = (window.innerHeight / window.innerWidth)*width;
    }else{
        width = aspectRatio;
        height = 1;
    }
    camera.left = -width;
    camera.right = width;
    camera.top = height;
    camera.bottom = -height;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.domElement.style.width = "100%";
    renderer.domElement.style.height = "100%";

    if (uniforms.u_resolution !== undefined){
        uniforms.u_resolution.value.x = window.innerWidth;
        uniforms.u_resolution.value.y = window.innerHeight;
    }
    
}

export function animate(){
    requestAnimationFrame( animate );
    renderer.render( scene, camera);
    uniforms.u_time.value = clock.getElapsedTime();
}

