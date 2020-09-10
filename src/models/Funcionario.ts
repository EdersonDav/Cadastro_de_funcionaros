import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';

import Cargo from './Cargo';

@Entity('funcionarios')
class Funcionario {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nome: string;

  @Column()
  sobrenome: string;

  @Column()
  cargo_id: string;

  @OneToOne(() => Cargo)
  @JoinColumn({ name: 'cargo_id' })
  cargo: Cargo;

  @Column()
  nascimento: string;

  @Column('decimal')
  salario: number;
}
export default Funcionario;
