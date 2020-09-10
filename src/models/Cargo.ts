import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('cargos')
class Cargo {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  descricao: string;
}
export default Cargo;
