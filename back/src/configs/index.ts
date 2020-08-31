import { ConnectionOptions } from 'typeorm';

interface ServerConfigs {
  port: number;
}
interface Configs {
  server: ServerConfigs;
  database: ConnectionOptions;
}

export default (): Configs => {
  return {
    server: {
      port: parseInt(process.env.PORT),
    },

    database: {
      type: 'postgres',
      name: 'default',
      host: process.env.TYPEORM_HOST,
      port: parseInt(process.env.TYPEORM_PORT),
      username: process.env.TYPEORM_USERNAME,
      password: process.env.TYPEORM_PASSWORD,
      database: process.env.TYPEORM_DATABASE,
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: false,
      migrations: ['dist/migrations/*{.ts,.js}'],
      migrationsTableName: 'migrations_typeorm',
      migrationsRun: true,
    },
  };
};
