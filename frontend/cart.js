let cartItems = JSON.parse(localStorage.getItem('cart'));
const tableHtml = document.getElementById('result');

    
if (typeof(Storage) !== "cart") {
    for (let i in cartItems) {
        console.log(cartItems[i]);

        let itemRow = document.createElement("tr");

        let imageUrl = document.createElement('img');
        imageUrl.src = cartItems[i].imageUrl;
        imageUrl.style.height = '72%';
        imageUrl.style.width = '72%';
        imageUrl.style.marginTop = "0.5rem";

        let cameraName = document.createElement('td');
        let name = cartItems[i].name;
        cameraName.innerHTML = name;

        let cameraPrice = document.createElement('td');
        let price = cartItems[i].price.toFixed(2)/100;
        cameraPrice.innerHTML = `$` + price;

        let select = document.createElement('td');
        let selectLenses = cartItems[i].selectLenses;
        select.innerHTML = selectLenses;

        tableHtml.appendChild(itemRow);
        itemRow.appendChild(imageUrl);
        itemRow.appendChild(cameraName);
        itemRow.appendChild(cameraPrice);
        itemRow.appendChild(select);

        let deleteBtn = document.createElement('td');
        itemRow.appendChild(deleteBtn);
        deleteBtn.innerHTML = `<input type="button" value="Delete" onclick="deleteRow(this)">`;
        

    }
}

function deleteRow(r) {
    let i = r.parentNode.parentNode.rowIndex;
    document.getElementById("result").deleteRow(i);

    let cartItems = JSON.parse(localStorage.getItem('cart'));
    cartItems.splice(r, 1);
    localStorage.setItem('cart', JSON.stringify(cartItems));
}
