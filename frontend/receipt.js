let totalOrderPrice = document.getElementById('orderTotal');
let total = localStorage.getItem('total');
totalOrderPrice.innerHTML = "Total: $" + total;
totalOrderPrice.style.fontSize = "1.5rem";

let totalOrderId = document.getElementById('orderId');
let iD = localStorage.getItem('orderId');
totalOrderId.innerHTML = "Order ID - " + iD;
totalOrderId.style.fontSize = "1.5rem";
