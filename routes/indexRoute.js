const express = require('express');
// const { ensureAuthenticated } = require('../middleware/checkAuth');

const router = express.Router();

router.get('/', (req, res) => {
    res.render('hospital-admin', { patients: patients }); // change back to index.ejs 
});

module.exports = router;




// hardcoded patient data

let patients = [
    {
    id: Math.floor(100000 + Math.random() * 900000),
    symptoms: ['shortness of breath, tightness in chest, dizziness, nausia'],
    triage: 'green'
}
];