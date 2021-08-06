let productsContainer = document.getElementById('products');
const url = 'https://orinoco-op.herokuapp.com/api/cameras';
let formSubmit = document.getElementById('formSubmit');

fetch (url)
    .then((response) => response.json())
    .then((data) => createCards(data));


function createCards(array) {
    const container = document.getElementById('container');
    const length = array.length;

    for (let i=0; i<length; i++) {
        const card = createCard(array[i]);
        container.appendChild(card);
    }
}

function createCard(obj) {
    const card = document.createElement('section');

    const name = document.createElement('heading');
    const price = document.createElement('p');
    const img = document.createElement('img');

    card.classList.add('card');

    name.innerHTML = obj.name;
    price.innerHTML = obj.price;

    img.setAttribute('src', obj.imageUrl);

    card.appendChild(img);
    card.appendChild(name);
    card.appendChild(price);

    return card;
}