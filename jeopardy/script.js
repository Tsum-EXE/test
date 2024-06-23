var i = true
var f = false
var storeid = ""
var storeScore = 0
const allcards = document.querySelectorAll(".card")
function flipCard(id, score){
    if (i && storeid == id || storeid=="" && !(hasClass(document.getElementById(id), 'deactivatedCard'))){
        allcards.forEach((element) => element.classList.add('fadeCard'));
        document.getElementById(id).classList.add('flippedCard')
        document.getElementById(id+'a').innerText = document.getElementById(id).dataset.value
        i = false
        storeid = id
        f = true
    } else if (f && storeid == id) {
        document.getElementById(id).classList.add('revealAnswer')
        f = false
        storeScore = score
    } else if (!i && id == storeid && !f) {
        allcards.forEach((element) => element.classList.remove('fadeCard'));
        document.getElementById(id).classList.remove('flippedCard')
        document.getElementById(id).classList.remove('revealAnswer')
        document.getElementById(id).classList.add('deactivatedCard')
        document.getElementById(id).innerText = score
        storeid = ""
    }    
}

function hasClass(element, className) {
    return (' ' + element.className + ' ').indexOf(' ' + className+ ' ') > -1;
}

const dialog = document.querySelector("dialog");
const showButton = document.querySelector("#addTeam");
const closeButton = document.querySelector("#dum");
const temnaminput = document.getElementById("teamNameInput")
const scorcont = document.querySelector("#scoreContainer")

function createTeam(){
    dialog.showModal();
}

closeButton.addEventListener("click", () => {
    dialog.close();
});


const divList = document.querySelector('.listHolder')

document.querySelector("#submit").addEventListener("click", () => {

    const ul = divList.querySelector('ul')
    const li = document.createElement('li')
    const ppp = document.createElement('h8')
    ppp.innerHTML = temnaminput.value
    const pointstuff = document.createElement('input')
    pointstuff.type = 'text'
    pointstuff.value = 0
    pointstuff.placeholder = 'points'
    pointstuff.classList.add('shennanigans')
    const db = document.createElement('button')
    db.innerHTML = '↓'
    db.classList.add('ubtn')
    db.addEventListener("click", function() {
        pointstuff.value = parseInt(pointstuff.value) - parseInt(storeScore)
        console.log(storeScore)
        storeScore = 0
    }); 
    const ub = document.createElement('button')
    ub.innerHTML = '↑'
    ub.classList.add('ubtn')
    ub.addEventListener("click", function() {
        pointstuff.value = parseInt(pointstuff.value) + parseInt(storeScore)
        console.log(storeScore)
        storeScore = 0
    }); 

    li.appendChild(ppp)
    li.appendChild(pointstuff)
    li.appendChild(db)
    li.appendChild(ub)
    ul.appendChild(li)

    temnaminput.value = ""  
    dialog.close();
});

function eeeeee() {
    console.log('a')
}