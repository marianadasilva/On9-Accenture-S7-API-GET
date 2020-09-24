const { response } = require('express');
const express = require('express');
const app = express();
const porta = 3000;
const women = require('./women.json');

app.use(express.json());

// Visualizar todas as mulheres
app.get('/women', (req, res) => {
    res.json(women);
});

// Visualizar mulher pelo ID
app.get('/women/:id', (req, res) => {
    // Pega o ID através dos parâmetros da requisição
    const { id } = req.params;

    const woman = women.find(women => women.id == id);

    res.json(woman);
});

app.listen(porta, () => {
    console.log(`App rodando em http://localhost:${porta}`)
});