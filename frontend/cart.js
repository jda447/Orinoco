let cartItems = JSON.parse(localStorage.getItem('cart'));
const tableHtml = document.getElementById('result');

    
if (typeof(Storage) !== "cart") {
    for (let i in cartItems) {
        console.log(cartItems[i]);

        let imageUrl = document.createElement('img');
        imageUrl.src = cartItems[i].imageUrl;
        imageUrl.style.height = '20%';
        imageUrl.style.width = '20%';

        let name = cartItems[i].name;
        let cameraName = document.createElement('tr');
        cameraName.innerHTML = name;

        let price = cartItems[i].price.toFixed(2)/100;
        let cameraPrice = document.createElement('tr');
        cameraPrice.innerHTML = `$` + price;
        
        let selectLenses = cartItems[i].selectLenses;
        let select = document.createElement('tr');
        select.innerHTML = selectLenses;

        document.getElementById('result').appendChild(imageUrl);
        result.appendChild(cameraName);
        result.appendChild(cameraPrice);
        result.appendChild(select);

        let deleteBtn = document.createElement('button');
        result.appendChild(deleteBtn);
        deleteBtn.innerHTML = `<input type="button" value="Delete" onclick="deleteRow(this)">`;

        function deleteRow(r) {
            let i = r.parentNode.parentNode.rowIndex;
            document.getElementById("result").deleteRow(i);
          }

    }
}


/*
    let tr = document.createElement('tr');
    let imageCart = document.createElement('img');
    let nameCart = document.createElement('p');
    let lensCart = document.createElement('td');
    let priceCart = document.createElement('td');
    let btnRemoveCart = document.createElement('td');
    let divNameCart = document.createElement('td');
    let quantityCart = document.createElement('td');
*/
