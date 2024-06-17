const express = require('express');
const {
  getAllAlunos, createAluno, getAlunoById, updateAluno, deleteAluno,
  getAllDepartamentos, createDepartamento, getDepartamentoById, updateDepartamento, deleteDepartamento,
  getAllProfessores, createProfessor, getProfessorById, updateProfessor, deleteProfessor,
  getAllCursos, createCurso, getCursoById, updateCurso, deleteCurso,
  getAllDisciplinas, createDisciplina, getDisciplinaById, updateDisciplina, deleteDisciplina,
  getAllMatriculas, createMatricula, getMatriculaById, updateMatricula, deleteMatricula
} = require('../controllers/controllers');

const router = express.Router();

router.get('/alunos', getAllAlunos);
router.post('/alunos', createAluno);
router.get('/alunos/:id', getAlunoById);
router.put('/alunos/:id', updateAluno);
router.delete('/alunos/:id', deleteAluno);

router.get('/departamentos', getAllDepartamentos);
router.post('/departamentos', createDepartamento);
router.get('/departamentos/:id', getDepartamentoById);
router.put('/departamentos/:id', updateDepartamento);
router.delete('/departamentos/:id', deleteDepartamento);

router.get('/professores', getAllProfessores);
router.post('/professores', createProfessor);
router.get('/professores/:id', getProfessorById);
router.put('/professores/:id', updateProfessor);
router.delete('/professores/:id', deleteProfessor);

router.get('/cursos', getAllCursos);
router.post('/cursos', createCurso);
router.get('/cursos/:id', getCursoById);
router.put('/cursos/:id', updateCurso);
router.delete('/cursos/:id', deleteCurso);

router.get('/disciplinas', getAllDisciplinas);
router.post('/disciplinas', createDisciplina);
router.get('/disciplinas/:id', getDisciplinaById);
router.put('/disciplinas/:id', updateDisciplina);
router.delete('/disciplinas/:id', deleteDisciplina);

router.get('/matriculas', getAllMatriculas);
router.post('/matriculas', createMatricula);
router.get('/matriculas/:id', getMatriculaById);
router.put('/matriculas/:id', updateMatricula);
router.delete('/matriculas/:id', deleteMatricula);

module.exports = router;
