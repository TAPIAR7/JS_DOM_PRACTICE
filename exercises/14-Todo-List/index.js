// Your code here
let listElement = document.getElementById("container");
let icons = document.getElementsByTagName("i");
let inputElement = document.getElementById("addToDo");

window.onload = function() {
	addEvenListenerIcons;
};
function addEvenListenerIcons() {
	icons.addEventListener("click");
}
inputElement.addEventListener("keyup", function(event) {
	let li = document.createElement("li");
	li.innerHTML = `<span><i class="fa fa-trash"></i></span> ${inputElement.value}`; //inputElement.value of input
	if (event.keyCode === 13) {
		// Number 13 is the "Enter" key on the keyboard
		listElement.childNodes[5].appendChild(li);
		addEvenListenerIcons;
	}
});
window.onclick = e => {
	if (e.target.tagName === "I") {
		// console.log(e.target); // to get the element
		e.target.parentNode.parentNode.parentNode.removeChild(e.target.parentNode.parentNode);
	}
};

// function myFunction() {
// 	alert("Hello World!");

// 	// iconElement.parentNode.parentNode.parentNode.removeChild(iconElement.parentNode.parentNode);
// }

// `<li><span><i class="fa fa-trash"></i></span> Eat</li>`

//Another variables used to test app
// console.log(listElement.childNodes[5]); // 5 is the ul 3 is the input
// let ulList = listElement.childNodes[5];
// console.log(ulList.childNodes[1].innerText); // 5 is the ul 3 is the input
// console.log(ulList.childNodes);

// let toDelete = ulList.childNodes[1];
// let iconElement = toDelete.childNodes[1].childNodes[0];
// window.onload = function() {
// 	console.log(icons);
// 	addEvenListenerIcons;
// icons.addEventListener("click");
// iconElement.addEventListener("click", myFunction);
// };

// This another way to find an delete an element
//let searchWord = ulList.childNodes[1].innerText.replace(/\s/g, ""); // This is for seraching a text to delete.
// if (searchWord === "Eat") {
// 	console.log("We do it");
// 	toDelete.parentNode.removeChild(toDelete); //This is to delete an alement.
// } else {
// 	console.log("Try again");
// }
