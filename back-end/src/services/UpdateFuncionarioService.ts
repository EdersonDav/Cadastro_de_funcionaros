import { getRepository } from 'typeorm';
import Funcionario from '../models/Funcionario';
import Cargo from '../models/Cargo';

interface FuncionarioDTO {
  id: string;
  nome: string;
  sobrenome: string;
  cargo_id: string;
  nascimento: string;
  salario: number;
}

class UpdateCargoService {
  public async execute({
    id,
    nome,
    sobrenome,
    cargo_id,
    nascimento,
    salario,
  }: FuncionarioDTO): Promise<Funcionario> {
    const funcionarioRepository = getRepository(Funcionario);
    const cargoRepository = getRepository(Cargo);
    const funcionario = await funcionarioRepository.findOne({
      where: { id },
    });

    if (!funcionario) {
      throw new Error('Esse funcionario não existe');
    }

    const novoCargo = await cargoRepository.findOne({
      where: { id: cargo_id },
    });

    if (!novoCargo) {
      throw new Error('Esse cargo não existe');
    }

    funcionario.nome = nome;
    funcionario.sobrenome = sobrenome;
    funcionario.cargo_id = cargo_id;
    funcionario.nascimento = nascimento;
    funcionario.salario = salario;
    funcionario.cargo = novoCargo;

    await funcionarioRepository.save(funcionario);

    return funcionario;
  }
}

export default UpdateCargoService;
