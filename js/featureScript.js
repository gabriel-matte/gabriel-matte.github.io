
//Finds the indexes of three products from the database, prioritizing products with a brand and type match, then just a type match
//to the main product of the current product page
function similarIndexes() {
    var index = [];
    var count = 0;
    while (count < 3) {
        for (var i = 0; i < products.length; i++) {
            if (products[i].type === mainProd.type && products[i].brand === mainProd.brand && products[i].id !== mainProd.id){
                index.push(i);
                count++;
            }   
        }
        if (count < 3) {
            for (var i = 0; i < products.length; i++) {
                if (products[i].type === mainProd.type && products[i].id !== mainProd.id && i !== index[0] && i !== index[1]) {
                    index.push(i);
                    count++;
                }
            }
        }
    }
    return index;
}

//gets three random indexes of products from the database
function randomIndexes() {
    var index = [];
    index[0] = Math.floor(Math.random() * products.length);
    do {
        index[1] = Math.floor(Math.random() * products.length);
    }
    while (index[0] === index[1]);
    do {
        index[2] = Math.floor(Math.random() * products.length);
    }
    while (index[2] === index[0] || index[2] === index[1]);
    return index;
}

//fills the HTML for the 'Feature Products' or 'Similar Products' banners based on randomIndexes() or similarIndexes() 
function setAdditionalProducts(functionIndex) {
    var indexes = functionIndex();
    var prod1 = {};
    var prod2 = {};
    var prod3 = {};
    Object.assign(prod1, products[indexes[0]]);
    Object.assign(prod2, products[indexes[1]]);
    Object.assign(prod3, products[indexes[2]]);
    feature1.querySelector('img').src = prod1.image[0];
    feature1.querySelector('img').href = "product.html" + '?' + prod1.id;
    feature1.querySelector('a').innerHTML = prod1.brand + ' ' + prod1.model + ' ' + prod1.type;
    feature1.querySelector('a').href = "product.html" + '?' + prod1.id;
    feature1.querySelector('p').innerHTML = prod1.description.split('. ')[0] + '.';
    
    feature2.querySelector('img').src = prod2.image[0];
    feature2.querySelector('img').href = "product.html" + '?' + prod2.id;
    feature2.querySelector('a').innerHTML = prod2.brand + prod2.model + prod2.type;
    feature2.querySelector('a').href = "product.html" + '?' + prod2.id;
    feature2.querySelector('p').innerHTML = prod2.description.split('. ')[0] + '.';

    feature3.querySelector('img').src = prod3.image[0];
    feature3.querySelector('img').href = "product.html" + '?' + prod3.id;
    feature3.querySelector('a').innerHTML = prod3.brand + ' ' + prod3.model + ' ' + prod3.type;
    feature3.querySelector('a').href = "product.html" + '?' + prod3.id;
    feature3.querySelector('p').innerHTML = prod3.description.split('. ')[0] + '.';

}


