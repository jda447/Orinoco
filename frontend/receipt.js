let totalOrderPrice = document.getElementById('orderTotal');
let totalOrderId = document.getElementById('orderId');

totalOrderPrice.innerHTML = localStorage.getItem('total');
totalOrderId.innerHTML = localStorage.getItem('orderId');
