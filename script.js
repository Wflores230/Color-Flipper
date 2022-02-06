const colors = ["green", "red", "blue","purple", "brown", "pink"];

const btn = document.getElementById('btn');
const color = document.querySelector(".color");

btn.addEventListener('click', function(){
    // get random number bewteen 0 - 5 colors[5]
    const randomNumber = getRandomNumber();
    
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
    console.log(randomNumber);
})

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}