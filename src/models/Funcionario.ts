import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  JoinColumn,
  ManyToOne,
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

  @ManyToOne(() => Cargo, cargo => cargo.funcionario, { eager: true })
  @JoinColumn({ name: 'cargo_id' })
  cargo: Cargo;

  @Column()
  cargo_id: string;

  @Column()
  nascimento: string;

  @Column('decimal')
  salario: number;
}
export default Funcionario;
