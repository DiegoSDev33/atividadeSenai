const express = require('express');
const sequelize = require('./db/database');
const routes = require('../API_NODE/routes/routes');
const cors = require('cors')

const app = express();
const PORT = 3000;

app.use(cors);
app.use(express.json());
app.use('/api', routes);

sequelize.sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
    });
  })
  .catch(error => {
    console.error('Erro ao sincronizar com o banco de dados:', error);
  });
