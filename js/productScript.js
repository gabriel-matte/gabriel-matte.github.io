
//finds the product id from the url
var productId = window.location.search.split('?')[1];

//Declaration to store the product object displayed on the product page
var mainProd = {};
//Declaration of global variables.
var image1;
var productName;
var productDescription;
var featureList;
var productMore;
var price;
var rating;
var selectQuantity;
var q1;
var q2;
var q3;
var similarProductBox;
var feature1;
var feature2;
var feature3;

//selects the product from array of products
function selectProduct(products) {
    products.forEach(function(product) {
        if (product.id === productId) {
            Object.assign(mainProd, product);
        }
    })
}

//Function to set the visual product rating representation (1 - 5 stars)
function setStars() {
    var stars = ''
    for(var i = 0; i < 5; i++) {
        if (i < mainProd.rating) {
            stars += '&#9733;';
        }
        else {
            stars += '&#9734;';
        }
    }
    return stars;
}

//Fills HTML elements with specified product details
function setProductInfo() {
    image1.src = mainProd.image[1];
    productName.innerHTML = `${mainProd.brand} ${mainProd.model} ${mainProd.type}`;
    productDescription.innerHTML = mainProd.description;
    productMore.innerHTML = mainProd.moreDescription;
    price.innerHTML = '$' + mainProd.price.toFixed(2);
    rating.innerHTML = setStars();
    //creates HTML elements to display miniature versions of each image related to the product (excluding the thumbnail) stored in the database
    //adds a .onmouseover event to display the specified image largely in the 'primaryImage' element
    for(var i = 1; i < mainProd.image.length; i++) {
        var thumbSlot = document.createElement('div');
        thumbSlot.className = "container imageThumbSlot";
        thumbSlot.id = mainProd.image[i];
        thumbSlot.style.backgroundImage = "url('" + mainProd.image[i] + "')";
        document.querySelector('#thumbColumn').appendChild(thumbSlot);
        thumbSlot.onmouseover = function() {
            image1.src = this.id;
        }
    }
}

//Displays the product features in list format
function setFeatures() {
    mainProd.features.forEach(function(feature) {
        var x = document.createElement('li');
        x.innerHTML = feature;
        featureList.appendChild(x);
    })
}

//updates the price based on quantity selected
function calcPrice() {
    var newPrice = 0;
    if (q2.selected) {
        newPrice = mainProd.price * q2.value;
    }
    else if (q3.selected) {
        newPrice = mainProd.price * q3.value;
    }
    else {
        newPrice = mainProd.price * q1.value;
    }
    price.innerHTML = '$' + newPrice.toFixed(2);
}


window.onload = function() {

    //defines the global variables as specific HTML elements once the web page is loaded
    image1 = document.querySelector('#image1');
    productName = document.querySelector('#prodName');
    productDescription = document.querySelector('#prodDescription');
    featureList = document.querySelector('#featureList');
    productMore = document.querySelector('#moreDescription');
    price = document.querySelector('#price');
    rating = document.querySelector('#rating');
    selectQuantity = document.querySelector('#selectQuantity');
    q1 = document.querySelector("#q1");
    q2 = document.querySelector("#q2");
    q3 = document.querySelector("#q3");
    similarProductBox = document.querySelectorAll('.featureHome');
    feature1 = document.querySelector('#feature1');
    feature2 = document.querySelector('#feature2');
    feature3 = document.querySelector('#feature3');

    selectProduct(products);
    setProductInfo();
    setFeatures();
    setAdditionalProducts(similarIndexes);
}





