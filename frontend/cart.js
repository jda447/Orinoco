let cartItems = JSON.parse(localStorage.getItem('cart'));
console.log(cartItems);

let imageCart = document.createElement('img');
let nameCart = document.createElement('p');
let lensCart = document.createElement('td');
let priceCart = document.createElement('td');
let btnRemoveCart = document.createElement('td');
let divName = document.createElement('td');
let quantity = document.createElement('td');


/*function showCartItems() {
let cartItems = JSON.parse(localStorage.getItem('cart'));
    if (cartItems)    
        for (let i in cartItems) {
                let tableRow = document.createElement('tr');
            }
}
showCartItems();
*/
