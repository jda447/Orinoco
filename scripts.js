//Cameras
let zurssCamera = [];
const addZurssCamera = (ev) => {
    ev.preventDefault();
    let zurss = {
        _id: "5be1ed3f1c9d44000030b061",
        name: "Zurss 50S",
        price: 49900,
    }
    zurssCamera.push(zurss);
    console.warn('added', {zurssCamera});

    localStorage.setItem('ZurssCamera', JSON.stringify(zurssCamera));
}
document.addEventListener ('DOMContentLoaded', () => {
document.getElementById ('zurssButton').addEventListener('click', addZurssCamera);
});


//Submit form

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

    console.warn('added', {userDetails});

    localStorage.setItem('CustomerDetails', JSON.stringify(userDetails));
}
document.addEventListener ('DOMContentLoaded', () => {
    document.getElementById ('formSubmit').addEventListener('click', addUserDetails);
});

//end of submit form



//Camera button toggle

$(document).ready(function() {
    $("article").toggle()
    $("#productsButton").click(function () {
    $("article").toggle()
    });
});

// end of camera button toggle


//Validation
let firstName = document.getElementById('firstName');
let lastName = document.getElementById('lastName');
let mailAddress = document.getElementById('email');
let address = document.getElementById('address');
let city = document.getElementById('city');
let invalidFeedback = document.querySelectorAll("p.invalid-feedback");
let submitButton = document.getElementById('formSubmit');


