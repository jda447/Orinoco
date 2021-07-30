//const productsContainer = document.getElementById('products');

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
    .then((data) => console.log(data));


let userDetails = [];
    const addUserDetails = (ev) => {
    ev.preventDefault();
    let user = {
        firstName: document.getElementById('firstName').value,
        lastName: document.getElementById('lastName').value,
        address: document.getElementById('address').value,
        city: document.getElementById('city').value,
        email: document.getElementById('email').value,
    }
    userDetails.push(user);
    document.querySelector('form').reset();

    console.log('added', {userDetails});

    localStorage.setItem('CustomerDetails', JSON.stringify(userDetails));
}
document.addEventListener ('DOMContentLoaded', () => {
document.getElementById ('formSubmit').addEventListener('click', addUserDetails);
});*/



function validate() {
      
    if( document.myForm.firstName.value == "" ) {
       alert( "Please provide your first name!" );
       document.myForm.firstName.focus() ;
       return false;
    }
    if( document.myForm.lastName.value == "" ) {
        alert( "Please provide your last name!" );
        document.myForm.lastName.focus() ;
        return false;
    }
    if( document.myForm.address.value == "" ) {
        alert( "Please provide your address!" );
        document.myForm.address.focus() ;
        return false;
    }
    if( document.myForm.city.value == "" ) {
        alert( "Please provide your city!" );
        document.myForm.city.focus() ;
        return false;
    }
    if( document.myForm.email.value == "" ) {
        alert( "Please provide your Email!" );
        document.myForm.email.focus() ;
        return false;
     }
    function validateEmail() {
        var emailID = document.myForm.email.value;
        atpos = emailID.indexOf("@");
        dotpos = emailID.lastIndexOf(".");
        
        if (atpos < 1 || ( dotpos - atpos < 2 )) {
           alert("Please enter correct email ID")
           document.myForm.EMail.focus() ;
           return false;
        }
        return( true );
     }
    return( true );
}

