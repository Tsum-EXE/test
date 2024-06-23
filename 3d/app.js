import { OrbitControls } from 'https://cdn.jsdelivr.net/npm/three@0.124/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js";

const scene = new THREE.Scene();

const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#bg'),
  });
renderer.setSize(window.innerWidth,window.innerHeight);

const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 30;

let object;

const loader = new GLTFLoader();
loader.load(
    `asdf3.glb`,
    function (glb) {
      //If the file is loaded, add it to the scene
      object = glb.scene;
      object.position.set(0,4,0)
      object.rotation.x = -0.25
      
      scene.add(object);
      object.rotation.y = 4
    },
    function (xhr) {
      //While it is loading, log the progress
      console.log((xhr.loaded / xhr.total * 100) + '% loaded');
    },
    function (error) {
      //If there is an error, log it
      console.error(error);
    }
  );

const controls = new OrbitControls(camera, renderer.domElement);
const pointLight = new THREE.PointLight(0xffffff, 0.8, 0, 0.02);
pointLight.position.set(-9, 5, 5);
const pointLight2 = new THREE.PointLight(0xffffff, 0.5, 0, 0.02);
pointLight2.position.set(9, -5, -5);
const ambientLight = new THREE.AmbientLight(0xffffff);

const directionalLight = new THREE.DirectionalLight( 0xffffff, 3 );
directionalLight.position.set(9,5,5)
scene.add( directionalLight );

scene.add(pointLight, ambientLight, pointLight2);

const geometry = new THREE.TorusGeometry( 11, 1.7, 10, 25 ); 
const material = new THREE.MeshStandardMaterial( { color: 0x555555, wireframe:true} ); 
const torus = new THREE.Mesh( geometry, material ); 

torus.rotation.y = 0.5
torus.rotation.x=-1
torus.rotation.z=0.5

scene.add( torus );


function animate() {
    const t = document.body.getBoundingClientRect().top;
    requestAnimationFrame(animate);
    controls.update();
    
    object.rotation.y = 3.4
    directionalLight.target = object
    renderer.render(scene, camera);
}

function addStar() {
    const geometry = new THREE.IcosahedronGeometry(0.2, 1);
    const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
    const star = new THREE.Mesh(geometry, material);
  
    const [x, y, z] = Array(3)
      .fill()
      .map(() => THREE.MathUtils.randFloatSpread(200));
  
    star.position.set(x, y, z);
    scene.add(star);
}

Array(200).fill().forEach(addStar);

function moveCamera() {
    const t = document.body.getBoundingClientRect().top;

    camera.position.z = t * -0.01+20;
    camera.position.x = 5
    
    if (t < -5000) {
        camera.position.x = t * -0.0002-1;
        camera.rotation.y = t * -0.0002-1;
    }
}
document.body.onscroll = moveCamera;
moveCamera();

animate()