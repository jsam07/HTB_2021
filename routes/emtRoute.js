const express = require('express');
const database = require('../database/database.js');
// const { ensureAuthenticated } = require('../middleware/checkAuth');

const router = express.Router();

// ---------- EMT Route -----------/ /
// localhost:8081/emt/dashboard
router.get('/dashboard', (req, res) => {
    // send correct patient to emt
    console.log(database[123456]);
    res.render('emt-dashboard', { patient: database[123456] });
});

module.exports = router;

// hardcoded patient data

const patients = [
    {
        id: Math.floor(100000 + Math.random() * 900000),
        symptoms: [
            'shortness of breath, tightness in chest, dizziness, nausea',
        ],
        triage: 'green',
        firstName: 'Jane',
        lastName: 'Doe',
        age: 44,
        sex: 'F',
        chronicIllnesses: ['Diabetes', 'Hypertension'],
        medications: ['Canagliflozin', 'Lisinopril'],
    },
];

const allVitals = [
    {
        patientId: '',
        timestamp: '12:32',
        hr: '54',
        rr: '24',
        bp: '140/90',
        temp: '38',
        spO2: '89',
    },
];
