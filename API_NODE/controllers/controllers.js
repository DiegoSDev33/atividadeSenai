const { Aluno, Departamento, Professor, Curso, Disciplina, Matricula } = require('../models');

// Controladores de Alunos
exports.getAllAlunos = async (req, res) => {
  const alunos = await Aluno.findAll();
  res.json(alunos);
};

exports.createAluno = async (req, res) => {
  const aluno = await Aluno.create(req.body);
  res.json(aluno);
};

exports.getAlunoById = async (req, res) => {
  const aluno = await Aluno.findByPk(req.params.id);
  res.json(aluno);
};

exports.updateAluno = async (req, res) => {
  const aluno = await Aluno.update(req.body, { where: { id: req.params.id } });
  res.json(aluno);
};

exports.deleteAluno = async (req, res) => {
  await Aluno.destroy({ where: { id: req.params.id } });
  res.json({ message: 'Aluno deletado com sucesso' });
};

// Controladores de Departamentos
exports.getAllDepartamentos = async (req, res) => {
  const departamentos = await Departamento.findAll();
  res.json(departamentos);
};

exports.createDepartamento = async (req, res) => {
  const departamento = await Departamento.create(req.body);
  res.json(departamento);
};

exports.getDepartamentoById = async (req, res) => {
  const departamento = await Departamento.findByPk(req.params.id);
  res.json(departamento);
};

exports.updateDepartamento = async (req, res) => {
  const departamento = await Departamento.update(req.body, { where: { id: req.params.id } });
  res.json(departamento);
};

exports.deleteDepartamento = async (req, res) => {
  await Departamento.destroy({ where: { id: req.params.id } });
  res.json({ message: 'Departamento deletado com sucesso' });
};

// Controladores de Professores
exports.getAllProfessores = async (req, res) => {
  const professores = await Professor.findAll();
  res.json(professores);
};

exports.createProfessor = async (req, res) => {
  const professor = await Professor.create(req.body);
  res.json(professor);
};

exports.getProfessorById = async (req, res) => {
  const professor = await Professor.findByPk(req.params.id);
  res.json(professor);
};

exports.updateProfessor = async (req, res) => {
  const professor = await Professor.update(req.body, { where: { id: req.params.id } });
  res.json(professor);
};

exports.deleteProfessor = async (req, res) => {
  await Professor.destroy({ where: { id: req.params.id } });
  res.json({ message: 'Professor deletado com sucesso' });
};

// Controladores de Cursos
exports.getAllCursos = async (req, res) => {
  const cursos = await Curso.findAll();
  res.json(cursos);
};

exports.createCurso = async (req, res) => {
  const curso = await Curso.create(req.body);
  res.json(curso);
};

exports.getCursoById = async (req, res) => {
  const curso = await Curso.findByPk(req.params.id);
  res.json(curso);
};

exports.updateCurso = async (req, res) => {
  const curso = await Curso.update(req.body, { where: { id: req.params.id } });
  res.json(curso);
};

exports.deleteCurso = async (req, res) => {
  await Curso.destroy({ where: { id: req.params.id } });
  res.json({ message: 'Curso deletado com sucesso' });
};

// Controladores de Disciplinas
exports.getAllDisciplinas = async (req, res) => {
  const disciplinas = await Disciplina.findAll();
  res.json(disciplinas);
};

exports.createDisciplina = async (req, res) => {
  const disciplina = await Disciplina.create(req.body);
  res.json(disciplina);
};

exports.getDisciplinaById = async (req, res) => {
  const disciplina = await Disciplina.findByPk(req.params.id);
  res.json(disciplina);
};

exports.updateDisciplina = async (req, res) => {
  const disciplina = await Disciplina.update(req.body, { where: { id: req.params.id } });
  res.json(disciplina);
};

exports.deleteDisciplina = async (req, res) => {
  await Disciplina.destroy({ where: { id: req.params.id } });
  res.json({ message: 'Disciplina deletada com sucesso' });
};

// Controladores de Matrículas
exports.getAllMatriculas = async (req, res) => {
  const matriculas = await Matricula.findAll();
  res.json(matriculas);
};

exports.createMatricula = async (req, res) => {
  const matricula = await Matricula.create(req.body);
  res.json(matricula);
};

exports.getMatriculaById = async (req, res) => {
  const matricula = await Matricula.findByPk(req.params.id);
  res.json(matricula);
};

exports.updateMatricula = async (req, res) => {
  const matricula = await Matricula.update(req.body, { where: { id: req.params.id } });
  res.json(matricula);
};

exports.deleteMatricula = async (req, res) => {
  await Matricula.destroy({ where: { id: req.params.id } });
  res.json({ message: 'Matrícula deletada com sucesso' });
};

