let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	//your code here
	let list = document.querySelector("#myList");
	let newElement = document.createElement("li");
	newElement.innerHTML = "Forth element";
	list.appendChild(newElement);
});
