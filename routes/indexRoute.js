const express = require('express')
// const { ensureAuthenticated } = require('../middleware/checkAuth');
const database = require('../database/database.js')

const router = express.Router()

router.get('/', (req, res) => {
    res.render('index')
})

//---------- EMT Route -----------/ /
// localhost:8081/emt/dashboard
router.get('/emt-dashboard', (req, res) => {
    //send correct patient to emt
    let userID = 
    res.render('emt-dashboard', { patient: patients[0], vitals: allVitals })
})

router.get('/hospital-dashboard', (req, res) => {
    res.render('hospital-admin', { patients: database }) // change back to index.ejs
})

module.exports = router
let patients = database;
let patientId = Object.keys(patients)[0]
console.log(patients[patientId]);
// hardcoded patient data

// let patients = [
//     {
//         id: Math.floor(100000 + Math.random() * 900000),
//         symptoms: [
//             'shortness of breath', 'tightness in chest', 'dizziness', 'nausea'
//         ],
//         triage: 'green',
//         firstName: 'Jane',
//         lastName: 'Doe',
//         age: 44,
//         sex: 'F',
//         chronicIllnesses: ["Diabetes", "Hypertension"],
//         medications: ["Canagliflozin", "Lisinopril"],
//         timestamp: "12:32",
//         hr: "54",
//         rr: "24",
//         bp: "140/90",
//         temp: "38",
//         spO2: "89"
//     },
// ];

// let allVitals = [
//     {
//         patientId: "",
//         timestamp: "12:32",
//         hr: "54",
//         rr: "24",
//         bp: "140/90",
//         temp: "38",
//         spO2: "89"
//     },
// ]
