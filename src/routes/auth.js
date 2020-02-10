const express = require('express');
const router = express.Router();

// Auth Controller
const authController = require('../controllers/auth');

// POST
router.post('/', authController.token);

module.exports = router;