import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import Funcionario from './Funcionario';

@Entity('cargos')
class Cargo {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nome: string;

  @Column()
  descricao: string;

  @OneToMany(() => Funcionario, funcionario => funcionario.cargo)
  funcionario: Funcionario;
}
export default Cargo;
