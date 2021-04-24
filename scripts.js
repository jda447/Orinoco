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

//Validation
let firstName = document.getElementById('first-name');
let lastName = document.getElementById('Last-name');
let mailAddress = document.getElementById('E-mail');
let address = document.getElementById('address');
let city = document.getElementById('City');
let invalidFeedback = document.querySelectorAll("p.invalid-feedback");
let submitButton = document.getElementById('btnsubmit');
// initialise Validation Boolean TO False
let isFirstNameValid = false;
let isLastNameValid = false;
let isEmailValid = false;
let isAddressValid = false;
let isCityValid = false;

//firstName Validation
firstName.addEventListener('blur', () => {
    const regName = /^[a-zA-Z]+$/;
    if (!regName.test(firstName.value)) {
      firstName.style.borderBottom = 'red solid 1px';
      return false;
    }
    else {
      firstName.style.borderBottom = 'green solid 1px';
      isFirstNameValid = true;
    }
});
  //lasName Validation
lastName.addEventListener('blur', () => {
    const regName = /^[a-zA-Z]+$/;
    if (!regName.test(lastName.value)) {
      lastName.style.borderBottom = 'red solid 1px';
      return false;
    }
    else {
      lastName.style.borderBottom = 'green solid 1px';
      isLastNameValid = true;
    }
})
  //mailAddress Validation
mailAddress.addEventListener('blur', () => {
    const regEmail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (!regEmail.test(mailAddress.value)) {
      mailAddress.style.borderBottom = 'red solid 1px';
      return false;
    }
    else {
      mailAddress.style.borderBottom = 'green solid 1px';
      isEmailValid = true;
    }
})
//adress Validation
address.addEventListener('blur', () => {
    const regAddress = /^\s*\S+(?:\s+\S+){2}/;
    if (!regAddress.test(address.value)) {
      address.style.borderBottom = 'red solid 1px';
      return false;
    }
    else {
      address.style.borderBottom = 'green solid 1px';
      isAddressValid = true;
    }
})
//city Validation
city.addEventListener('blur', () => {
    const regName = /^[a-zA-Z]+$/;
    if (!regName.test(city.value)) {
      city.style.borderBottom = 'red solid 1px';
      return false;
    }
    else {
      city.style.borderBottom = 'green solid 1px';
      isCityValid = true;
    }
})
