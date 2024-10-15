
const express = require('express');
const { importData } = require('../controllers/importController');

const router = express.Router();

router.post('/import', importData);

module.exports = router;