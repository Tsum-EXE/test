//imagine reading this js script lmao

// window.onbeforeunload = () => {
//     window.scrollTo(0, 0);
// }

const ref1 = document.querySelectorAll(".ref1")
const observer0 = new IntersectionObserver((entries) => {
    entries.forEach((entryIter) => {
        if (entryIter.isIntersecting) {
            entryIter.target.classList.add('show');
        }
        else {
            entryIter.target.classList.remove('show');
        }

    });
});
ref1.forEach((element) =>
    observer0.observe(element)
);

const gaming2 = document.querySelectorAll("#gaming2")
const observer00 = new IntersectionObserver((entries) => {
    entries.forEach((entryIter) => {
        if (entryIter.isIntersecting) {
            entryIter.target.classList.add('shown0');
        }
        else {
            entryIter.target.classList.remove('shown0');
        }

    });
});
gaming2.forEach((element) =>
    observer00.observe(element)
);


const hiddenElements = document.querySelectorAll('.hidden');
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entryIter) => {
        if (entryIter.isIntersecting) {
            entryIter.target.classList.add('shown');
        }
        else {
            entryIter.target.classList.remove('shown');
        }

    });
});
hiddenElements.forEach((element) =>
    observer.observe(element)
);

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

const hidden3 = document.querySelectorAll('.hidden3');
const observer4 = new IntersectionObserver((entries) => {
    entries.forEach((entryIter) => {
        if (entryIter.isIntersecting) {
            entryIter.target.classList.add('shown3');
        }
        else {
            entryIter.target.classList.remove('shown3');
        }

    });
});
hidden3.forEach((element) =>
    observer4.observe(element)
);

const hidden4 = document.querySelectorAll('.firster');
const observer5 = new IntersectionObserver((entries) => {
    entries.forEach((entryIter) => {
        if (entryIter.isIntersecting) {
            entryIter.target.classList.add('first');
        }
        else {
            entryIter.target.classList.remove('first');
        }

    });
});
hidden4.forEach((element) =>
    observer5.observe(element)
);

const hidden5 = document.querySelectorAll('.seconder');
const observer6 = new IntersectionObserver((entries) => {
    entries.forEach((entryIter) => {
        if (entryIter.isIntersecting) {
            entryIter.target.classList.add('second');
        }
        else {
            entryIter.target.classList.remove('second');
        }

    });
});
hidden5.forEach((element) =>
    observer6.observe(element)
);



var lastScrollTop = 0;
var doc = document.documentElement;

window.addEventListener("scroll", function(){ 
     var st = window.scrollY || document.documentElement.scrollTop; 
     var top = (window.scrollY || doc.scrollTop)  - (doc.clientTop || 0);
     if (top >= 6000) {
        document.querySelector('#cancan').classList.add("fadee")
     } else if (top < 6000) {
        document.querySelector('#cancan').classList.remove("fadee")
     } 
     lastScrollTop = st <= 0 ? 0 : st; 

}, false);

// const logo = document.querySelectorAll('#gaming path')

// for(let i = 0; i<logo.length; i++) {
//     console.log(`Letter ${i+1} is ${logo[i].getTotalLength()}`)
// }


const clickable1 = document.querySelector("#clickable1")
clickable1.addEventListener('click', function() {
    window.location = 'index.html#jump1';
  });

const clickable2 = document.querySelector("#clickable2")
clickable2.addEventListener('click', function() {
    window.location = 'index.html#jump2';
  });

const clickable3 = document.querySelector("#clickable3")
clickable3.addEventListener('click', function() {
    window.location = 'index.html#jump3';
  });

const clickable4 = document.querySelector("#clickable4")
clickable4.addEventListener('click', function() {
    window.location = 'index.html#jump4';
  });

  // Select the circle element
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