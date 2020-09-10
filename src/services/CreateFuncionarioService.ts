import { getRepository } from 'typeorm';
import Funcionario from '../models/Funcionario';
import Cargo from '../models/Cargo';

interface FuncionarioDTO {
  nome: string;
  sobrenome: string;
  cargo_id: string;
  // cargo: Cargo;
  nascimento: string;
  salario: number;
}

class CreateFuncionarioService {
  public async execute({
    nome,
    sobrenome,
    cargo_id,
    nascimento,
    salario,
  }: FuncionarioDTO): Promise<Funcionario> {
    const funcionarioRepository = getRepository(Funcionario);
    const cargoRepository = getRepository(Cargo);

    const cargo = await cargoRepository.findOne({
      where: { id: cargo_id },
    });

    if (!cargo) {
      throw new Error('Esse cargo não existe');
    }

    const funcionario = funcionarioRepository.create({
      nome,
      sobrenome,
      nascimento,
      salario,
      cargo,
    });
    await funcionarioRepository.save(funcionario);

    return funcionario;
  }
}

export default CreateFuncionarioService;
