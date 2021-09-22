let product = {};

function getProductId() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const id = urlParams.get('id');
    return id;
}

function getSingleProductId(id) {
    fetch('http://localhost:3000/api/cameras/' + id)
    .then((response) => {
        return response.json();
    })
    .then(data => {
      product = data;
      console.log(product);
      showProduct(data);
    })
    .catch((error) => console.error("FETCH ERROR:", error));
}

const id = getProductId();
getSingleProductId(id);


function showProduct(data) {
    let name = data.name;
    let cameraName = document.createElement('h5');
    cameraName.innerHTML = name;
    nameHtml.appendChild(cameraName);

    let price = data.price.toFixed(2)/100;
    let cameraPrice = document.createElement('p');
    cameraPrice.innerHTML = `$` + price;
    priceHtml.appendChild(cameraPrice);

    let description = data.description;
    let cameraDescrip = document.createElement('p');
    cameraDescrip.innerHTML = description;
    descriptionHtml.appendChild(cameraDescrip);

    let imageUrl = document.createElement('img');
    image.src = data.imageUrl;
    document.getElementById('image').appendChild(image);
    image.innerHTML = imageUrl; 
}
