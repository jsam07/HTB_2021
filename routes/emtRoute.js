const express = require('express');
const { patientDatabase } = require('../database/database.js');

const router = express.Router();

function findPatient(patientID) {
    return patientDatabase.find((patient) => patient.id === patientID);
}

// {
//     heartRate: '5',
//     respRate: '5',
//     systolicPressure: '5',
//     diastolicPressure: '5',
//     temp: '5',
//     oxygen: '5',
//     LOC: '5',
//     pain: '5',
//     'N/V': '5',
//     emtInput: 'testing'
//   }

// {
//     id: '77598365',
//     symptoms: [
//         'Shortness of breath',
//         'Tightness in chest',
//         'Dizziness',
//         'Nausea',
//     ],
//     triage: 'Delayed',
//     firstName: 'Jane',
//     lastName: 'Doe',
//     age: 44,
//     sex: 'F',
//     chronicIllnesses: ['Diabetes', 'Hypertension'],
//     medications: ['Canagliflozin', 'Lisinopril'],
//     isSmoker: true,
//     isPregnant: false,
//     vitals: [
//         {
//             time: new Date(),
//             hr: 66,
//             rr: 18,
//             bp: {
//                 systolic: 155,
//                 diastolic: 90,
//             },
//             temp: 38,
//             spO2: 89,
//             pain: '7/10 sharp pain to upper middle chest',
//             LOC: 'Somnolent',
//             'N/V': 'Nauseous',
//         },

//     ],
//     allergies: ['Peanuts', 'Anesthetics', 'Cats', 'Gluten'],
//     reportedSymptoms: ['Breathlessness', 'Chest pain'],
//     other: 'N/A',
// }
function getFormattedPatient(patientInfo) {

}

// ---------- EMT Route -----------/ /
// localhost:8081/emt/dashboard
router.get('/dashboard', (req, res) => {
    // send correct patient to emt
    const patient = findPatient('77598365');
    res.render('emt-dashboard', { patient });
});

router.post('/dashboard', (req, res) => {
    const patientInfo = req.body;
    res.render('emt-dashboard', { patientInfo, timestamp: new Date(), vitals: req.body });
});

module.exports = router;
