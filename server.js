const express = require('express');
const router = express.Router();
const cors = require('cors');
const data = require('./controllers/camera.js');
const app = express();
app.use(cors());
app.get('api/cameras', (req, res) => {
    res.send(data.products);
});

app.listen(5000, () => {
    console.log('serve at https://orinoco-op.herokuapp.com/api/cameras');
});

const cameraCtrl = require('..Orinoco/controllers/camera');

router.get('/', cameraCtrl.getAllCameras);
router.get('/:id', cameraCtrl.getOneCamera);
router.post('/order', cameraCtrl.orderCameras);

module.exports = router;