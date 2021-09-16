
function getProductId() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const id = urlParams.get('id');
    return id;
}

function getSingleProductId(id) {
    fetch('https://orinoco-op.herokuapp.com/api/cameras/' + id)
    .then(response => response.json())
    .then(data => {
      product = data;
      console.log(product);
      showProduct(data);
    })
    .catch(err => console.log(err))
}