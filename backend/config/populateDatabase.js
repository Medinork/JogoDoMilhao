const db = require('./db'); // Conexão com o banco de dados
const data = require('./data'); // Dados do JSON

async function populateDatabase() {
    try {
        // Inserir categorias
        for (const category of data) {
            const [categoryResult] = await db.promise().query(
                'INSERT INTO categories (name) VALUES (?)',
                [category.category]
            );
            const categoryId = categoryResult.insertId;

            // Inserir perguntas
            for (const question of category.questions) {
                await db.promise().query(
                    `INSERT INTO questions (category_id, question, options, answer, tip) 
                     VALUES (?, ?, ?, ?, ?)`,
                    [
                        categoryId,
                        question.question,
                        JSON.stringify(question.options), // Armazena as opções em formato JSON
                        question.answer,
                        question.tip || null, // Caso não tenha dica, insere NULL
                    ]
                );
            }
        }

        console.log('Dados inseridos com sucesso!');
    } catch (err) {
        console.error('Erro ao inserir os dados:', err);
    } finally {
        db.end();
    }
}

populateDatabase();
