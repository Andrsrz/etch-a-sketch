var GRID_SIZE = 4;

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

function randomColor(){

}

function hoverListener() {
	let allCells = document.querySelectorAll(".cell");
	return allCells.forEach((cell) =>
		cell.addEventListener("mouseover", function () {
			cell.style.backgroundColor = "black";
		}));
}

/* Default to 16 */
setGrid(GRID_SIZE);
hoverListener();
