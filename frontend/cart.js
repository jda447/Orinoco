let cartItems = JSON.parse(localStorage.getItem('cart'));
const tableHtml = document.getElementById('result');
let cartNumber = document.getElementById('cartNumber');  

for (let i in cartItems) {
    console.log(cartItems[i]);

    let itemRow = document.createElement("tr");
    itemRow.style.border = "thin solid silver";

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
    
    let quantityTd = document.createElement('td');
    let input = document.createElement('input');
    let quantity = cartItems[i].quantity;
    input.setAttribute('type', 'number');
    input.setAttribute('min', '1');
    input.setAttribute('value', quantity);
        input.addEventListener('change', () => {
	        quantity = Number.parseInt(input.value);
        })
    quantityTd.style.padding = "1rem";
    itemRow.appendChild(quantityTd);
    quantityTd.appendChild(input);

    let deleteTd = document.createElement('td');
    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.setAttribute('class', 'btn btn-danger');
        deleteBtn.addEventListener('click', () => {
            deleteRow(itemRow, i);
        })
    deleteTd.style.paddingRight = "1rem";
    itemRow.appendChild(deleteTd);
    deleteTd.appendChild(deleteBtn);

}


function increment() {
    document.getElementById('userInput').stepUp();
}


 function decrement() {
    document.getElementById('userInput').stepDown();
}


function totalInCart() {
        localStorage.setItem('cartNumber', JSON.stringify(cartItems.length));
        cartNumber.innerHTML = cartItems.length;
}
totalInCart();


function totalCartPrice() {
    let totalHtml = document.getElementById('total');
    let cartPrice = 0;
        if (cartItems) {
            for (let i=0; i < cartItems.length; i++) {
                let cartTotal = cartItems[i].price.toFixed(2)/100;
                let quantity = cartItems[i].quantity;
                let totalPrice = cartTotal * quantity;
                cartPrice += totalPrice;
            }
            if (totalHtml) {
                totalHtml.innerHTML = "Total: $" + cartPrice;
                totalHtml.style.fontSize = "1.5rem";
            }
        }
}
totalCartPrice();


function deleteRow(r, i) {
    r.remove();
    cartItems.splice(i, 1);
    localStorage.setItem('cart', JSON.stringify(cartItems));
    localStorage.setItem('cartNumber', JSON.stringify(cartItems.length));
    totalInCart();
    totalCartPrice();
}

    
