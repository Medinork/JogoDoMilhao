const express = require('express');
const router = express.Router();
const db = require('../config/db');

router.get('/categories', (req, res) => {
    db.query('SELECT * FROM categories', (err, results) => {
        if (err) {
            console.error('Erro ao consultar categorias:', err);
            return res.status(500).send('Erro ao consultar categorias');
        }
        res.json(results);
    });
});

module.exports = router;
