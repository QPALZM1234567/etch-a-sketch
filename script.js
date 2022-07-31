//Get Size of Board
let side = 16;
const size = document.querySelector(".input");
size.addEventListener('click', () => {
    let temp = side;
    side = parseInt(prompt("What side length would you like? Limit of 100"));
    if (side > 100) {
        side = 100;
    }
    document.querySelector("h3").textContent = side + "x" + side;
    for (let i = 0; i < temp**2; i++) {
        container.removeChild(container.lastChild);
    }

    for (let i = 0; i < side**2; i++) {
        let div = document.createElement('div');
        div.classList.add("square");
        let percent = 100 / side;
        div.style.width = percent + '%';
        container.appendChild(div);
    }

    squares = document.querySelectorAll(".square");

    squares.forEach(item => {
        item.addEventListener('mouseover', hovered);
        item.addEventListener('mousedown', hovered);
        /*
        item.addEventListener('mouseout', (e) =>{
            setTimeout(() => {
                e.target.classList.remove("hovered");
            }, 300)
            
        });
        */
    })
});

//Add squares to board
const container = document.querySelector(".container");
for (let i = 0; i < 256; i++) {
    let div = document.createElement('div');
    
    container.appendChild(div);
    div.classList.add("square");
}

//Clears board
const clear = document.querySelector(".clear");
clear.addEventListener('click', () => {
    /*
    document.querySelectorAll(".hovered").forEach((child) =>{
        child.classList.remove("hovered");
    });
    */
   for (child of document.querySelectorAll(".hovered")) {
    child.classList.remove("hovered");
   }
});

let mouseDown = false;
document.body.onmousedown = (e) => {
    mouseDown = true;
    e.preventDefault();
}

document.body.onmouseup = () => (mouseDown = false)

//Create Functionality for board
function hovered(event) {
    if (mouseDown || event.type === 'mousedown') {
        event.target.classList.add("hovered");
    }
}
let squares = document.querySelectorAll(".square");

squares.forEach(item => {
    item.addEventListener('mouseover', hovered);
    item.addEventListener('mousedown', hovered);
    /*
    item.addEventListener('mouseout', (e) =>{
        setTimeout(() => {
            e.target.classList.remove("hovered");
        }, 300)
        
    });
    */
})