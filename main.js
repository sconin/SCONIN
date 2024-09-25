import * as THREE from 'three';
let renderer;
let camera;

let scene = new THREE.Scene();
camera = new THREE.PerspectiveCamera(54, window.innerWidth / window.innerHeight, 0.1, 1000);

renderer = new THREE.WebGLRenderer({});

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(new THREE.Color(0xfefefe));

window.onload = function(){
    let canvas = document.getElementById("welcome");
    canvas.appendChild(renderer.domElement);
    
  
        camera.position.x = 0.0;
        camera.position.y = 4.0 - window.scrollY / 250.0;
        camera.position.z = 2.0 - window.scrollY / 250.0;

  
    
    camera.lookAt(0, 0, 0);
   
};

// white spotlight shining from the side, casting a shadow
let spotLight = new THREE.SpotLight(0xffffff, 10, 25, Math.PI / 4);
spotLight.position.set(9, 10, 1);
scene.add(spotLight);



let gridHelper = new THREE.GridHelper(4, 4);
scene.add(gridHelper);

// example code
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshLambertMaterial({
    color: 0xff0000
});
const topBox = new THREE.Mesh(geometry, material);
scene.add(topBox);

const light = new THREE.PointLight( 0xff0000, 1, 100 );
light.position.set( 1, 1, 1 );
scene.add( light );

///// end of example
let animate = function() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
};



animate();

