const container = document.querySelector(".container");
for (let i = 0; i < 256; i++) {
    let div = document.createElement('div');
    
    container.appendChild(div);
    div.classList.add("square");
}


function hovered(event) {
    setTimeout
    event.target.classList.add("hovered");
}
const squares = document.querySelectorAll(".square");

squares.forEach(item => {
    item.addEventListener('mouseover', hovered);
    item.addEventListener('mouseout', (e) =>{
        e.target.classList.remove("hovered");
    });
})