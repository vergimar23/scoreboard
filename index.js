let homePoint =document.getElementById ("home-el")
let guestPoint =document.getElementById ("guest-el")
let newGame =document.getElementById ("newgame")
let count = 0
let countaway = 0

function home(){
   count +=1
   homePoint.textContent = count
}

function home2(){
   count +=2
   homePoint.textContent = count
}

function home3(){
   count +=3
   homePoint.textContent = count
}

function guest(){
    countaway +=1
    guestPoint.textContent = countaway
    
}
function guest2(){
    countaway +=2
    guestPoint.textContent = countaway
}

function guest3(){
    countaway +=3
    guestPoint.textContent = countaway
}

function newbtn(){
    guestPoint.textContent = 0
    homePoint.textContent = 0
    count = 0
    countaway = 0
}