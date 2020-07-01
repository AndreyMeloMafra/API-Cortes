const express = require('express');
const router = express.Router();

//Rotas
const registerController = require('../controllers/register/index')

router.get('/register', registerController.index)
router.post('/register', registerController.store)

module.exports = router;