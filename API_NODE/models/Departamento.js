const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db/database');

class Departamento extends Model {}

Departamento.init({
  nome: { type: DataTypes.STRING, unique: true },
  sigla: { type: DataTypes.STRING, unique: true },
  codigo: { type: DataTypes.STRING, unique: true },
  endereco: DataTypes.STRING,
  telefone: DataTypes.STRING,
}, { sequelize, modelName: 'Departamento' });

module.exports = Departamento;
