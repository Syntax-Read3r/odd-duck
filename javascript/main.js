// TODO:
// Create a constructorFn() that creates an objected associated with each product and has the following properties: Name of the product
//						  File path of image of the product
//  					  Number of times the image as been shown on the webapp
// [x]
function ProductImages(productName, productFilePath) {
  this.name = productName;
  this.path = productFilePath;
  this.clickAcc = 0;
  this.views = 0;
  allProds.push(this);
}

let rounds = 25;
let prevNumbers = [];

ProductImages.prototype.render = function () {
  this.views++;
  const theProduct = this;
  const imageEle = document.createElement("img");
  imageEle.setAttribute("src", this.path);
  imageEle.setAttribute("alt", this.name);
  innerContainer.appendChild(imageEle);

  imageEle.addEventListener("click", function () {
    theProduct.clickAcc++;

    if (rounds > 1) {
      // if there are still rounds to go
      rounds--;
      getRandomImages();
    } else {
      //remove event listeners and display results
      const button = document.getElementById("results-btn");
      button.addEventListener("click", function () {
        getResults();
      });
      button.removeAttribute("hidden");
    }
  });

  if (rounds === 0) {
    //remove event listener
    imageEle.removeEventListener("click");
  }
};

var arr = [
  "bag",
  "banana",
  "bathroom",
  "boots",
  "breakfast",
  "bubblegum",
  "chair",
  "cthulhu",
  "dog-duck",
  "dragon",
  "pen",
  "pet-sweep",
  "scissors",
  "tauntaun",
  "unicorn",
  "water-can",
  "wine-glass",
];
const allProds = [];

const innerContainer = document.getElementById("images");

for (let x in arr) {
  new ProductImages(arr[x], `./images/assets/${arr[x]}.jpg`);
}

// TODO:
// Create an algorithm that will randomly generate three unique product images from the images directory and display them side-by-side-by-side in the browser window.
// [x]
getRandomImages();
function random() {
  return (randomIndex = Math.floor(Math.random() * allProds.length));
}

function getRandomImages() {
  selected_Image = allProds[random()];
  selected_Image2 = allProds[random()];
  selected_Image3 = allProds[random()];

  if (
    selected_Image === selected_Image2 ||
    selected_Image2 === selected_Image3 ||
    selected_Image === selected_Image3
  ) {
    getRandomImages();
  } else {
    if (
      prevNumbers.includes(allProds.indexOf(selected_Image)) ||
      prevNumbers.includes(allProds.indexOf(selected_Image2)) ||
      prevNumbers.includes(allProds.indexOf(selected_Image3))
    ) {
      console.log("Woops try again");
      getRandomImages();
    } else {
      prevNumbers = [];
      prevNumbers.push(allProds.indexOf(selected_Image));
      prevNumbers.push(allProds.indexOf(selected_Image2));
      prevNumbers.push(allProds.indexOf(selected_Image3));
      innerContainer.innerHTML = "";

      selected_Image.render();
      selected_Image2.render();
      selected_Image3.render();
    }
  }
}

//Create a function that will display the results of the voting process.
function getResults() {
  const results = document.getElementById("results-list");
  const data = [];
  const labelNames = [];

  for (let x in allProds) {
    const itemClicked = allProds[x].clickAcc;
    if (itemClicked > 0) {
      data.push(itemClicked);
      labelNames.push(allProds[x].name);
      const listItem = document.createElement("li");
      console.log(listItem);
      listItem.innerHTML = `${allProds[x].name} had  ${allProds[x].clickAcc} votes and was viewed ${allProds[x].views} times`;
      results.appendChild(listItem);
    }
  }

  const ctx = document.getElementById("chart").getContext("2d"); //get context is a chart js method stating a 2d graph.

  new Chart(ctx, {
    type: "bar",
    data: {
      labels: labelNames,
      datasets: [
        {
          label: "# of Votes",
          data: data,
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)",
          ],
        },
      ],
    },
    options: {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
    },
  });

  results.removeAttribute("hidden");
  const button = document.getElementById("results-btn");
  button.setAttribute("hidden", true);
}

//COMMENT: Click event and data.

//TODO:
//For each image that shows up, increment a property that to keep count of how many times the image has been shown
//HACK:AND
//How many times the image has been clickAcc

//TODO:
//Once a user clicks an image of a product, generate three new products for the user to pick from

//TODO:
//Add a limiter to how many times of 25 rounds before showing the results of the test.

//TODO:
//Show the user the results of their clicks by creating a methods attached to the main contrustorFN()
//Remove the event listeners after the limiter has been reached.

//TODO:
//Add a button with text that say, 'View Results', which when clickAcc displays the list of all the produts followed by the votes received and the number of times seen for each image
//HACK: Example
//banana had 3 votes, and was seen 5 times.

//create a chart that shows the results of the test
