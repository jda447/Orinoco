let cameraName = document.getElementById("name");
let cameraPrice = document.getElementById("price");
let cameraImage = document.getElementById("image");
let cameraDescrip = document.getElementById("description");

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
    })
    .catch((error) => console.error("FETCH ERROR:", error));
}

const id = getProductId();

getSingleProductId(id);

/*function singleProduct(data) {

    let name = data.name;
    let cameraName = document.createElement('p');
    cameraName.innerHTML = name;
    name.appendChild(cameraName);

}
*/

/*  let newArticle = document.createElement('article');
    let newName = document.createElement('h3');
    
    newName.textContent = data.name;
    newArticle.appendChild(newName);

    const main = document.querySelector('container');
    main.appendChild(newName);
*/