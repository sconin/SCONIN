//basic
let renderer;
let camera;

let scene = new THREE.Scene();
camera = new THREE.PerspectiveCamera(54, window.innerWidth / window.innerHeight, 0.1, 1000);

renderer = new THREE.WebGLRenderer({
});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(new THREE.Color(0xfefefe));

window.onload = function(){
    let canvas = document.getElementById("welcome");
    canvas.appendChild(renderer.domElement);
    
    if (window.scrollY / 250.0 < 4.0){
        camera.position.x = 0.0;
        camera.position.y = 4.0 - window.scrollY / 250.0;
        camera.position.z = 2.0 - window.scrollY / 250.0;

    }else{
        camera.position.x = 0.0;
        camera.position.y = 0.1;
        camera.position.z = -2.0;
    }
    camera.lookAt(0, 0, 0);
    console.log("enter")
};

// white spotlight shining from the side, casting a shadow
let spotLight = new THREE.SpotLight(0xffffff, 2.5, 25, Math.PI / 6);
spotLight.position.set(9, 10, 1);
scene.add(spotLight);

let gridHelper = new THREE.GridHelper(4, 4);
scene.add(gridHelper);

// example code
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshStandardMaterial({
    color: 0xff0000
});
const topBox = new THREE.Mesh(geometry, material);
scene.add(topBox);

window.addEventListener( 'resize', onWindowResize, false );
onWindowResize();

///// end of example
let animate = function() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
};

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize( window.innerWidth, window.innerHeight );
}

animate();

function updateCamera(ev) {
    
    if (camera.position.z - window.scrollY / 250.0 > -6.08){
        camera.position.y = 4.0 - window.scrollY / 250.0;
        camera.position.z = 2.0 - window.scrollY / 250.0;
    }
    camera.lookAt(0.0,0.0,0.0);
}

window.addEventListener("scroll", updateCamera);

