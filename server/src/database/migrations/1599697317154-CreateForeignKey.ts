import { MigrationInterface, QueryRunner, TableForeignKey } from 'typeorm';

export default class CreateForeignKey1599697317154
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createForeignKey(
      'funcionarios',
      new TableForeignKey({
        name: 'FuncionariosCargoId',
        columnNames: ['cargo_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'cargos',
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('funcionarios', 'FuncionariosCargoId');
  }
}
