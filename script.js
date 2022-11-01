const mainButton = document.querySelector("button");
const body = document.body;
const currentColor = document.querySelector(".currentColor");



// use Math.random() + math.floor();
//we need numbers from 0 to 255 

function randomColorGenerator(){
    const red = Math.floor(Math.random() *256);
    const green = Math.floor(Math.random() *256);
    const blue = Math.floor(Math.random() *256);
    const randomColor = `rgb(${red},${green},${blue})`;
    return randomColor;
}

// set random color as body 


mainButton.addEventListener("click", ()=>{
    // console.log("you clicked me");
    const randomColor = randomColorGenerator();
    body.style.background = randomColor;
    // console.log(randomColor);
    currentColor.textContent = randomColor;
})


