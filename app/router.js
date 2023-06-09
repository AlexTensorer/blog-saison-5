const { Router } = require('express');
const router = Router();

const appController = require('./controllers/appController.js');

router.get('/', appController.index);

module.exports = router;
