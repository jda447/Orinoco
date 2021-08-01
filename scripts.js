
//const productsContainer = document.getElementById('products');

let productsContainer = document.getElementById('products');
const uri = 'https://orinoco-op.herokuapp.com/api/cameras';
let formSubmit = document.getElementById('formSubmit');


//const uri = 'https://orinoco-op.herokuapp.com/api/cameras';

const items = document.getElementById('items');
// Url for api
const api = '/api/cameras';
// FUNCTION TO MAKE REQUEST TO THE JSON
function makeRequest(verb, url, data) {


    return new Promise((resolve, reject) => {
      if(verb ==="POST" && !data){
        reject({error: 'No data'});
      }
      if(verb !== 'POST' && verb !== 'GET'){
       reject({error: 'Invalid request verb'});
      }
   
      let request = new XMLHttpRequest();
      request.open(verb, url);
      request.onreadystatechange = () => {
        if (request.readyState === 4) {
          if (request.status === 0 || request.status === 200 || request.status === 201) {
            resolve(JSON.parse(request.response));
          } else {
            reject(JSON.parse(request.response));
          }
        }
      };
      if (verb === 'POST') {
        
       request.setRequestHeader('Content-Type', 'application/json');
      request.send(JSON.stringify(data));
      } else {
        request.send();
      }
    });
   }

//Function to display all product of the model
async function displayAllProducts() {

    const postPromise = makeRequest('GET', api, {
      });
      
      try {
      const postResponse = await postPromise;
      postResponse.forEach(element => {
        const div1 = document.createElement('div');
        div1.className = "col-12 col-md-6 col-lg-4 pb-4";
        items.appendChild(div1);
        const button = document.createElement('a');
        button.className = "";
        //href="Zurss-50S.html"
        button.onclick = function() {
          parent.open("single_product/"+element._id, '_self');
          displaySingleProduct(element._id,"single_product/"+element._id,'_self')
        };
        div1.appendChild(button);
        const img = document.createElement('img');
        img.className = "d-block w-100"; 
        img.title = element.name; 
        img.alt = element.name;
        img.style.width = "305";
        img.style.height = "203";
        img.src = element.imageUrl;
        img.alt = "";
        button.appendChild(img);
        const ul = document.createElement('ul');
        ul.className = "list-group list-group-flush mt-1 mb-5";
        div1.appendChild(ul);
        const li_name = document.createElement('li');
        li_name.className = "list-group-item list-unstyled font-weight-bold";
        li_name.innerHTML = element.name;
        ul.appendChild(li_name);
        const li_price = document.createElement('li');
        li_price.className = "list-group-item list-unstyled font-weight-light";
        li_price.innerHTML = element.price;
        ul.appendChild(li_price);
        const li_description = document.createElement('li');
        li_description.className = "list-group-item list-unstyled font-weight-light";
        li_description.innerHTML = element.description;
        ul.appendChild(li_description);

    });
    }catch(error){
        error : error
  
      }
  }
  


/*fetch (uri)
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

    localStorage.setItem('CustomerDetails', JSON.stringify(userDetails));
}
document.addEventListener ('DOMContentLoaded', () => {
document.getElementById ('formSubmit').addEventListener('click', addUserDetails);
});*/
    const name = document.createElement('heading');
    const price = document.createElement('p');
    const img = document.createElement('img');


    card.classList.add('card');

    name.innerHTML = obj.name;
    price.innerHTML = obj.price;

    img.setAttribute('src', obj.imageURL);

    card.appendChild(img);
    card.appendChild(name);
    card.appendChild(price);

    return card;
}