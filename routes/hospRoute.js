const express = require('express');
// const { ensureAuthenticated } = require('../middleware/checkAuth');

const router = express.Router();

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

// ---------- hospital Route -----------/ /
// localhost:8081/hosp/dashboard
router.get('/dashboard', (req, res) => {
    res.render('hospital-admin', { patients });
});

module.exports = router;

// hardcoded patient data
