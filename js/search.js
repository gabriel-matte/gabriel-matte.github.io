//Gets a string from the URL that contains search parameters
var searchString = window.location.search.split('?')[1];
//Declaring global parameters for use in script
var searchTerms;
var sortParam;
var refineCategory;
var refineBrand;
var refineRating;
var refineString;
var minPrice;
var maxPrice;
var relevantProducts = [];
var resultsGrid;

//Method to retrieve all search parameters from the URL string
//retrieves the each parameter (if any), stores it, and removes it from the end of the string before moving on to the next
function getRefineConstraints() {
    //Removes the ampersands from the string of search parameters for easier parsing
    searchString = searchString.replace(/&/g, '');

    
    if (searchString.includes('sort=')) {
        sortParam = searchString.split('sort=')[1];
        searchString = searchString.split('sort=')[0];
    }

    if (searchString.includes('minprice')) {
        refineString = searchString.split('minprice')[0];
        priceString = searchString.split('minprice=')[1];
        minPrice = priceString.split('maxprice=')[0];
        maxPrice = priceString.split('maxprice=')[1];  
        searchString = searchString.split('minprice')[0];
        console.log('MinPrice: ' + minPrice);
        console.log('MaxPrice: ' + maxPrice);
    }
    if (searchString.includes('rating=')) {
        refineRating = refineString.split('rating=');
        refineRating.shift();                                       //removes the string that includes the rest of the parameters
        refineString = refineString.split('rating=')[0];
        console.log(refineRating);
    }
    if (searchString.includes('brand=')) {
        refineBrand = refineString.split('brand=');
        refineBrand.shift();                                        //removes the string that includes the rest of the parameters
        refineString = refineString.split('brand=')[0];
    }
    if (searchString.includes('category=')) {
        refineCategory = refineString.split('category=');
        refineCategory.shift();                                     //removes and empty array index
    }    
}

//Function that finds products that have at least one matching type, brand, or model keyword
//This is used when keywords are searched in the search box
function generalSearch() {   
    products.forEach(function(product) {
        var checkDuplicate;                             //stores the id of the current product being checked.
        searchTerms.forEach(function(term) {
            var modelSpec = product.model.split(' ');         
            if (term.toLowerCase() === product.brand.toLowerCase() && checkDuplicate !== product.id) {
                relevantProducts.push(product);
                checkDuplicate = product.id;
            }
            else if (term.toLowerCase() === product.type.toLowerCase() && checkDuplicate !== product.id) {
                relevantProducts.push(product);
                checkDuplicate = product.id;
            }
            //searches for a match with each individual word in the model attribute
            else {
                modelSpec.forEach(function(specification) {
                if (term.toLowerCase() === specification.toLowerCase() && checkDuplicate !== product.id) {
                    relevantProducts.push(product);
                    checkDuplicate = product.id;
                }
                });
            }                      
        })        
    })
}

//Function that will only show products that meet ALL specified parameters.
//This is used when parameters are specified in the 'Refine Search' menu
function refineSearch() {

    products.forEach(function(product) {
        var typeMatch = false;
        var brandMatch = false;
        var ratingMatch = false;
        var priceMatch = false;

        //checks for current product parameter match. If search parameter not specified, returns true
        if (refineCategory) {
            refineCategory.forEach(function(type) {
                if (type.toLowerCase() === product.type.toLowerCase()) {
                    typeMatch = true;
                }
            })
        }
        else {typeMatch = true}

        if (refineBrand) {
            refineBrand.forEach(function(brand) {
                if (brand.toLowerCase() === product.brand.toLowerCase()) {
                    brandMatch = true;
                }
            })
        }
        else {brandMatch = true}

        if (refineRating) {
            refineRating.forEach(function(rating) {
                var a = parseInt(rating);
                if (a === product.rating) {
                    ratingMatch = true;
                }
            })
        }
        else {ratingMatch = true}
        
        //This will check that all parameters match current product. If yes, appends relevantProducts array with current product
        if (!minPrice && !maxPrice) {
            priceMatch = true;
        }
        else if (!minPrice && maxPrice > product.price) {
            priceMatch = true;
        }
        else if (!maxPrice && minPrice < product.price) {
            priceMatch = true;
        }
        else if (minPrice < product.price && maxPrice > product.price) {
            priceMatch = true;
        }

        if (typeMatch && brandMatch && ratingMatch && priceMatch) {
            relevantProducts.push(product);
        }
    })
}

//Function to determine if what type of search is to be done. 
//If search was entered in searchbar, run general search (matching any keyword). 
//If parameters were selected in the refine search, run refine search (matching ALL specified parameters).
function searchType(){
    if(searchString.includes('text=')) {
        searchString = searchString.replace(/text=/g, '');
        searchTerms = searchString.split('+');
        generalSearch();
    }
    else {
        refineSearch();
    }
}

