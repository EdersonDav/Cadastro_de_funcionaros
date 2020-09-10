import { Router } from 'express';
import { getRepository } from 'typeorm';
import Cargo from '../models/Cargo';
import CreateCargoService from '../services/CreateCargoService';

const cargosRouter = Router();

cargosRouter.get('/', async (request, response) => {
  const cargoRepository = getRepository(Cargo);
  const cargos = await cargoRepository.find();
  response.json(cargos);
});

cargosRouter.post('/', async (request, response) => {
  const { nome, descricao } = request.body;
  const createCargo = new CreateCargoService();
  const cargo = await createCargo.execute({ nome, descricao });
  response.json(cargo);
});

export default cargosRouter;
