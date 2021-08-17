import server from './screens/server.js';

const router = () => {
    const main = document.getElementById(main-container);
    main.innerHTML = server.render();
}

window.addEventListener("load", router);