//Function to sort the array of searched products by price or rating
function comparePriceAsc(a, b) {
    if (a.price > b.price) return 1;
    if (a.price < b.price) return -1;
    return 0;
}
function compareRatingAsc(a, b) {
    if (a.rating > b.rating) return 1;
    if (a.rating < b.rating) return -1;
    return 0;
}

//Uses the sort parameter in the URL
function sortRelevantProducts(relevantProducts) {
    if (sortParam === 'plh') {
        relevantProducts.sort(comparePriceAsc);
    }
    if (sortParam === 'phl') {
        relevantProducts.sort(comparePriceAsc);
        relevantProducts.reverse();
    }
    if (sortParam === 'rlh') {
        relevantProducts.sort(compareRatingAsc);
    }
    if (sortParam === 'rhl') {
        relevantProducts.sort(compareRatingAsc);
        relevantProducts.reverse();
    }
}

//Function to set the visual product rating representation (1 - 5 stars)
function setStars(product) {
    var stars = ''
    for(var i = 0; i < 5; i++) {
        if (i < product.rating) {
            stars += '&#9733;';
        }
        else {
            stars += '&#9734;';
        }
    }
    return stars;
}

//Creates the html elements to display each result in a specified style/format (see SearchStyle.css)
function populateResults() {
    if (relevantProducts.length !== 0) {
        relevantProducts.forEach(function(product) {
            var result = document.createElement('span');
                result.id = product.id;
                result.className = "container search-result-item";
            var box = document.createElement('div');
                box.className = "box container";
            var itemLink = document.createElement('a');
                itemLink.href = "product.html" + '?' + product.id;
            var imgBox = document.createElement('div');
                imgBox.className = "thumbnail-box";
            var link = document.createElement('a');
                link.href = "product.html" + '?' + product.id;
            var thumb = document.createElement('img');
                thumb.className = "thumbnail";
                thumb.src = product.image[0];
            var title = document.createElement('h5');
            var titleLink = document.createElement('a');
                titleLink.className = "button";
                titleLink.href = "Product.html" + '?' + product.id;
                titleLink.innerHTML = "" + product.brand + " " + product.model;
            var priceRating = document.createElement('div');
                priceRating.className = "priceRating";
            var price = document.createElement('h7');
                price.innerHTML = '$' + product.price.toFixed(2) + "<br>";
            var rating = document.createElement('h4');
                rating.className = "starRating";
                rating.innerHTML = setStars(product);

            //Ensures each new element is in the correct position on the page
            resultsGrid.appendChild(result);
            result.appendChild(box);
            box.appendChild(imgBox);
            imgBox.appendChild(link);
            link.appendChild(thumb);
            box.appendChild(title);
            title.appendChild(titleLink);
            box.appendChild(priceRating);
            priceRating.appendChild(price);
            priceRating.appendChild(rating);

            //Adds event to change border of search result that is currently being moused over
            result.onmouseover = function() {
                result.style.borderColor = "#EF8354";
                result.style.width = "304px";
                result.style.height = "304px"
                result.style.margin = "2px";               
            }
            //Event to revert search result border when mouse exits
            result.onmouseout = function() {
                result.style.borderColor = "grey";
                result.style.width = "300px";
                result.style.height = "300px"
                result.style.margin = "4px";
            }
        })
    }
    else {
        
        document.querySelector('#resultsGrid').innerHTML = "Sorry! We couldn't find any products that match your search.";
    }
}

//Add onclick events to the sort buttons. Append url with the correct parameter
document.querySelector('#sortPriceAsc').onclick = function() {
    var url = '';
    url += window.location.search;
    if (url.includes('sort=')) {
        url = url.split('sort=')[0];
    }
    window.location.search = url + 'sort=plh'
}
document.querySelector('#sortPriceDes').onclick = function() {
    var url = '';
    url += window.location.search;
    if (url.includes('sort=')) {
        url = url.split('sort=')[0];
    }
    window.location.search = url + 'sort=phl'
}
document.querySelector('#sortRatingAsc').onclick = function() {
    var url = '';
    url += window.location.search;
    if (url.includes('sort=')) {
        url = url.split('sort=')[0];
    }
    window.location.search = url + 'sort=rlh'
}
document.querySelector('#sortRatingDes').onclick = function() {
    var url = '';
    url += window.location.search;
    if (url.includes('sort=')) {
        url = url.split('sort=')[0];
    }
    window.location.search = url + 'sort=rhl'
}


window.onload = function() {

    resultsGrid = document.querySelector('#resultsGrid');

    getRefineConstraints();
    searchType();
    sortRelevantProducts(relevantProducts);
    populateResults();
}