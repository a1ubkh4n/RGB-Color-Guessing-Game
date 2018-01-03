var numberOfSqures = 6;
var color = [];
var pickedColor;

var square = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButton = document.querySelectorAll(".mode");

init();

function init() {

	setupModeButtons();
	setupSquares();
	reset();
};


function setupModeButtons() {
	for(var i = 0; i < modeButton.length; i++) {
		modeButton[i].addEventListener('click', function() {
			modeButton[0].classList.remove("selected");
			modeButton[1].classList.remove("selected");
			this.classList.add("selected");

			this.textContent === "Easy" ? numberOfSqures = 3 : numberOfSqures = 6;
			reset();
		});
	}
}


function setupSquares() {
		for(var i = 0; i < square.length; i++) {
		square[i].style.background = color[i];

		square[i].addEventListener('click', function() {
			var clickedColor = this.style.background;

			if(clickedColor === pickedColor) {
				messageDisplay.textContent = "Correct";
				resetButton.textContent = 'Play Again!'
				changeColors(pickedColor);
				h1.style.background = clickedColor;
			}
			else {
				this.style.background = "#232323";
				messageDisplay.textContent = "Try Again";
			}
		});
	}
}

function reset() {
	color = generateRandomColors(numberOfSqures);
	pickedColor = pickColor(); 
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors";
	messageDisplay.textContent = "";

	for(var i = 0; i < square.length; i++) {
		if(color[i]) {
			square[i].style.display = 'block';
			square[i].style.background = color[i];
		}
		else {
			square[i].style.display = "none";
		}
	}
	h1.style.background = "steelblue";
}


resetButton.addEventListener('click', function() {
	reset();
});


function changeColors(color) {
	// loop through all squares

	for(var i = 0; i<square.length; i++ ) {
		square[i].style.background = color;
	}
}

function pickColor() {
	var random = Math.floor(Math.random() * color.length);
	return color[random];
}

function generateRandomColors(num) {
	var arr = [];

	for(var i = 0; i<num; i++) {
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