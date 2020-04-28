const GRID_SIZE = 16; /* DEFAULT SIZE */
const MAX = 255; /* COLOR */
const BLACK = "0,0,0";
const BLACK_MODE = "blackmode";
const CRAZY_MODE = "crazymode";
const RESET_GRID = "resetgrid";
const btnBlackMode = document.getElementById(BLACK_MODE);
const btnCrazyMode = document.getElementById(CRAZY_MODE);
const btnResetGrid = document.getElementById(RESET_GRID);

/* Button Events Start Below */
btnBlackMode.addEventListener('click', function(e){
	console.log(e + ': Black Mode Activated!');
	hoverListener(BLACK_MODE);
});

btnCrazyMode.addEventListener('click', function(e){
	console.log(e + ': Crazy Mode Activated!');
	hoverListener(CRAZY_MODE);
});

btnResetGrid.addEventListener('click', function(e){
	console.log(e + ': Reset Grid Activated!');
	setGrid(Number(window.prompt("New size of the grid", "16")));
	hoverListener(BLACK_MODE);
});
/* Button Events End Above */

function createDiv(column, row){
	let newDiv = document.createElement("div");
	newDiv.setAttribute("id", "div" + column + "-" + row);
	newDiv.setAttribute("class", "cell");
	document.getElementById('grid').appendChild(newDiv);
}

function setGrid(size){
	let gridDiv = document.getElementById("grid");
	gridDiv.setAttribute("style", "grid-template-columns: repeat(" + size + ", 1fr); grid-template-rows: repeat(" + size + ", 1fr);");
	for(let i = 1; i <= size; i++){
		for(let j = 1; j <= size; j++){
			createDiv(j, i);
			let newDiv = document.getElementById("div" + j + "-" + i);
			newDiv.setAttribute("style", "grid-column-start: " + j + "; grid-column-end: " + j + ";");
			newDiv.setAttribute("style", "grid-row-start: " + i + "; grid-row-end: " + i + ";");
		}
	}
}

function generateRandomColor(max){
	let r = Math.floor(Math.random() * Math.floor(max));
	let g = Math.floor(Math.random() * Math.floor(max));
	let b = Math.floor(Math.random() * Math.floor(max));
	return r + "," + g + "," + b;
}

function hoverListener(mode){
	let allCells = document.querySelectorAll(".cell");
	let color;
	return allCells.forEach((cell) =>
		cell.addEventListener("mouseover", function (e) {
			if(mode == BLACK_MODE)
				color = BLACK;
			else if (mode == CRAZY_MODE)
				color = generateRandomColor(MAX);
			e.target.style["background-color"] = `rgb(${color})`;
		}));
}

/* Default to 16 and BLACK_MODE */
setGrid(GRID_SIZE);
hoverListener(BLACK_MODE);
