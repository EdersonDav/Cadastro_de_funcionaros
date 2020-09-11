import { Router } from 'express';
import { getRepository } from 'typeorm';
import Cargo from '../models/Cargo';
import CreateCargoService from '../services/CreateCargoService';
import UpdateCargoService from '../services/UpdateCargoService';

const cargosRouter = Router();

cargosRouter.get('/', async (request, response) => {
  const cargoRepository = getRepository(Cargo);
  const cargos = await cargoRepository.find();
  response.json(cargos);
});

cargosRouter.post('/', async (request, response) => {
  try {
    const { nome, descricao } = request.body;
    const createCargo = new CreateCargoService();
    const cargo = await createCargo.execute({ nome, descricao });
    response.json(cargo);
  } catch (err) {
    response.status(400).json({ error: err.message });
  }
});

cargosRouter.get('/:id', async (request, response) => {
  const { id } = request.params;
  const cargoRepository = getRepository(Cargo);
  const cargos = await cargoRepository.findOne({ where: { id } });
  response.json(cargos);
});

cargosRouter.put('/:id', async (request, response) => {
  try {
    const { id } = request.params;
    const { nome, descricao } = request.body;
    const createCargo = new UpdateCargoService();
    const cargo = await createCargo.execute({ id, nome, descricao });
    response.json(cargo);
  } catch (err) {
    response.status(404).json({ error: err.message });
  }
});

cargosRouter.delete('/:id', async (request, response) => {
  const { id } = request.params;
  const cargoRepository = getRepository(Cargo);
  await cargoRepository.delete(id);
  response.status(204).send();
});

export default cargosRouter;
