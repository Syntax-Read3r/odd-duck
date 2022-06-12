// TODO:
// Create a constructorFn() that creates an objected associated with each product and has the following properties: Name of the product
//						  File path of image of the product
//  					  Number of times the image as been shown on the webapp
// [x]
function ProductImages(productName, productFilePath) {
	this.name = productName;
	this.path = productFilePath;
	this.clickAcc = 0;
	this.views = 0
	allProds.push(this)
}

var arr = [
	'bag','banana','bathroom','boots','breakfast','bubblegum','chair','cthulhu','dog-duck','dragon','pen','pet-sweep','scissors','tauntaun','unicorn','water-can','wine-glass'
];
const allProds = [];

for(let x in arr) {
new ProductImages(arr[x], `./images/assets/${arr[x]}.jpg`);
}

// TODO:
// Create an algorithm that will randomly generate three unique product images from the images directory and display them side-by-side-by-side in the browser window.


function getRandomImage() {
	randomIndex = Math.floor(Math.random() * allProds.length);
	randomIndex2 = Math.floor(Math.random() * allProds.length);
	randomIndex3 = Math.floor(Math.random() * allProds.length);


	selected_Image = allProds[randomIndex];
	selected_Image2 = allProds[randomIndex2];
	selected_Image3 = allProds[randomIndex3];

	if(selected_Image === selected_Image2 || selected_Image2 === selected_Image3 || selected_Image === selected_Image3) {
	getRandomImage()
	} else {
		selected_Image.render();
		selected_Image2.render();
		selected_Image3.render();
	}

}

const innerContainer = document.getElementById('images');


ProductImages.prototype.render = function() {
	const mything = this;
	const imageEle = document.createElement('img');
	imageEle.setAttribute('src', this.path);
	imageEle.addEventListener('click', function() {
		mything.clickAcc++
	})
	innerContainer.appendChild(imageEle);
}



getRandomImage();

//COMMENT: Click event and data.

