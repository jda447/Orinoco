async function getCameras() {
    const url = 'http://localhost:3000/api/cameras';
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
        <div class="card p-2 mx-5 mb-5 mt-2 text-center">
            <a href="product.html?id=${camera._id}">
                <img class="card-img-top" src="${camera.imageUrl}" alt="Card image cap">
                    <div class="card-body">
                        <h5 class="card-title text-center">${camera.name}</h5>
                            <p class="text-center" id="price">$${camera.price.toFixed(2)/100}</p>
                                <i class="card-text">${camera.description}</i>
                    </div>
            </a>
        </div>
        `;

        html += htmlSegment;
});

    let container = document.querySelector('.container');
    container.innerHTML = html;

}
displayCameras();


function toggleCameras() {
    let cameras = document.getElementById("cameraToggle");
        if (cameras.style.display === "none") {
        cameras.style.display = "block";
        } else {
        cameras.style.display = "none";
        }
}