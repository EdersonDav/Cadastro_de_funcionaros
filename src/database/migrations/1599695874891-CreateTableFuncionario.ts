import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateTableFuncionario1599695874891
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'funcionarios',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'nome',
            type: 'varchar',
          },
          {
            name: 'sobrenome',
            type: 'varchar',
          },
          {
            name: 'cargo_id',
            type: 'uuid',
            isNullable: true,
          },
          {
            name: 'nascimento',
            type: 'timestamp',
          },
          {
            name: 'salario',
            type: 'decimal',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('funcionarios');
  }
}
