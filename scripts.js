"use strict";
//Strict mode makes it easier to write "secure" JavaScript.
//In strict mode, any assignment to a non-writable property, a getter-only property, a non-existing property, a non-existing variable, or a non-existing object, will throw an error.


const url = 'https://orinoco-op.herokuapp.com/api/cameras';




fetch (url)
    .then((response) => response.json())
    .then((data) => createCards(data));








    


let hidden = false;
function toggleCameras() {
    hidden = !hidden;
    if(hidden) {
        document.getElementById('container').style.visibility = 'hidden';
    } else {
        document.getElementById('container').style.visibility = 'visible';
    }
}