import { ConnectionOptions } from 'typeorm';

const configsDev: ConnectionOptions = {
  type: 'postgres',
  name: 'default',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'root',
  database: 'ino-vaovao-v2',
  entities: ['dist/**/*.entity{.ts,.js}'],
  synchronize: false,
  migrations: ['dist/migrations/*{.ts,.js}'],
  migrationsTableName: 'migrations_typeorm',
  migrationsRun: true,
};

export = configsDev;
