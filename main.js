const backgroundColors = ["yellow", "red", "green", "blue", "black", "orange", "pink"];

document.getElementById("box").onclick = function changeColor(){
    document.body.style.backgroundColor = backgroundColors[Math.floor(Math.random() * backgroundColors.length)];
}
