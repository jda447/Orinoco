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
        <div class="card p-2 m-5">
            <a href="product.html?id=${camera._id}">
                <img class="card-img-top" src="${camera.imageUrl}" alt="Card image cap">
                    <div class="card-body">
                        <h5 class="card-title">${camera.name}</h5>
                            <p id="price">$${camera.price.toFixed(2)/100}</p>
                                <p class="card-text">${camera.description}</p>
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
    var x = document.getElementById("cameraToggle");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }