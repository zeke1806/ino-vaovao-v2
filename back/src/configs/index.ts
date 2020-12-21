import { ConnectionOptions } from "typeorm";

const baseUrl = process.env.NODE_ENV === "dev" ? "src" : "dist";

export interface ServerConfigs {
  port: number;
  tokenSecret: string;
}
interface Configs {
  server: ServerConfigs;
  database: ConnectionOptions;
}

export default {
  server: {
    port: parseInt(String(process.env.PORT)),
    tokenSecret: process.env.TOKEN_SECRET,
  },

  database: {
    type: "postgres",
    name: "default",
    host: process.env.TYPEORM_HOST,
    port: parseInt(String(process.env.TYPEORM_PORT)),
    username: process.env.TYPEORM_USERNAME,
    password: process.env.TYPEORM_PASSWORD,
    database: process.env.TYPEORM_DATABASE,
    entities: [baseUrl + "/**/*.entity{.ts,.js}"],
    synchronize: process.env.TYPEORM_SYNCHRONIZE === "true",
    migrations: [baseUrl + "/migrations/*{.ts,.js}"],
    migrationsTableName: "migrations_typeorm",
    migrationsRun: process.env.TYPEORM_MIGRATIONS_RUN === "true",
  },
} as Configs;
