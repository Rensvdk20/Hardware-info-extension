// Get the products
const products = document.getElementsByClassName("product");
let totalPrice = 0;

for (let i = 0; i < products.length; i++) {
	const priceColumn = products[i].children[2];
	const amountColumn = products[i].children[3];
	//Check if there is a price
	if (priceColumn.contains(priceColumn.querySelector("h4 a"))) {
		//Get the HTML text
		let priceText = priceColumn.querySelector("h4 a").innerText;

		//Clean the html text
		priceText = priceText.replace("€ ", "");

		//Change the text to a float
		const price = parseFloat(priceText.replace(",", "."));

		//Get how many times the product is selected
		const amount = amountColumn.querySelector("input").value;

		//Add the price to the total price
		totalPrice += price * amount;
	}
}

//Products Table
const productsTable = document.querySelector(".wishlist__product-table");

//Create a div for the total price
const div = document.createElement("div");
div.innerHTML = `<h2>Total price: €${totalPrice.toFixed(2)}</h2>`;

//Add the total price to the div
productsTable.appendChild(div);
