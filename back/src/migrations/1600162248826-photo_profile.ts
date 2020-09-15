import {MigrationInterface, QueryRunner} from "typeorm";

export class photoProfile1600162248826 implements MigrationInterface {
    name = 'photoProfile1600162248826'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "photo_profile" ("id" SERIAL NOT NULL, "url" character varying NOT NULL, "id_user" integer, CONSTRAINT "PK_31f2c69cd18b8442b80b546da31" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "photo_profile" ADD CONSTRAINT "FK_53d310b5fdb94bcbe621b797cee" FOREIGN KEY ("id_user") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "photo_profile" DROP CONSTRAINT "FK_53d310b5fdb94bcbe621b797cee"`);
        await queryRunner.query(`DROP TABLE "photo_profile"`);
    }

}
