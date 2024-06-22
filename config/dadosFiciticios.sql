-- Dados fictícios para a tabela `cargos`
INSERT INTO cargos (nome) VALUES
('Analista'),
('Gerente'),
('Supervisor'),
('Coordenador'),
('Assistente'),
('Diretor'),
('Técnico'),
('Consultor');

-- Dados fictícios para a tabela `setores`
INSERT INTO setores (nome) VALUES
('Recursos Humanos'),
('Tecnologia da Informação'),
('Financeiro'),
('Marketing'),
('Vendas'),
('Operações'),
('Jurídico'),
('Logística');

-- Dados fictícios para a tabela `filiais`
INSERT INTO filiais (nome) VALUES
('Filial São Paulo'),
('Filial Rio de Janeiro'),
('Filial Belo Horizonte'),
('Filial Porto Alegre'),
('Filial Salvador');

-- Dados fictícios para a tabela `funcionarios`
INSERT INTO funcionarios (matricula, nome, sobrenome, CPF, RG, data_nascimento, estado_civil, cnh, status, data_cadastro, id_cargo, id_setor, id_filial) VALUES
(1001, 'Carlos', 'Silva', '111.111.111-11', 'MG-12.345.678', '1985-04-12', 'Casado', '1234567890', 'Ativo', '2020-01-15', 1, 1, 1),
(1002, 'Ana', 'Souza', '222.222.222-22', 'SP-98.765.432', '1990-06-20', 'Solteira', '2345678901', 'Ativo', '2021-05-22', 2, 2, 2),
(1003, 'Pedro', 'Lima', '333.333.333-33', 'RJ-23.456.789', '1988-09-10', 'Casado', '3456789012', 'Ativo', '2019-11-30', 3, 3, 3),
(1004, 'Mariana', 'Pereira', '444.444.444-44', 'BA-87.654.321', '1992-12-05', 'Solteira', '4567890123', 'Ativo', '2018-03-18', 4, 4, 4),
(1005, 'João', 'Alves', '555.555.555-55', 'RS-12.345.678', '1987-02-25', 'Casado', '5678901234', 'Ativo', '2022-07-10', 5, 5, 5);

-- Dados fictícios para a tabela `tipo_telefone`
INSERT INTO tipo_telefone (tipo) VALUES
('Celular'),
('Residencial'),
('Comercial');

-- Dados fictícios para a tabela `telefone_funcionarios`
INSERT INTO telefone_funcionarios (id_funcionario, numero, id_tipo_telefone) VALUES
(1001, '99999-1111', 1),
(1002, '88888-2222', 2),
(1003, '77777-3333', 3),
(1004, '66666-4444', 1),
(1005, '55555-5555', 2);

-- Dados fictícios para a tabela `tipo_atendimento`
INSERT INTO tipo_atendimento (nome) VALUES
('Suporte Técnico'),
('Consultoria'),
('Manutenção');

-- Dados fictícios para a tabela `tipo_solicitacao`
INSERT INTO tipo_solicitacao (descricao) VALUES
('Reclamação'),
('Solicitação de Informação'),
('Pedido de Suporte');

-- Dados fictícios para a tabela `solicitacoes`
INSERT INTO solicitacoes (id_tipo_solicitacao, descricao, data_abertura, data_fechamento, id_funcionario_abertura) VALUES
(1, 'Problema com o sistema', '2024-06-10', NULL, 1001),
(2, 'Informações sobre o novo produto', '2024-06-15', '2024-06-16', 1002),
(3, 'Solicitação de suporte técnico', '2024-06-18', NULL, 1003);

-- Dados fictícios para a tabela `atendimentos`
INSERT INTO atendimentos (id_tipo_atendimento, descricao, id_funcionario_atendimento, data_atendimento, data_fechamento) VALUES
(1, 'Atendimento de suporte técnico', 1001, '2024-06-11', '2024-06-12'),
(2, 'Consultoria sobre sistema', 1002, '2024-06-16', '2024-06-17'),
(3, 'Manutenção preventiva', 1003, '2024-06-19', NULL);

-- Dados fictícios para a tabela `paises`
INSERT INTO paises (nome) VALUES
('Brasil'),
('Argentina'),
('Chile');

-- Dados fictícios para a tabela `estados`
INSERT INTO estados (nome, id_pais) VALUES
('São Paulo', 1),
('Rio de Janeiro', 1),
('Minas Gerais', 1);

-- Dados fictícios para a tabela `cidades`
INSERT INTO cidades (nome, id_estado) VALUES
('São Paulo', 1),
('Rio de Janeiro', 2),
('Belo Horizonte', 3);

-- Dados fictícios para a tabela `enderecos`
INSERT INTO enderecos (logradouro, numero, complemento, cep, id_cidade) VALUES
('Rua das Flores', '123', 'Apto 45', '01234-567', 1),
('Av. Atlântica', '456', 'Bloco B', '12345-678', 2),
('Praça Sete', '789', 'Sala 101', '23456-789', 3);

-- Dados fictícios para a tabela `endereco_funcionarios`
INSERT INTO endereco_funcionarios (matricula_funcionario, id_endereco) VALUES
(1001, 1),
(1002, 2),
(1003, 3);

-- Dados fictícios para a tabela `logins`
INSERT INTO logins (matricula_funcionario, username, senha) VALUES
(1001, 'carlos.silva', 'senha123'),
(1002, 'ana.souza', 'senha456'),
(1003, 'pedro.lima', 'senha789');

-- Dados fictícios para a tabela `endereco_filial`
INSERT INTO endereco_filial (id_filial, id_endereco) VALUES
(1, 1),
(2, 2),
(3, 3);


