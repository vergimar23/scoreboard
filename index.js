let homePoint =document.getElementById ("home-el")
let guestPoint =document.getElementById ("guest-el")
let newGame =document.getElementById ("newgame")
let count = 0


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
    count +=1
    guestPoint.textContent = count
    
}
function guest2(){
    count +=2
    guestPoint.textContent = count
}

function guest3(){
    count +=3
    guestPoint.textContent = count
}

function newbtn(){
    guestPoint.textContent = 0
    homePoint.textContent = 0
    count = 0
}