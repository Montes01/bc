// routes/register-route.js

const express = require('express');
const { njwtAuth } = require('../middleware/auth-token');
const registerController = require('../controllers/register-controller');
const router = express.Router();

// Ruta protegida que requiere autenticación
router.get('/getUserInfo', njwtAuth, registerController.verPerfilUsuario);

module.exports = router;
