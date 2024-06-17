const { DataTypes } = require('sequelize');
const sequelize = require('../db/database');
const Aluno = require('../models/Aluno'); // Importe o modelo Aluno se não estiver importado
const Disciplina = require('../models/Disciplina'); // Importe o modelo Disciplina se não estiver importado

const Matricula = sequelize.define('Matricula', {
  notaFinal: DataTypes.FLOAT,
  numeroPresencas: DataTypes.INTEGER,
  numeroFaltas: DataTypes.INTEGER,
});

// Defina as associações com Aluno e Disciplina
Matricula.belongsTo(Aluno, { foreignKey: 'alunoId' });
Matricula.belongsTo(Disciplina, { foreignKey: 'disciplinaId' });

module.exports = Matricula;
