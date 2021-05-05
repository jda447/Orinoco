//Camera localStorage log


let cameras = {
    _id:"5be1ed3f1c9d44000030b061",
    name: "Zurss 50S",
    price: 49900,
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

    localStorage.setItem('ZurssCamera', JSON.stringify(zurssCamera));
}
document.addEventListener ('DOMContentLoaded', () => {
document.getElementById ('zurssButton').addEventListener('click', addZurssCamera);
});

//end of Camera localStorage log


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


function validateFirstName() {
    var x = document.forms["myForm"]["firstName"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
  }
