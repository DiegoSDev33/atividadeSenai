CREATE TABLE IF NOT EXISTS `Professors` (
  `id` INTEGER NOT NULL auto_increment,
  `nome` VARCHAR(255),
  `CPF` VARCHAR(255) UNIQUE,
  `endereco` VARCHAR(255),
  `departamentoId` INTEGER,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`departamentoId`) REFERENCES `Departamentos` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB;


CREATE TABLE IF NOT EXISTS `Matriculas` (
  `id` INTEGER NOT NULL auto_increment,
  `notaFinal` FLOAT,
  `numeroPresencas` INTEGER,
  `numeroFaltas` INTEGER,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  `alunoId` INTEGER,
  `disciplinaId` INTEGER,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`alunoId`) REFERENCES `Alunos` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  FOREIGN KEY (`disciplinaId`) REFERENCES `Disciplinas` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB;

/*
INSERT INTO Departamentos (nome, sigla, createdAt, updatedAt) VALUES
('Departamento de Matemática', 'DMAT', NOW(), NOW()),
('Departamento de Física', 'DFIS', NOW(), NOW()),
('Departamento de Biologia', 'DBIO', NOW(), NOW()),
('Departamento de Química', 'DQUI', NOW(), NOW()),
('Departamento de História', 'DHIS', NOW(), NOW()),
('Departamento de Geografia', 'DGEO', NOW(), NOW()),
('Departamento de Literatura', 'DLIT', NOW(), NOW()),
('Departamento de Artes', 'DART', NOW(), NOW()),
('Departamento de Informática', 'DINFO', NOW(), NOW()),
('Departamento de Engenharia', 'DENG', NOW(), NOW());
*/

/*
INSERT INTO Cursos (nome, descricao, cargaHorariaSemestre, cargaHorariaTotal, numeroSemestres, nivel, createdAt, updatedAt, departamentoid) VALUES
('Engenharia Civil', 'Curso de graduação em Engenharia Civil', 400, 3200, 8, 'Graduação', NOW(), NOW(), 1),
('Ciência da Computação', 'Curso de graduação em Ciência da Computação', 450, 3600, 8, 'Graduação', NOW(), NOW(), 1),
('Administração de Empresas', 'Curso de graduação em Administração', 400, 3200, 8, 'Graduação', NOW(), NOW(), 2),
('Direito', 'Curso de graduação em Direito', 500, 4000, 8, 'Graduação', NOW(), NOW(), 2),
('Medicina', 'Curso de graduação em Medicina', 600, 7200, 12, 'Graduação', NOW(), NOW(), 3),
('Psicologia', 'Curso de graduação em Psicologia', 450, 3600, 8, 'Graduação', NOW(), NOW(), 3),
('Engenharia Elétrica', 'Curso de graduação em Engenharia Elétrica', 450, 3600, 8, 'Graduação', NOW(), NOW(), 4),
('Arquitetura e Urbanismo', 'Curso de graduação em Arquitetura e Urbanismo', 500, 4000, 8, 'Graduação', NOW(), NOW(), 4),
('Mestrado em Economia', 'Programa de mestrado em Economia', NULL, NULL, 4, 'Mestrado', NOW(), NOW(), 5),
('Mestrado em Direito', 'Programa de mestrado em Direito', NULL, NULL, 4, 'Mestrado', NOW(), NOW(), 5);
*/

