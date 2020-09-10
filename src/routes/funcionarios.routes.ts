import { Router } from 'express';
import { getRepository } from 'typeorm';
import Funcionario from '../models/Funcionario';
import CreateFuncionarioService from '../services/CreateFuncionarioService';
import UpdateFuncionarioService from '../services/UpdateFuncionarioService';

const funcionariosRouter = Router();

funcionariosRouter.get('/', async (request, response) => {
  const funcionarioRepository = getRepository(Funcionario);
  const funcionarios = await funcionarioRepository.find();
  response.json(funcionarios);
});

funcionariosRouter.post('/', async (request, response) => {
  const { nome, sobrenome, cargo_id, nascimento, salario } = request.body;
  const createFuncionario = new CreateFuncionarioService();
  const funcionario = await createFuncionario.execute({
    nome,
    sobrenome,
    cargo_id,
    nascimento,
    salario,
  });
  response.json(funcionario);
});

funcionariosRouter.put('/:id', async (request, response) => {
  const { nome, sobrenome, cargo_id, nascimento, salario } = request.body;
  const { id } = request.params;
  const updateFuncionario = new UpdateFuncionarioService();
  const funcionario = await updateFuncionario.execute({
    id,
    nome,
    sobrenome,
    cargo_id,
    nascimento,
    salario,
  });
  response.json(funcionario);
});

funcionariosRouter.delete('/:id', async (request, response) => {
  const { id } = request.params;
  const funcionarioRepository = getRepository(Funcionario);
  await funcionarioRepository.delete(id);
  response.status(204).send();
});

export default funcionariosRouter;
