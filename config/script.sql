CREATE TABLE cargos (
    id_cargo INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL
);


CREATE TABLE setores (
    id_setor INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL
);


CREATE TABLE filiais (
    id_filial INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL
);

CREATE TABLE funcionarios (
    matricula INT NOT NULL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    sobrenome VARCHAR(100) NOT NULL,
    CPF VARCHAR(14) NOT NULL,
    RG VARCHAR(20) NOT NULL,
    data_nascimento DATE NOT NULL,
    estado_civil VARCHAR(20),
    cnh VARCHAR(20),
    status VARCHAR(20) NOT NULL,
    data_cadastro DATE NOT NULL,
    id_cargo INT NOT NULL,
    id_setor INT NOT NULL,
    id_filial INT NOT NULL,
    FOREIGN KEY (id_cargo) REFERENCES cargos(id_cargo),
    FOREIGN KEY (id_setor) REFERENCES setores(id_setor),
    FOREIGN KEY (id_filial) REFERENCES filiais(id_filial)
);

CREATE TABLE tipo_telefone (
    id_tipo_telefone INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    tipo VARCHAR(50) NOT NULL
);

CREATE TABLE telefone_funcionarios (
    id_telefone INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    id_funcionario INT NOT NULL,
    numero VARCHAR(20) NOT NULL,
    id_tipo_telefone INT NOT NULL,
    FOREIGN KEY (id_funcionario) REFERENCES funcionarios(matricula),
    FOREIGN KEY (id_tipo_telefone) REFERENCES tipo_telefone(id_tipo_telefone)
);


CREATE TABLE tipo_atendimento (
    id_tipo_atendimento INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL
);

CREATE TABLE tipo_solicitacao (
    id_tipo_solicitacao INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    descricao VARCHAR(100) NOT NULL
);

CREATE TABLE solicitacoes (
    id_solicitacao INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    id_tipo_solicitacao INT NOT NULL,
    descricao TEXT,
    data_abertura DATE NOT NULL,
    data_fechamento DATE,
    id_funcionario_abertura INT NOT NULL,
    FOREIGN KEY (id_tipo_solicitacao) REFERENCES tipo_solicitacao(id_tipo_solicitacao),
    FOREIGN KEY (id_funcionario_abertura) REFERENCES funcionarios(matricula)
);

CREATE TABLE atendimentos (
    id_atendimento INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    id_tipo_atendimento INT NOT NULL,
    descricao TEXT,
    id_funcionario_atendimento INT NOT NULL,
    data_atendimento DATE NOT NULL,
    data_fechamento DATE,
    FOREIGN KEY (id_tipo_atendimento) REFERENCES tipo_atendimento(id_tipo_atendimento),
    FOREIGN KEY (id_funcionario_atendimento) REFERENCES funcionarios(matricula)
);



CREATE TABLE paises (
    id_pais INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL
);

CREATE TABLE estados (
    id_estado INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    id_pais INT NOT NULL,
    FOREIGN KEY (id_pais) REFERENCES paises(id_pais)
);

CREATE TABLE cidades (
    id_cidade INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    id_estado INT NOT NULL,
    FOREIGN KEY (id_estado) REFERENCES estados(id_estado)
);

CREATE TABLE enderecos (
    id_endereco INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    logradouro VARCHAR(200) NOT NULL,
    numero VARCHAR(20),
    complemento VARCHAR(100),
    cep VARCHAR(20),
    id_cidade INT NOT NULL,
    FOREIGN KEY (id_cidade) REFERENCES cidades(id_cidade)
);

CREATE TABLE endereco_funcionarios (
    id_endereco_funcionario INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    matricula_funcionario INT NOT NULL,
    id_endereco INT NOT NULL,
    FOREIGN KEY (matricula_funcionario) REFERENCES funcionarios(matricula),
    FOREIGN KEY (id_endereco) REFERENCES enderecos(id_endereco)
);


CREATE TABLE logins (
    id_login INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    matricula_funcionario INT NOT NULL UNIQUE,
    username VARCHAR(50) NOT NULL UNIQUE,
    senha VARCHAR(100) NOT NULL,
    FOREIGN KEY (matricula_funcionario) REFERENCES funcionarios(matricula)
);


CREATE TABLE endereco_filial (
    id_endereco_filial INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    id_filial INT NOT NULL,
    id_endereco INT NOT NULL,
    FOREIGN KEY (id_filial) REFERENCES filiais(id_filial),
    FOREIGN KEY (id_endereco) REFERENCES enderecos(id_endereco)
);


CREATE TABLE permissoes (
    id_permissao INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    descricao TEXT
);

CREATE TABLE permissoes_funcionarios (
    id_perm_func INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    id_funcionario INT NOT NULL,
    id_permissao INT NOT NULL,
    can_create BOOLEAN NOT NULL DEFAULT FALSE,
    can_read BOOLEAN NOT NULL DEFAULT FALSE,
    can_update BOOLEAN NOT NULL DEFAULT FALSE,
    can_delete BOOLEAN NOT NULL DEFAULT FALSE,
    FOREIGN KEY (id_funcionario) REFERENCES funcionarios(matricula),
    FOREIGN KEY (id_permissao) REFERENCES permissoes(id_permissao),
    UNIQUE KEY unique_perm_func (id_funcionario, id_permissao)
);


CREATE TABLE log_usu (
    id_registro INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    tabela_afetada VARCHAR(100) NOT NULL,
    acao_realizada VARCHAR(50) NOT NULL,
    id_registro_afetado INT NOT NULL,
    data_edicao TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    id_funcionario_editor INT NOT NULL,
    dados_antigos TEXT,
    dados_novos TEXT,
    FOREIGN KEY (id_funcionario_editor) REFERENCES funcionarios(matricula)
);