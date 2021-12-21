let greenItem = document.getElementById("item");
console.log(greenItem)
// let secondItem = document.getElementById("secondItem");
// console.log(greenItem)

//1. dragstart MANDATORY
greenItem.addEventListener("dragstart", startToDrag);
// greenItem.addEventListener("dragend", startToDrag);
// secondItem.addEventListener("dragstart", startToDrag);

function startToDrag (e) {
	console.log('e.target : ', e.target)
	console.log("starting");
	e.target.classList.toggle("draggedItemAfter");
	console.log('e.dataTransfer : ', e.dataTransfer)

	//set the data to be dropped in the future
	//set the data MANDATORY
	e.dataTransfer.setData("text/plain", e.target.id);
}

// function endToDrag (e) {
// 	console.log("ending");
// 	e.target.style.backgroundColor = 'lightgreen';
// }


//2. Retrieve the valid drop target
let allDropTargets = document.querySelectorAll(".dropzone");

for (let dropzone of allDropTargets){
	// dragover event MANDATORY
	dropzone.addEventListener("dragover", draggingOver)

	// the items enters a valid drop target
	dropzone.addEventListener("dragenter", changeBorder)
	// the items leaves a valid drop target
	dropzone.addEventListener("dragleave", changeBorder)

	//drop event MANDATORY
	dropzone.addEventListener("drop", droppingItem)
}

function draggingOver(e){
	// preventDefault() MANDATORY
	e.preventDefault();
	// e.target.style.border = "1px dotted red"
}

function changeBorder(e){
	e.target.classList.toggle("dragEnterTarget")
}

//3. Drop
function droppingItem(e){
	//preventDefault MANDATORY
	e.preventDefault();
	
	//getData MANDATORY that we set in the dragstart event
	//we retrieve the id of the element that we want to drop
	let dataItem = e.dataTransfer.getData("text/plain");
	console.log("dataItem", dataItem) //id of the green box
	
	//find the element with this specific id
	let draggedItem = document.getElementById(dataItem);
	//append the element in the drop zone
	console.log("e.target : ", e.target)
	e.target.appendChild(draggedItem);
}

