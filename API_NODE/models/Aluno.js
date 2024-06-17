const { DataTypes } = require('sequelize');
const sequelize = require('../db/database');
const Curso = require('../models/Curso'); // Importe o modelo Curso se não estiver importado

const Aluno = sequelize.define('Aluno', {
  nome: DataTypes.STRING,
  numero: { type: DataTypes.STRING, unique: true },
  CPF: { type: DataTypes.STRING, unique: true },
  RG: { type: DataTypes.STRING, unique: true },
  enderecoAtual: DataTypes.STRING,
  telefones: DataTypes.STRING,
  enderecoPermanente: DataTypes.STRING,
  email: DataTypes.STRING,
  dataNascimento: DataTypes.DATE,
  sexo: DataTypes.STRING,
});

// Defina a associação com Curso
Aluno.belongsTo(Curso);

module.exports = Aluno;
