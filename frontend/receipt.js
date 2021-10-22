let totalOrderPrice = document.getElementById('orderTotal');
let total = localStorage.getItem('total');
totalOrderPrice.innerHTML = "Total: $" + total;
totalOrderPrice.style.fontSize = "1.5rem";

let totalOrderId = document.getElementById('orderId');
totalOrderId.innerHTML = localStorage.getItem('orderId');
