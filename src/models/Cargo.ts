import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from 'typeorm';
import Funcionario from './Funcionario';

@Entity('cargos')
class Cargo {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nome: string;

  @Column()
  descricao: string;

  @OneToOne(() => Funcionario, funcionario => funcionario.cargo)
  funcionario: Funcionario;
}
export default Cargo;
