const express = require('express');
const router = express.Router();
const results = require('./routes/results');
const search = require('./routes/search');

router.get('/results', results);
router.get('/search', search);

module.exports = router;
