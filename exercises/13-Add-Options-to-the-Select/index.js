window.onload = function() {
	console.log("The website was loaded...");
	let countries = ["USA", "France", "Italy", "Brazil", "Colombia", "Belize", "Venezuela"];

	// your code here

	let newElement = document.getElementById("mySelect");
	let newItem = `<option value="-1">Select your country</option>`;
	for (let index = 0; index < countries.length; index++) {
		newItem += `<option value="${index}">${countries[index]}</option>`;
	}
	newElement.innerHTML = newItem;
};

document.addEventListener("change", event => {
	let resultado = document.getElementById("mySelect");
	let newValue = resultado.value;
	let newCountry = resultado.options[resultado.selectedIndex].text;
	// console.log(newValue);
	// console.log(newCountry);
	alert(newCountry);
	// resultado.textContent = ` ${event.target.value}`;
});
