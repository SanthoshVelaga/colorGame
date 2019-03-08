var numSquares = 6;
var colors = generateRandomColors(numSquares);

var squares = document.querySelectorAll(".square");
var pickerColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var buttonReset = document.querySelector("#reset");

var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click", function() {
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    numSquares = 3;
    colors = generateRandomColors(numSquares);
    pickerColor = pickColor();
    colorDisplay.textContent = pickerColor;

    for (var i=0; i < squares.length; i++) {
        if (colors[i]) {
        squares[i].style.background = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
    
});

hardBtn.addEventListener("click", function() {
    easyBtn.classList.remove("selected");
    hardBtn.classList.add("selected");
    numSquares = 6;
    colors = generateRandomColors(numSquares);    
    pickerColor = pickColor();
    colorDisplay.textContent = pickerColor;

    for (var i=0; i < squares.length; i++) {
        squares[i].style.background = colors[i];
        squares[i].style.display = "block";
        }
    });


colorDisplay.textContent = pickerColor;

for(var i=0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];

    squares[i].addEventListener("click", function(){
    
    var clickedColor = this.style.backgroundColor;

    if (clickedColor === pickerColor) {
        messageDisplay.textContent = "Correct!!";
        h1.style.background = pickerColor;
        buttonReset.textContent = "Play Again?";
        for(var i=0; i < squares.length; i++) {
            squares[i].style.backgroundColor = pickerColor;
        }
    } else { this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again!" };
});


};

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
} 

function generateRandomColors(num) {
    var arr = [];

    for (var i=0; i < num; i++) {
        arr.push(randomColor());

    }
    return arr;
}

function randomColor() {
    var r = Math.floor(Math.random() * 256);

    var g = Math.floor(Math.random() * 256);

    var b = Math.floor(Math.random() * 256);

    return "rgb(" + r + ", " + g + ", " + b + ")";
}

buttonReset.addEventListener("click", function() {
    colors = generateRandomColors(numSquares);
    pickerColor = pickColor();
    colorDisplay.textContent = pickerColor;
    h1.style.backgroundColor = "steelblue";
    this.textContent = "New Colors";

    for (var i=0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
    }
});
