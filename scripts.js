//Camera localStorage log

let cameraId = [];
const addCameraId = (ev) => {
    ev.preventDefault();
    let cam = {
        addToCart: document.getElementsByClassName('addToCart')
    }
    cameraId.push(cam);
    console.log('added', {cameraId});

    localStorage.setItem('CameraIdString', JSON.stringify(cameraId));
}
document.addEventListener ('DOMContentLoaded', () => {
document.getElementById ('addToCart').addEventListener('click', addCameraId);
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


$(document).ready(function() {
    $("article").toggle()
    $("#productsButton").click(function () {
        $("article").toggle()
    });
});

function alertmsg() {
    alert ("Camera added to cart!");
}

$(document).ready(function() {
    $("#basic-form").validate();
    });