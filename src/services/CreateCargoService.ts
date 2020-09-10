import { getRepository } from 'typeorm';
import Cargo from '../models/Cargo';

interface CargoDTO {
  nome: string;
  descricao: string;
}

class CreateCargoService {
  public async execute({ nome, descricao }: CargoDTO): Promise<Cargo> {
    const cargoRepository = getRepository(Cargo);

    const cargo = cargoRepository.create({
      nome,
      descricao,
    });
    await cargoRepository.save(cargo);

    return cargo;
  }
}

export default CreateCargoService;
