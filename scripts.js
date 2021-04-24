//Cameras 
let cameras = {
    _id: "5be1ed3f1c9d44000030b061",
    name: "Zurss 50S",
    price: 49900
};

let cameras_serialized = JSON.stringify(cameras);

localStorage.setItem("cameras", cameras_serialized);

let cameras_deserialized = JSON.parse(localStorage.getItem("cameras"));
console.log(cameras_deserialized);

let cameraHirsch = {
    _id: "5be1ef211c9d44000030b062",
    name: "Hirsch 400DTS",
    price: 309900
};

let cameraHirsch_serialized = JSON.stringify(cameraHirsch);

localStorage.setItem("cameraHirsch", cameraHirsch_serialized);

let cameraHirsch_deserialized = JSON.parse(localStorage.getItem("cameraHirsch"));
console.log(cameraHirsch_deserialized);

let cameraFranck = {
    _id: "5be9bc241c9d440000a730e7",
    name: "Franck JS 105",
    price: 209900
};

let cameraFranck_serialized = JSON.stringify(cameraFranck);

localStorage.setItem("cameraFranck", cameraFranck_serialized);

let cameraFranck_deserialized = JSON.parse(localStorage.getItem("cameraFranck"));
console.log(cameraFranck_deserialized);

let cameraKuros = {
    _id: "5be9c4471c9d440000a730e8",
    name: "Kuros TTS",
    price: 159900
};

let cameraKuros_serialized = JSON.stringify(cameraKuros);

localStorage.setItem("cameraKuros", cameraKuros_serialized);

let cameraKuros_deserialized = JSON.parse(localStorage.getItem("cameraKuros"));
console.log(cameraKuros_deserialized);

let cameraKatatone = {
    _id: "5be9c4c71c9d440000a730e9",
    name: "Katatone",
    price: 59900
};

let cameraKatatone_serialized = JSON.stringify(cameraKatatone);

localStorage.setItem("cameraKatatone", cameraKatatone_serialized);

let cameraKatatone_deserialized = JSON.parse(localStorage.getItem("cameraKatatone"));
console.log(cameraKatatone_deserialized);

//end of cameras

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


