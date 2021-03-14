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

router.post('/dashboard', (req, res) => {
    console.log(req.body)
    res.render('emt-dashboard', { patient: database[123456] })
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
})

module.exports = router;
