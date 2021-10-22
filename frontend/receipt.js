let totalOrderPrice = document.getElementById('orderTotal');
let totalOrderId = document.getElementById('orderId');

totalOrderPrice.innerHTML = localStorage.getItem('priceTotal');
totalOrderId.innerHTML = localStorage.getItem('orderId');
