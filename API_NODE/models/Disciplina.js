const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db/database');

class Disciplina extends Model {}

Disciplina.init({
  codigo: { type: DataTypes.STRING, unique: true },
  nome: { type: DataTypes.STRING, unique: true },
  descricao: DataTypes.STRING,
  cargaHoraria: DataTypes.INTEGER,
}, { sequelize, modelName: 'Disciplina' });

module.exports = Disciplina;
