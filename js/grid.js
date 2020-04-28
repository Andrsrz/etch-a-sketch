var GRID_SIZE = 16;

/* Default to 16 */
setGrid(GRID_SIZE);

function createDiv(column, row){
	let newDiv = document.createElement("div");
	newDiv.setAttribute("id", "div" + column + "-" + row);
	newDiv.setAttribute("class", "gridchild");
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
