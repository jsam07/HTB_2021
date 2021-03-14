const express = require('express');
const { patientDatabase } = require('../database/database.js');

const router = express.Router();

function findPatient(patientID) {
    return patientDatabase.find((patient) => patient.id === patientID);
}

router.get('/patient-dashboard', (req, res) => {
    const patientID = req.query.patientId;
    console.log(`Patient ID:${patientID}`);
    const patient = findPatient(patientID);
    console.log(patient);
    if (patient) res.render('patient-dashboard', { patient });
    else res.render('404');
});

module.exports = router;
