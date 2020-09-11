import { getRepository } from 'typeorm';
import Cargo from '../models/Cargo';

interface CargoDTO {
  id: string;
  nome: string;
  descricao: string;
}

class UpdateCargoService {
  public async execute({ id, nome, descricao }: CargoDTO): Promise<Cargo> {
    const cargoRepository = getRepository(Cargo);
    const cargo = await cargoRepository.findOne({
      where: { id },
    });

    if (!cargo) {
      throw new Error('Esse cargo não existe');
    }

    cargo.nome = nome;
    cargo.descricao = descricao;
    await cargoRepository.save(cargo);

    return cargo;
  }
}

export default UpdateCargoService;
