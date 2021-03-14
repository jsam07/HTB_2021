const express = require('express');
// const { ensureAuthenticated } = require('../middleware/checkAuth');

const router = express.Router();

router.get('/', (req, res) => {
    res.render('hospital-admin'); // change back to index.ejs 
});

module.exports = router;
