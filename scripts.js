let productsContainer = document.getElementById('products');
let uri = 'https://orinoco-op.herokuapp.com/api/cameras';

fetch (uri)
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
});



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

