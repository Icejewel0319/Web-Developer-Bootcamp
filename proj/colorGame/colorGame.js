var hardness = 6;
var colors = generateColor(hardness);

var squares = document.querySelectorAll(".square");
var randomNum = Math.floor(Math.random() * 6);
var pickedColor = colors[randomNum];
var colorDisplay = document.getElementById("colorDisplay");
var mssgDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var newColor = document.querySelector("#newColor");
var easy = document.querySelector("#easy");
var hard = document.querySelector("#hard");

colorDisplay.textContent = pickedColor;

generateTable();

function generateTable(){
    for (var i = 0; i < squares.length; i++){
        //add initial colors
        squares[i].style.backgroundColor = colors[i];
    
        //add click listener to squres.
        squares[i].addEventListener("click", function(){
            var clikedColor = this.style.backgroundColor;
            // change square color when click
            if (clikedColor === pickedColor){
                mssgDisplay.textContent = "Correct";
                changeColor(clikedColor);
                h1.style.backgroundColor = pickedColor;
                newColor.textContent = "PLAY AGAIN?"
            } else {
                this.style.backgroundColor = "#232323";
                mssgDisplay.textContent = "Try Again";
            }
        })
    }
}

// change all cell to then same color
function changeColor(color){
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = pickedColor;
    }
}

// random color
function pickColor(){
    var res = "rgb(";
    var r = Math.floor(Math.random() * 254 + 1); 
    var g = Math.floor(Math.random() * 254 + 1); 
    var b = Math.floor(Math.random() * 254 + 1);
    // rgb(num1, num2, num3)
    return res +  r + ", " + g + ", " + b +")" ; 
}

// generate given number of colors
function generateColor(num){
    var colorsArr = [];
    for (var i = 0; i < num; i ++){
        colorsArr.push(pickColor());
    }
    return colorsArr;
}

function reset(){
    colors = generateColor(hardness);
    generateTable();
    randomNum = Math.floor(Math.random() * hardness);
    pickedColor = colors[randomNum];
    colorDisplay.textContent = pickedColor;
    this.textContent = "NEW COLOR"
    h1.style.backgroundColor  = "steelblue";
    mssgDisplay.textContent = "";
}

// click "new color"
newColor.addEventListener("click", function(){
    colors = generateColor(hardness);
    generateTable();
    randomNum = Math.floor(Math.random() * hardness);
    pickedColor = colors[randomNum];
    colorDisplay.textContent = pickedColor;
    this.textContent = "NEW COLOR"
    h1.style.backgroundColor  = "steelblue";
    mssgDisplay.textContent = "";
})

easy.addEventListener("click", function(){
    this.classList.add("selected");
    hard.classList.remove("selected");
    hardness = 3;
    colors = generateColor(hardness);
    generateTable();
    randomNum = Math.floor(Math.random() * hardness);
    pickedColor = colors[randomNum];
    colorDisplay.textContent = pickedColor;
    h1.style.backgroundColor  = "steelblue";
    for (var j = 3; j < squares.length; j++){
        squares[j].style.display = "none";
    }
    mssgDisplay.textContent = "";
})

hard.addEventListener("click", function(){
    this.classList.add("selected");
    easy.classList.remove("selected");
    hardness = 6;
    colors = generateColor(hardness);
    generateTable();
    randomNum = Math.floor(Math.random() * hardness);
    pickedColor = colors[randomNum];
    colorDisplay.textContent = pickedColor;
    h1.style.backgroundColor  = "steelblue";
    for (var k = 3; k < squares.length; k++){
        squares[k].style.display = "block";
    }
    mssgDisplay.textContent = "";
})