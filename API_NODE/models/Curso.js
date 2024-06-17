const { DataTypes } = require('sequelize');
const sequelize = require('../db/database');
const Departamento = require('../models/Departamento'); // Importe o modelo Departamento se não estiver importado

const Curso = sequelize.define('Curso', {
  nome: DataTypes.STRING,
  descricao: DataTypes.STRING,
  numero: { type: DataTypes.STRING, unique: true },
  cargaHorariaSemestre: DataTypes.INTEGER,
  cargaHorariaTotal: DataTypes.INTEGER,
  numeroSemestres: DataTypes.INTEGER,
  nivel: DataTypes.STRING,
});

// Defina a associação com Departamento
Curso.belongsTo(Departamento);

module.exports = Curso;
