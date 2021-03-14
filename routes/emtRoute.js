const express = require('express');
const { patientDatabase } = require('../database/database.js');
// const { ensureAuthenticated } = require('../middleware/checkAuth');

const router = express.Router();

function findPatient(patientID) {
    return patientDatabase.find((patient) => patient.id === patientID);
}

// ---------- EMT Route -----------/ /
// localhost:8081/emt/dashboard
router.get('/dashboard', (req, res) => {
    // send correct patient to emt

    const patient = findPatient('77598365');
    res.render('emt-dashboard', { patient });
});

router.post('/dashboard', (req, res) => {
    console.log(req.body);
    /* {
  heartRate: '5',
  respRate: '5',
  systolicPressure: '5',
  diastolicPressure: '5',
  temp: '5',
  oxygen: '5',
  LOC: '5',
  pain: '5',
  'N/V': '5'
} */
    const patient = findPatient('77598365');
    res.render('emt-dashboard', { patient, timestamp: new Date(), vitals: req.body });
});

module.exports = router;
