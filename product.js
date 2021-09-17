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
    fetch('https://orinoco-op.herokuapp.com/api/cameras/' + id)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("NETWORK RESPONSE ERROR");
      }
    })
    .then(data => {
      product = data;
      console.log(product);
      singleProduct(data)
    })
    .catch((error) => console.error("FETCH ERROR:", error));
}

function singleProduct(data) {

    let name = data.name;
    let cameraName = document.createElement('p');
    cameraName.innerHTML = name;
    name.appendChild(cameraName);

}