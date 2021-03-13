const express = require('express')
// const { ensureAuthenticated } = require('../middleware/checkAuth');

const router = express.Router()

router.get('/', (req, res) => {
    res.render('index')
})

//---------- EMT Route -----------/ /
// localhost:8081/emt/dashboard
router.get('/emt/dashboard', (req, res) => {
    res.render('emt/dashboard')
})

module.exports = router
