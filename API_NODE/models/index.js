const Sequelize = require('sequelize');
const sequelize = require('../db/database');

const Aluno = require('../models/Aluno');
const Curso = require('../models/Curso');
const Departamento = require('../models/Departamento');
const Disciplina = require('../models/Disciplina');
const Matricula = require('../models/Matricula');
const Professor = require('../models/Professor');

// Associações entre os modelos

// Um Departamento tem muitos Professores
Departamento.hasMany(Professor);
Professor.belongsTo(Departamento);

// Um Departamento tem muitos Cursos
Departamento.hasMany(Curso);
Curso.belongsTo(Departamento);

// Um Curso tem muitos Alunos
Curso.hasMany(Aluno);
Aluno.belongsTo(Curso);

// Um Curso tem muitas Disciplinas
Curso.hasMany(Disciplina);
Disciplina.belongsTo(Curso);

// Uma Disciplina tem muitos Professores
Disciplina.belongsToMany(Professor, { through: 'DisciplinaProfessores' });
Professor.belongsToMany(Disciplina, { through: 'DisciplinaProfessores' });

// Um Aluno tem muitas Matrículas
Aluno.hasMany(Matricula);
Matricula.belongsTo(Aluno);

// Uma Disciplina tem muitas Matrículas
Disciplina.hasMany(Matricula);
Matricula.belongsTo(Disciplina);

module.exports = {
  sequelize,
  Aluno,
  Curso,
  Departamento,
  Disciplina,
  Matricula,
  Professor,
};
