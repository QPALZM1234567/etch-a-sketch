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
})


//Create Functionality for board
function hovered(event) {
    event.target.classList.add("hovered");
}
const squares = document.querySelectorAll(".square");

squares.forEach(item => {
    item.addEventListener('mouseover', hovered);
    /*
    item.addEventListener('mouseout', (e) =>{
        setTimeout(() => {
            e.target.classList.remove("hovered");
        }, 300)
        
    });
    */
})