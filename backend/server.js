const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const questionRoutes = require('./routes/questions'); // Rotas separadas
const categoriesRoutes = require('./routes/categories');

// Inicializações
dotenv.config();
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Registrar as rotas
app.use('/api/questions', questionRoutes); // Esta linha já cobre a rota '/questions'
app.use('/api/categories', categoriesRoutes);


// Porta do servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
