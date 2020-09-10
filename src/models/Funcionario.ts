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

  @OneToOne(() => Cargo, cargo => cargo.funcionario, { eager: true })
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
