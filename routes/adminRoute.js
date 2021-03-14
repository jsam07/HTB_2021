const express = require('express');
const database = require('../database/database.js');

const router = express.Router();

router.get('/patient-dashboard', (req, res) => {
    const patientID = req.query.patientId;
    const patientInfo = getAllPatientInformationFromDatabase(patientID);
    console.log(patientID);
    res.render('patient-dashboard', { patientInfo });
});

function getAllPatientInformationFromDatabase(patientID) {
    return undefined;
}

module.exports = router;
