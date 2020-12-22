import { ConnectionOptions } from "typeorm";

const baseUrl = process.env.NODE_ENV === "dev" ? "src" : "dist";

export interface ServerConfigs {
  port: number;
  tokenSecret: string;
}
interface Configs {
  server: ServerConfigs;
  database: ConnectionOptions;
  cloudinary: {
    cloud_name: string;
    api_key: string;
    api_secret: string;
  };
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

  cloudinary: {
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  },
} as Configs;
