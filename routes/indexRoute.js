const express = require('express');
// const { ensureAuthenticated } = require('../middleware/checkAuth');
const { patientDatabase } = require('../database/database.js');

const router = express.Router();

router.get('/', (req, res) => {
    res.render('index');
});

// ---------- EMT Route -----------/ /
// localhost:8081/emt/dashboard
router.get('/emt-dashboard', (req, res) => {
    // send correct patient to emt
    res.render('emt-dashboard', { patient: patients[0], vitals: allVitals });
});

router.get('/hospital-dashboard', (req, res) => {
    res.render('hospital-admin', { patients: patientDatabase }); // change back to index.ejs
});

module.exports = router;
