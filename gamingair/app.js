// import { OrbitControls } from 'https://cdn.jsdelivr.net/npm/three@0.124/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js";

const scene = new THREE.Scene();

const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#bg'),
  });
renderer.setSize(window.innerWidth,window.innerHeight);

const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 30;

const geometry = new THREE.TorusGeometry( 13, 2, 10, 25 ); 
const material = new THREE.MeshStandardMaterial( { color: 0x555555, wireframe:true} ); 
const torus = new THREE.Mesh( geometry, material ); 

scene.add( torus );

const geometry2 = new THREE.TorusKnotGeometry( 10.659, 3.79, 41, 8 ); 
const material2 = new THREE.MeshStandardMaterial( { color: 0x555555, wireframe:true, transparent:true} ); 
const torusKnot = new THREE.Mesh( geometry2, material2 );
torusKnot.rotation.x = 1.2
torusKnot.position.set(21,-12,160)
torusKnot.scale.set(0.75,0.75,0.75)
scene.add( torusKnot );


var t;
var intersectingThingy = false;
let object;
let object2;
let object3;
let object4;
let object5;
var mat001 = new THREE.MeshPhysicalMaterial();
  mat001.color = new THREE.Color( 0x000000);
  mat001.reflectivity = 0;
  mat001.roughness = 0.0;
  mat001.envMapIntensity = 1.0;

