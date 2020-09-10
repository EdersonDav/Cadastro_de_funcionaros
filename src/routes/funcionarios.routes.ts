import { Router } from 'express';
import { getRepository } from 'typeorm';
import Funcionario from '../models/Funcionario';
import CreateFuncionarioService from '../services/CreateFuncionarioService';

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

export default funcionariosRouter;
