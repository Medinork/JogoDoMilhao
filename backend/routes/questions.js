const express = require('express');
const router = express.Router();
const db = require('../config/db');

router.get('/', (req, res) => {
    db.query('SELECT * FROM questions', (err, results) => {
        if (err) return res.status(500).send(err);
        res.json(results);
    });
});
const express = require('express');
const router = express.Router();
const db = require('../config/db');

router.get('/categories', (req, res) => {
    db.query('SELECT * FROM categories', (err, results) => {
        if (err) return res.status(500).send(err);
        res.json(results);
    });
});

module.exports = router;


module.exports = router;
