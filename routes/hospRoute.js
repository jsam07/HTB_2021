const express = require('express');
// const { ensureAuthenticated } = require('../middleware/checkAuth');
const database = require('../database/database.js');

const router = express.Router();

// ---------- hospital Route -----------//
// localhost:8081/hosp/dashboard
router.get('/dashboard', (req, res) => {
    res.render('hospital-admin', { patients: database })
})


module.exports = router;


