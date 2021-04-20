//Camera classes

class camera {
    constructor (id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}

let zurssCamera = new camera ('5be1ed3f1c9d44000030b061', 'Zurss 50S', '49900');
let hirschCamera = new camera ('5be1ef211c9d44000030b062', 'Hirsch 400DTS', '309900');
let franckCamera = new camera ('5be9bc241c9d440000a730e7', 'Franck JS 105', '209900');
let kurosCamera = new camera ('5be9c4471c9d440000a730e8', 'Kuros TTS', '159900');
let katatoneCamera = new camera ('5be9c4c71c9d440000a730e9', 'Katatone', '59900');


//_id products array
let cameraIds = ['5be1ed3f1c9d44000030b061', '5be1ef211c9d44000030b062', '5be9bc241c9d440000a730e7', 'be9c4471c9d440000a730e8', '5be9c4c71c9d440000a730e9'];

const zurssButton = document.getElementById ('zurssButton');

zurssButton.addEventListener ('click', () => {
    zurssButton.classList.add('btn-primary');
});

function fun() {
    alert ("Item added to cart!");
 }
