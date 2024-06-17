const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db/database');

class Professor extends Model {}

Professor.init({
  nome: DataTypes.STRING,
  CPF: { type: DataTypes.STRING, unique: true },
  endereco: DataTypes.STRING,
  departamentoId: DataTypes.INTEGER,
}, { sequelize, modelName: 'Professor' });

module.exports = Professor;
