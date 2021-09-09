async function getCameras() {
    const url = 'https://orinoco-op.herokuapp.com/api/cameras';
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}


async function displayCameras() {
    let cameras = await getCameras();
    let html = '';
    cameras.forEach(camera => {
        let htmlSegment = `
        <a href="product.html?id=${camera._id}"><div class="camera">
        <div class="card img-fluid col-4 p-2 m-4">
        <img src="${camera.imageUrl}" class="col">
        <h4>${camera.name}</h4>
        <span>${camera.description}</span> 
        <p class="price">$${camera.price.toFixed(2)/100}</p>
        </a>
        </div>
        `;

        html += htmlSegment;
    });

    let container = document.querySelector('.container');
    container.innerHTML = html;

}

displayCameras();