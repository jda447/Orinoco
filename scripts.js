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
        let htmlSegment = `<div class="camera">
        <img src="${camera.imageUrl}" class="img-fluid col-8">
        <h2>${camera.name} ${camera.description} ${camera.price}</h2>
        </div>`;

        html += htmlSegment;
    });

    let container = document.querySelector('.container');
    container.innerHTML = html;

}

displayCameras();