/*
INSERT INTO Alunos (nome, numero, cpf, rg, enderecoatual, telefones, enderecopermanente, email, datanascimento, sexo, createdAt, updatedAt, cursoId) VALUES
('João da Silva', '123456', '123.456.789-00', '1234567', 'Rua das Flores, 123', '(11) 99999-9999', 'Rua Principal, 456', 'joao.silva@email.com', '1990-05-15', 'M', NOW(), NOW(), 1),
('Maria Oliveira', '654321', '987.654.321-00', '9826543', 'Avenida dos Passarinhos, 456', '(11) 88888-8888', 'Avenida Central, 789', 'maria.oliveira@email.com', '1992-08-20', 'F', NOW(), NOW(), 2),
('Pedro Souza', '246810', '246.810.135-00', '2468101', 'Praça das Árvores, 789', '(11) 77777-7777', 'Praça Principal, 123', 'pedro.souza@email.com', '1991-03-10', 'M', NOW(), NOW(), 1),
('Ana Santos', '135790', '531.790.246-00', '1357902', 'Alameda dos Girassóis, 321', '(11) 66666-6666', 'Alameda Central, 654', 'ana.santos@email.com', '1993-11-25', 'F', NOW(), NOW(), 3),
('Lucas Pereira', '987654', '789.654.321-00', '9876543', 'Rua dos Ipês, 789', '(11) 55555-5555', 'Rua Principal, 987', 'lucas.pereira@email.com', '1994-02-28', 'M', NOW(), NOW(), 2),
('Juliana Lima', '456789', '654.321.789-00', '4567891', 'Avenida das Rosas, 456', '(11) 44444-4444', 'Avenida Principal, 321', 'juliana.lima@email.com', '1995-07-12', 'F', NOW(), NOW(), 3),
('Gabriel Costa', '789123', '987.123.456-00', '7891234', 'Travessa das Orquídeas, 321', '(11) 33333-3333', 'Travessa Central, 654', 'gabriel.costa@email.com', '1990-09-05', 'M', NOW(), NOW(), 4),
('Carla Rodrigues', '321987', '654.789.123-00', '3219871', 'Rua das Violetas, 654', '(11) 22222-2222', 'Rua Principal, 987', 'carla.rodrigues@email.com', '1992-12-18', 'F', NOW(), NOW(), 4),
('Miguel Almeida', '159357', '357.159.357-00', '1593571', 'Praça das Magnólias, 123', '(11) 11111-1111', 'Praça Central, 456', 'miguel.almeida@email.com', '1993-04-30', 'M', NOW(), NOW(), 5),
('Fernanda Xavier', '753951', '951.753.159-00', '7539511', 'Avenida das Hortênsias, 456', '(11) 00000-0000', 'Avenida Principal, 789', 'fernanda.xavier@email.com', '1994-08-15', 'F', NOW(), NOW(), 5);
*/

/*
INSERT INTO Disciplinas (nome, cargaHoraria, createdAt, updatedAt) VALUES
('Cálculo I', 60,  NOW(), NOW()),
('Física Geral', 80,  NOW(), NOW()),
('Genética', 50,  NOW(), NOW()),
('Química Orgânica',  4, NOW(), NOW()),
('História do Brasil',  5, NOW(), NOW()),
('Geopolítica', 45,  NOW(), NOW()),
('Literatura Brasileira', 30, NOW(), NOW()),
('Desenho Artístico', 35, NOW(), NOW()),
('Introdução à Programação', 55,  NOW(), NOW()),
('Mecânica dos Fluidos', 75,  NOW(), NOW()); -- n
*/

/*
INSERT INTO Matriculas (notaFinal, numeroPresencas, numeroFaltas, createdAt, updatedAt, disciplinaId) VALUES
(8.5, 20, 2, NOW(), NOW(), 1 ),
(7.0, 18, 4, NOW(), NOW(), 2 ),
(9.2, 22, 1, NOW(), NOW(), 3 ),
(6.8, 17, 5, NOW(), NOW(), 4 ),
(8.0, 19, 3, NOW(), NOW(), 5 ),
(7.5, 21, 2, NOW(), NOW(), 6 ),
(8.9, 23, 0, NOW(), NOW(), 7 ),
(6.5, 16, 6, NOW(), NOW(), 8 ),
(9.0, 20, 1, NOW(), NOW(), 9 ),
(7.2, 18, 3, NOW(), NOW(), 10);
*/


/*
INSERT INTO Professors (nome, CPF, endereco, departamentoId, createdAt, updatedAt) VALUES
('José Silva', '123.456.789-00', 'Rua das Flores, 123', 1, NOW(), NOW()),
('Ana Souza', '987.654.321-00', 'Av. dos Bandeirantes, 456', 2, NOW(), NOW()),
('Paulo Oliveira', '234.567.890-00', 'Rua do Bosque, 789', 3, NOW(), NOW()),
('Maria Santos', '543.210.987-00', 'Av. Paulista, 1010', 4, NOW(), NOW()),
('Lucas Pereira', '876.543.210-00', 'Rua das Palmeiras, 234', 5, NOW(), NOW()),
('Carla Lima', '987.654.321-99', 'Av. das Acácias, 567', 6, NOW(), NOW()),
('Marcos Costa', '876.543.210-99', 'Rua das Mangueiras, 890', 7, NOW(), NOW()),
('Fernanda Almeida', '234.567.890-99', 'Av. das Oliveiras, 111', 8, NOW(), NOW()),
('Roberto Rodrigues', '123.456.789-99', 'Rua dos Cravos, 222', 9, NOW(), NOW()),
('Juliana Martins', '543.210.987-99', 'Av. das Orquídeas, 333', 10, NOW(), NOW());
*/
select * from alunos;

