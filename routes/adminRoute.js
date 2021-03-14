const express = require('express');
const database = require('../database/database.js');

const router = express.Router();

router.get('/patient-dashboard', (req, res) => {
    res.render('patient-dashboard');
});

module.exports = router;
