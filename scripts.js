function toggleCameras() {
    var x = document.getElementById("hiddenCameras");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
}

//Form validation

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

//end of Form validation



//Submit form localStorage log

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

//end of Submit form localStorage log


function myFunction() {
    alert("Camera added to cart!");
  }


let zurssCamera = [];
const addZurssCamera = (ev) => {
    ev.preventDefault();
    let camera = {
        _id:"5be1ed3f1c9d44000030b061",
        name: "Zurss 50S",
        price: 49900,
    }
    zurssCamera.push(camera);

    console.log('added', {zurssCamera});

    localStorage.setItem('Zurss 50S', JSON.stringify(zurssCamera));
}
document.addEventListener ('DOMContentLoaded', () => {
document.getElementById ('zurssButton').addEventListener('click', addZurssCamera);

console.log(localStorage.getItem('Zurss 50S'));
});

let hirschCamera = [];
const addHirschCamera = (ev) => {
    ev.preventDefault();
    let camera = {
        "_id": "5be1ef211c9d44000030b062",
        "name": "Hirsch 400DTS",
        "price": 309900,
    }
    hirschCamera.push(camera);

    console.log('added', {hirschCamera});

    localStorage.setItem('Hirsch 400DTS', JSON.stringify(hirschCamera));
}
document.addEventListener ('DOMContentLoaded', () => {
document.getElementById ('hirschButton').addEventListener('click', addHirschCamera);
});