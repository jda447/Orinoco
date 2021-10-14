let cartItems = JSON.parse(localStorage.getItem('cart'));
const tableHtml = document.getElementById('result');
let cartNumber = document.getElementById('cartNumber');  

for (let i in cartItems) {
    console.log(cartItems[i]);

    let itemRow = document.createElement("tr");

    let imageUrl = document.createElement('img');
    imageUrl.src = cartItems[i].imageUrl;
    imageUrl.style.height = '72%';
    imageUrl.style.width = '72%';
    imageUrl.style.margin = "0.5rem";

    let cameraName = document.createElement('td');
    let name = cartItems[i].name;
    cameraName.innerHTML = name;
    cameraName.style.fontWeight = "600";
    cameraName.style.padding = "1rem";

    let lens = document.createElement('td');
    let selectLenses = cartItems[i].selectLenses;
    lens.innerHTML = selectLenses;
    lens.style.fontSize = "0.8rem";
    lens.style.padding = "1rem";

    let cameraPrice = document.createElement('td');
    let price = cartItems[i].price.toFixed(2)/100;
    cameraPrice.innerHTML = `$` + price;
    cameraPrice.style.fontWeight = "550";
    cameraPrice.style.padding = "1rem";

    tableHtml.appendChild(itemRow);
    itemRow.appendChild(imageUrl);
    itemRow.appendChild(cameraName);
    itemRow.appendChild(lens);
    itemRow.appendChild(cameraPrice);
    
    let quantity = document.createElement('td');
    quantity.innerHTML = `
        <input id="userInput" type="number" value ="${cartItems[i].quantity}" min="1">`;
    quantity.style.padding = "1rem";
    itemRow.appendChild(quantity);

    let deleteBtn = document.createElement('td');
    deleteBtn.innerHTML = `
        <input type="button" value="Delete" onclick="deleteRow(this)">`;
    deleteBtn.style.paddingRight = "1rem";
    itemRow.appendChild(deleteBtn);

    itemRow.style.border = "thin solid silver";
}


function deleteRow(r) {
    let i = r.parentNode.parentNode.rowIndex;
    document.getElementById("result").deleteRow(i);

    let cartItems = JSON.parse(localStorage.getItem('cart'));
    cartItems.splice(i, 1);
    localStorage.setItem('cart', JSON.stringify(cartItems));
    localStorage.setItem('cartNumber', JSON.stringify(cartItems.length));
    cartNumber.innerHTML = cartItems.length;
}


function increment() {
    document.getElementById('userInput').stepUp();
}


 function decrement() {
    document.getElementById('userInput').stepDown();
}


function totalInCart() {
    if (cartItems) {
        localStorage.setItem('cartNumber', JSON.stringify(cartItems.length));
        cartNumber.innerHTML = cartItems.length;
    }
}
totalInCart()


let totalHtml = document.getElementById('total');
let startPrice = 0;

function totalCartPrice() {
    if(cartItems){
        for (let i in cartItems) {
            let itemPrice = cartItems[i].price.toFixed(2)/100;
            itemPrice=parseInt(itemPrice);
            console.log(itemPrice);

            let totalPrice = itemPrice * cartItems[i].quantity;
            totalPrice += startPrice;
            totalHtml.innerHTML = `$` + itemPrice;
    }
    /*if(cartItems){
        for (let i in cartItems) {
            let itemPrice = cartItems[i].price.toFixed(2)/100;
            itemPrice=parseInt(itemPrice);
            let totalPrice = price * cartItems[i].quantity;
            itemPrice += startPrice;
            totalHtml.innerHTML = startPrice;
            

    }
        
        let itemPrice = cartItems[i].price.toFixed(2)/100;
        let quantity = cartItems[i].quantity;
        console.log(itemPrice, quantity);

        localStorage.setItem('itemPrice', itemPrice);
        localStorage.setItem('quantity', quantity);
        localStorage.setItem('totalCost', itemPrice * quantity);

        
        let totalHtml = document.getElementById('total');
        let startPrice = 0;
        let cameraPrice = document.createElement('p');
        totalHtml.appendChild(cameraPrice);
        
        let price = cartItems[i].price.toFixed(2)/100;
        let totalPrice = price * cartItems[i].quantity;
        totalHtml.innerHTML = "$" + totalPrice;

        function myFunction(item) {
            startPrice += item;
        }

        */
}
}
totalCartPrice();
