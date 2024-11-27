const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const questionRoutes = require('./routes/questions');
const cors = require('cors');
app.use(cors());


dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/questions', questionRoutes);
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
router.get('/questions/:categoryId', (req, res) => {
    const { categoryId } = req.params;

    db.query(
        'SELECT * FROM questions WHERE category_id = ?',
        [categoryId],
        (err, results) => {
            if (err) return res.status(500).send(err);
            res.json(results);
        }
    );
});

module.exports = router;


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
