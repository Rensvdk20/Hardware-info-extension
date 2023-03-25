// Find all a elements on the page
const products = document.getElementsByClassName("product");
let totalPrice = 0;

// console.log(products);

for (let i = 0; i < products.length; i++) {
	const priceColumn = products[i].children[2];
	//Check if there is a price
	if (priceColumn.contains(priceColumn.querySelector("h4 a"))) {
		//Get the HTML text
		elementText = priceColumn.querySelector("h4 a").innerText;

		//Clean the html text
		elementText = elementText.replace("€ ", "");

		//Change the text to a float
		const price = parseFloat(elementText.replace(",", "."));

		//Add the price to the total price
		totalPrice += price;
	}
}

//Products Table
const productsTable = document.querySelector(".wishlist__product-table");

//Create a div for the total price
const div = document.createElement("div");
div.innerHTML = `<h2>Total price: ${totalPrice.toFixed(2)}€</h2>`;

//Add the total price to the div
productsTable.appendChild(div);
