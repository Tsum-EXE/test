
const hidden1 = document.querySelectorAll('.firster');
const observer1 = new IntersectionObserver((entries) => {
    entries.forEach((entryIter) => {
        if (entryIter.isIntersecting) {
            entryIter.target.classList.add('first');
        }
        else {
            entryIter.target.classList.remove('first');
        }

    });
});
hidden1.forEach((element) =>
    observer1.observe(element)
);

const hidden2 = document.querySelectorAll('.seconder');
const observer2 = new IntersectionObserver((entries) => {
    entries.forEach((entryIter) => {
        if (entryIter.isIntersecting) {
            entryIter.target.classList.add('second');
        }
        else {
            entryIter.target.classList.remove('second');
        }

    });
});
hidden2.forEach((element) =>
    observer2.observe(element)
);


const ref1 = document.querySelectorAll(".ref1")
const observer3 = new IntersectionObserver((entries) => {
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
    observer3.observe(element)
);

const title = document.querySelectorAll(".title")
const observer4 = new IntersectionObserver((entries) => {
    entries.forEach((entryIter) => {
        if (entryIter.isIntersecting) {
            entryIter.target.classList.add('shown');
        }
        else {
            entryIter.target.classList.remove('shown');
        }

    });
});
title.forEach((element) =>
    observer4.observe(element)
);

const hidden5 = document.querySelectorAll('.hidden3');
const observer5 = new IntersectionObserver((entries) => {
    entries.forEach((entryIter) => {
        if (entryIter.isIntersecting) {
            entryIter.target.classList.add('shown3');
        }
        else {
            entryIter.target.classList.remove('shown3');
        }

    });
});
hidden5.forEach((element) =>
    observer5.observe(element)
);


// const logo = document.querySelectorAll('.title path')

// for(let i = 0; i<logo.length; i++) {
//     console.log(`Letter ${i+1} is ${logo[i].getTotalLength()}`)
// }
// nigerian fathers