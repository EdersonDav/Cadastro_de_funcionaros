import { Router } from 'express';
import { getRepository } from 'typeorm';
import Funcionario from '../models/Funcionario';

const funcionariosRouter = Router();

funcionariosRouter.get('/', async (request, response) => {
  const funcionarioRepository = getRepository(Funcionario);
  const funcionarios = await funcionarioRepository.find();
  response.json(funcionarios);
});

export default funcionariosRouter;
