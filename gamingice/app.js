import { OrbitControls } from 'https://cdn.jsdelivr.net/npm/three@0.124/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js";

const scene = new THREE.Scene();

const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#bg'), alpha: true
  });
renderer.setSize(window.innerWidth,window.innerHeight);
// renderer.alpha = true

const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 30;

// let object;

// const loader = new GLTFLoader();
// loader.load(
//     `untitled.glb`,
//     function (glb) {
//       //If the file is loaded, add it to the scene
//       object = glb.scene;
//       object.position.set(0,4,0)
//       object.rotation.x = -0.25
      
//       scene.add(object);
//       object.rotation.y = 2
//     },
//     function (xhr) {
//       //While it is loading, log the progress
//       console.log((xhr.loaded / xhr.total * 100) + '% loaded');
//     },
//     function (error) {
//       //If there is an error, log it
//       console.error(error);
//     }
//   );

const geometry = new THREE.DodecahedronGeometry(2, 0) 
const material = new THREE.MeshPhysicalMaterial(
  {transparent:true, 
    color: 0xb9e8ea, 
    opacity:0.8, 
    roughness:1, 
    reflectivity: 0.1,
    clearcoat:1,
    clearcoatRoughness:1,
    wireframe:true
  });

const ice = new THREE.Mesh( geometry, material ); 
const ice1 = new THREE.Mesh( geometry, material ); 
const ice2 = new THREE.Mesh( geometry, material ); 
scene.add( ice, ice1, ice2 );


const pointLight = new THREE.PointLight(0xff99ff, 10, 0, 0);
pointLight.position.set(-9, 5, 5);
const pointLight2 = new THREE.PointLight(0xff99ff, 100, 0, 0);
pointLight2.position.set(9, -5, -5);
const ambientLight = new THREE.AmbientLight(0xffffff);

scene.add( pointLight2);

scene.add(ambientLight)

// const sphereSize = 1;
// const pointLightHelper = new THREE.PointLightHelper( pointLight, sphereSize );
// scene.add( pointLightHelper );
// const pointLightHelper2 = new THREE.PointLightHelper( pointLight2, sphereSize );
// scene.add( pointLightHelper2 );

// const controls = new OrbitControls(camera, renderer.domElement);


function animate() {
    const t = document.body.getBoundingClientRect().top;
    requestAnimationFrame(animate);
    // controls.update();
    
    // object.rotation.y = 2.5+t/2500
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

    camera.position.z = t * -0.001+20;
    camera.position.x = -5

    ice.position.y = 28 + t*0.02
    ice.rotation.y = t*0.003
    ice.rotation.x = t*0.001
    ice.rotation.z = t*0.0005

    ice1.position.y = 22 + t*0.01
    ice1.position.z = -3
    ice1.position.x = 3
    ice1.rotation.y = t*-0.005
    ice1.rotation.x = t*0.002
    ice1.rotation.z = t*-0.001

    ice2.position.y = 25 + t*0.016
    ice2.position.x = 8
    ice2.rotation.y = t*0.003
    ice2.rotation.x = t*0.001
    ice2.rotation.z = t*0.0005

    if (t < -5000) {
        camera.position.x = (t+5000) * -0.0002-5;
        camera.rotation.y = t * -0.0002-1;
    }
}
document.body.onscroll = moveCamera;
moveCamera();

animate()


const circleElement = document.querySelector('.circle');

// Create objects to track mouse position and custom cursor position
const mouse = { x: 0, y: 0 }; // Track current mouse position
const previousMouse = { x: 0, y: 0 } // Store the previous mouse position
const circle = { x: 0, y: 0 }; // Track the circle position

// Initialize variables to track scaling and rotation
let currentScale = 0; // Track current scale value
let currentAngle = 0; // Track current angle value

// Update mouse position on the 'mousemove' event
window.addEventListener('mousemove', (e) => {
  mouse.x = e.x;
  mouse.y = e.y;
});

// Smoothing factor for cursor movement speed (0 = smoother, 1 = instant)
const speed = 0.3;

// Start animation
const tick = () => {
  // MOVE
  // Calculate circle movement based on mouse position and smoothing
  circle.x += (mouse.x - circle.x) * speed;
  circle.y += (mouse.y - circle.y) * speed;
  // Create a transformation string for cursor translation
  const translateTransform = `translate(${circle.x}px, ${circle.y}px)`;

  // SQUEEZE
  // 1. Calculate the change in mouse position (deltaMouse)
  const deltaMouseX = mouse.x - previousMouse.x;
  const deltaMouseY = mouse.y - previousMouse.y;
  // Update previous mouse position for the next frame
  previousMouse.x = mouse.x;
  previousMouse.y = mouse.y;
  // 2. Calculate mouse velocity using Pythagorean theorem and adjust speed
  const mouseVelocity = Math.min(Math.sqrt(deltaMouseX**2 + deltaMouseY**2) * 4, 150); 
  // 3. Convert mouse velocity to a value in the range [0, 0.5]
  const scaleValue = (mouseVelocity / 150) * 0.5;
  // 4. Smoothly update the current scale
  currentScale += (scaleValue - currentScale) * speed;
  // 5. Create a transformation string for scaling
  const scaleTransform = `scale(${1 + currentScale}, ${1 - currentScale})`;

  // ROTATE
  // 1. Calculate the angle using the atan2 function
  const angle = Math.atan2(deltaMouseY, deltaMouseX) * 180 / Math.PI;
  // 2. Check for a threshold to reduce shakiness at low mouse velocity
  if (mouseVelocity > 20) {
    currentAngle = angle;
  }
  // 3. Create a transformation string for rotation
  const rotateTransform = `rotate(${currentAngle}deg)`;

  // Apply all transformations to the circle element in a specific order: translate -> rotate -> scale
  circleElement.style.transform = `${translateTransform} ${rotateTransform} ${scaleTransform}`;

  // Request the next frame to continue the animation
  window.requestAnimationFrame(tick);
}

// Start the animation loop
tick();


const hidden1 = document.querySelectorAll('.hidden1');
const observer2 = new IntersectionObserver((entries) => {
    entries.forEach((entryIter) => {
        if (entryIter.isIntersecting) {
            entryIter.target.classList.add('shown1');
        }
        else {
            entryIter.target.classList.remove('shown1');
        }

    });
});
hidden1.forEach((element) =>
    observer2.observe(element)
);

const hidden2 = document.querySelectorAll('.hidden2');
const observer3 = new IntersectionObserver((entries) => {
    entries.forEach((entryIter) => {
        if (entryIter.isIntersecting) {
            entryIter.target.classList.add('shown2');
        }
        else {
            entryIter.target.classList.remove('shown2');
        }

    });
});
hidden2.forEach((element) =>
    observer3.observe(element)
);