const express = require('express');
const router = express.Router();
const db = require('../config/db');

// Rota para buscar todas as questões
router.get('/', (req, res) => {
    db.query('SELECT * FROM questions', (err, results) => {
        if (err) return res.status(500).send(err);
        res.json(results);
    });
});

// Rota para buscar categorias
router.get('/categories', (req, res) => {
    db.query('SELECT * FROM categories', (err, results) => {
        if (err) {
            console.error('Erro ao consultar categorias:', err); // Verifique o erro
            return res.status(500).send('Erro ao consultar categorias');
        }
        console.log('Categorias:', results); // Adicionando log para verificar a resposta
        res.json(results); // Retorna as categorias no formato JSON
    });
});



module.exports = router;
