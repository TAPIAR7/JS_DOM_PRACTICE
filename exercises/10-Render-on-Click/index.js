let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	//your code here
	let newElement = document.createElement("div");
	newElement.innerHTML = "Hello World";
	newElement.style.backgroundColor = "yellow";
	document.body.appendChild(newElement);
});
