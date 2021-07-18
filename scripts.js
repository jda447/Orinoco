const uri = 'http://localhost:3000/api/cameras/';

fetch (uri)
    .then((response) => response.json())
    .then((data) => console.log(data));