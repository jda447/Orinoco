let totalOrderPrice = document.getElementById('orderTotal');
totalOrderPrice.innerHTML = localStorage.getItem('total');

let totalOrderId = document.getElementById('orderId');
totalOrderId.innerHTML = localStorage.getItem('orderId');
