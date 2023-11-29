require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();

// Use a variável de ambiente SERVER_PORT, se disponível. Caso contrário, use 3000 como padrão.
const port = process.env.SERVER_PORT;

app.use(cors({
    origin: process.env.HOST_API
}));
app.use(express.json());

app.listen(port, () => {
  console.log(`Aplicação rodando em http://localhost:${port}`);
});
