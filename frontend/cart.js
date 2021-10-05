let cartItems = JSON.parse(localStorage.getItem('cart'));
const tableHtml = document.getElementById('result');

    
if (typeof(Storage) !== "cart") {
    for (let i in cartItems) {
        console.log(cartItems[i]);

        let itemRow = document.createElement("tr");
        itemRow.setAttribute("id", "myTr");

        let imageUrl = document.createElement('img');
        imageUrl.src = cartItems[i].imageUrl;
        imageUrl.style.height = '20%';
        imageUrl.style.width = '20%';

        let cameraName = document.createElement('td');
        let name = cartItems[i].name;
        cameraName.innerHTML = name;

        let cameraPrice = document.createElement('td');
        let price = cartItems[i].price.toFixed(2)/100;
        cameraPrice.innerHTML = `$` + price;

        let select = document.createElement('td');
        let selectLenses = cartItems[i].selectLenses;
        select.innerHTML = selectLenses;

        document.getElementById("result").appendChild(itemRow);
        document.getElementById('myTr').appendChild(imageUrl);
        document.getElementById("myTr").appendChild(cameraName);
        document.getElementById("myTr").appendChild(cameraPrice);
        document.getElementById("myTr").appendChild(select);

        let deleteBtn = document.createElement('td');
        document.getElementById("myTr").appendChild(deleteBtn);
        deleteBtn.innerHTML = `<input type="button" value="Delete" onclick="deleteRow(this)">`;
        

    }
}

function deleteRow(r) {
    let i = r.parentNode.parentNode.rowIndex;
    document.getElementById("result").deleteRow(i);
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
