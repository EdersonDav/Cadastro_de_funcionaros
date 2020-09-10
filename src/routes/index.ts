import { Router } from 'express';
import { v4 } from 'uuid';

const routes = Router();

interface Funcionario {
  id: string;
  nome: string;
  sobrenome: string;
  cargo_id: number;
  nascimento: string;
  salario: number;
  cargo?: string;
}

interface Cargo {
  nome: string;
  descricao: string;
  id: number;
}

const funcionarios: Funcionario[] = [
  {
    id: v4(),
    nome: 'Ederson',
    nascimento: '02/08/1995',
    cargo_id: 1,
    salario: 5000,
    sobrenome: 'Silva',
  },
  {
    id: v4(),
    nome: 'Ederson',
    nascimento: '02/08/1995',
    cargo_id: 2,
    salario: 5000,
    sobrenome: 'Silva',
  },
];

const cargos: Cargo[] = [
  {
    nome: 'Desenvolvedor Pleno',
    descricao: 'Desenvolvedor de sistemas pleno',
    id: 1,
  },
  {
    nome: 'Desenvolvedor Junior',
    descricao: 'Desenvolvedor de sistemas junior',
    id: 2,
  },
];

routes.get('/', (require, response) => {
  const allFuncionariosData = funcionarios;
  allFuncionariosData.map(funcionario => {
    const cargo: Cargo | undefined = cargos.find(c => {
      return c.id === funcionario.cargo_id;
    });
    if (cargo) funcionario.cargo = cargo.nome;
    return funcionario;
  });

  response.json(allFuncionariosData);
});

routes.post('/', (require, response) => {
  const { nome, sobrenome, nascimento, cargo, salario } = require.body;
  let cargo_id: number | undefined = cargos.find(carg => {
    if (carg.nome === cargo) {
      return carg.id;
    }
    return undefined;
  });

  if (!cargo_id) {
    cargo_id = 0;
  }

  const newFuncionario: Funcionario = {
    id: v4(),
    nome,
    cargo_id,
    sobrenome,
    nascimento,
    cargo,
    salario,
  };
  funcionarios.push(newFuncionario);

  response.json(newFuncionario);
});

routes.put('/:id', (require, response) => {
  const { nome, sobrenome, nascimento, cargo, salario } = require.body;
  let cargo_id: number | undefined = cargos.find(carg => {
    if (carg.nome === cargo) {
      return carg.id;
    }
    return undefined;
  });

  if (!cargo_id) {
    cargo_id = 0;
  }

  const newFuncionario: Funcionario = {
    id: v4(),
    nome,
    cargo_id,
    sobrenome,
    nascimento,
    cargo,
    salario,
  };
  funcionarios.push(newFuncionario);

  response.json(newFuncionario);
});

export default routes;