const loader = new GLTFLoader();
loader.load(
    `asdf3.glb`,
    function (glb) {
      //If the file is loaded, add it to the scene
      object = glb.scene;
      object.position.set(0,4,0)
      object.rotation.x = -0.25
      object.traverse((node) => {
        if (!node.isMesh) return;
        node.material = mat001;
        node.material.wireframe = true;
        node.material.color.set( 0x555555 )

      });
      
      scene.add(object);
      object.rotation.y = 2
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

  loader.load(
    `asdf3.glb`,
    function (glb) {
      //If the file is loaded, add it to the scene
      object2 = glb.scene;
      object2.position.set(0,4,0)
      object2.rotation.x = -0.25
      
      scene.add(object2);
      object2.rotation.y = 2
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
  ///others daoifhsdoifhasodfhjoaisd f
  loader.load(
    `mark1.glb`,
    function (glb) {
      //If the file is loaded, add it to the scene
      object3 = glb.scene;
      object3.position.set(21,4,160)
      object3.rotation.x = -0.25
      
      scene.add(object3);
      object3.rotation.y = 0
      object3.traverse((child) => {
        if (child.type === 'Mesh') {
          const material = child.material;
          // Do stuff with the material
          material.transparent = true
          material.opacity = 0    
        }
      })
      
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
  loader.load(
    `mark2.glb`,
    function (glb) {
      //If the file is loaded, add it to the scene
      object4 = glb.scene;
      object4.position.set(21,4,150)
      object4.rotation.x = -0.25
      
      scene.add(object4);
      object4.rotation.y = 0
      
      object4.traverse((child) => {
        if (child.type === 'Mesh') {
          const material = child.material;
          // Do stuff with the material
          material.transparent = true
          material.opacity = 0    
        }
      })
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
  loader.load(
    `mark3.glb`,
    function (glb) {
      //If the file is loaded, add it to the scene
      object5 = glb.scene;
      object5.position.set(21,4,160)
      object5.rotation.x = -0.25
      
      scene.add(object5);
      object5.rotation.y = 0
      
      object5.traverse((child) => {
        if (child.type === 'Mesh') {
          const material = child.material;
          // Do stuff with the material
          material.transparent = true
          material.opacity = 0    
        }
      })
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




const pointLight = new THREE.PointLight(0xffffff, 1, 0, 0);
pointLight.position.set(-9, 5, 5);
const pointLight2 = new THREE.PointLight(0xffffff, 0.1, 0, 0);
pointLight2.position.set(15, -5, 20);
const pointLight3 = new THREE.PointLight(0xffffff, 1, 0, 0);
pointLight2.position.set(15, -20, 20);
const ambientLight = new THREE.AmbientLight(0xffffff);
const light3 = new THREE.PointLight( 0xffffff, 2.5, 100 );
light3.position.set(21,4,165);
scene.add( light3 );
const light4 = new THREE.PointLight( 0xffffff, 2, 100 );
light4.position.set(30,4,140);
scene.add( light4 );


scene.add(pointLight, ambientLight, pointLight2 ,pointLight3);

const sphereSize = 1;
const pointLightHelper = new THREE.PointLightHelper( pointLight, sphereSize );
scene.add( pointLightHelper );
const pointLightHelper2 = new THREE.PointLightHelper( pointLight2, sphereSize );
scene.add( pointLightHelper2 );
// const pointLightHelper3 = new THREE.PointLightHelper( pointLight3, sphereSize );
// scene.add( pointLightHelper3 );

// const controls = new OrbitControls(camera, renderer.domElement);
//5

function animate() {
    const t = document.body.getBoundingClientRect().top;
    requestAnimationFrame(animate);
    // controls.update();
    
    object.rotation.y = 4.8+t/8000
    object.rotation.x = -0.25+t*-0.00012*0.5
    object2.rotation.y = 4.8+t/8000
    object2.rotation.x = -0.25+t*-0.00012*0.5

    object2.traverse((child) => {
      if (child.type === 'Mesh') {
        const material = child.material;
        // Do stuff with the material
        if (t*0.00018 > 1.5) {
          material.transparent = false;
        } else {
          material.transparent = true; // enable to modify opacity correctly
          material.opacity = -1+t*-0.0004;
          // console.log(t*-0.0002)
        }      
      }
    })

    object.traverse((child) => {
      if (child.type === 'Mesh') {
        const material = child.material;
        // Do stuff with the material
        
        if (t*-0.00018 > 1.7) {
          material.transparent = true;
          material.opacity = 0;
        } else {
          material.transparent = true;
          material.opacity = 1.7-(t*-0.00023)
        }
      }
    })

    
    renderer.render(scene, camera);
}

function addStar() {
    const geometry = new THREE.IcosahedronGeometry(0.5, 1);
    const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
    const star = new THREE.Mesh(geometry, material);
  
    const [x, y, z] = Array(3)
      .fill()
      .map(() => THREE.MathUtils.randFloatSpread(500));
  
    star.position.set(x, y, z-200);
    scene.add(star);
}

Array(100).fill().forEach(addStar);

function moveCamera() {
    t = document.body.getBoundingClientRect().top;

    if (t > -100) {
      camera.position.x=10
    }

    camera.position.z = t * -0.004;
    camera.position.x = 20
    torus.rotation.x = t*0.00005
    torus.rotation.y = t*0.00005
    torusKnot.rotation.z = t*0.0001
    
    if (t < -10000 && t > -25000) {
        // camera.position.x = (t+6000) * -0.0002;
        var asdf =(t+10000)/3000
        if (asdf <= -2){
          camera.rotation.y = -2*(t+10000)/10000;
        } else {
          camera.rotation.y = asdf*(t+10000)/10000;
        }
    } else if (t < -25000) {
      camera.rotation.y=3.1415
    }

    if (intersectingThingy){
      torusKnot.material.opacity = (savet - t)/1000

      object3.rotation.z = (savet-t)*0.00002
      object5.rotation.z = (savet-t)*0.00002
      object3.rotation.y = -(savet-t)*0.00012
      object5.rotation.y = (savet-t)*0.00012

    object3.traverse((child) => {
      if (child.type === 'Mesh') {
        const material = child.material;
        // Do stuff with the material
        material.transparent = true
        material.opacity = (savet - t)/1000
      }
    })
    object4.traverse((child) => {
      if (child.type === 'Mesh') {
        const material = child.material;
        // Do stuff with the material
        material.transparent = true
        material.opacity = (savet - t)/1000
      }
    })
    object5.traverse((child) => {
      if (child.type === 'Mesh') {
        const material = child.material;
        // Do stuff with the material
        material.transparent = true
        material.opacity = (savet - t)/1000
      }
    })

    object3.position.x=22-(savet-t)/500
    object5.position.x=20+(savet-t)/500

  } 
}
document.body.onscroll = moveCamera;

let inter = false
var savet = 10000000

const gaming2 = document.querySelectorAll("#variants")
const observer00 = new IntersectionObserver((entries) => {
    entries.forEach((entryIter) => {
        if (entryIter.isIntersecting) {
          if (!inter){
            inter = true
            savet = t
          }
          intersectingThingy = true
          
        }
        else {
          torusKnot.material.opacity = 0
          intersectingThingy = false
          object3.traverse((child) => {
            if (child.type === 'Mesh') {
              const material = child.material;
              // Do stuff with the material
              material.transparent = true
              material.opacity = 0
            }
          })
          object4.traverse((child) => {
            if (child.type === 'Mesh') {
              const material = child.material;
              // Do stuff with the material
              material.transparent = true
              material.opacity = 0
            }
          })
          object5.traverse((child) => {
            if (child.type === 'Mesh') {
              const material = child.material;
              // Do stuff with the material
              material.transparent = true
              material.opacity = 0
            }
          })
        }

    });
});
gaming2.forEach((element) =>
    observer00.observe(element)
);


moveCamera();

animate()