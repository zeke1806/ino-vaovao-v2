import { ConnectionOptions } from "typeorm";

const configsDev: ConnectionOptions = {
  type: "postgres",
  name: "default",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "root",
  database: "gestion-evenement",
  entities: ["src/**/*.entity{.ts,.js}"],
  synchronize: false,
  migrations: ["src/migrations/*{.ts,.js}"],
  migrationsTableName: "migrations_typeorm",
  migrationsRun: true,
};

export = configsDev;
