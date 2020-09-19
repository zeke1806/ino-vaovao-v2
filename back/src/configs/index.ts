import { ConnectionOptions } from 'typeorm';
import { GqlModuleOptions } from '@nestjs/graphql';

export interface ServerConfigs {
  port: number;
}
interface Configs {
  server: ServerConfigs;
  graphql: GqlModuleOptions;
  database: ConnectionOptions;
  cloudinary: {
    cloud_name: string;
    api_key: string;
    api_secret: string;
  };
}

export default (): Configs => {
  return {
    server: {
      port: parseInt(process.env.PORT),
    },

    graphql: {
      playground: process.env.PLAYGROUND === 'true',
      debug: process.env.DEBUG === 'true',
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
      synchronize: process.env.TYPEORM_SYNCHRONIZE === 'true',
      migrations: ['dist/migrations/*{.ts,.js}'],
      migrationsTableName: 'migrations_typeorm',
      migrationsRun: process.env.TYPEORM_MIGRATIONS_RUN === 'true',
    },

    cloudinary: {
      cloud_name: process.env.CLOUDINARY_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET,
    },
  };
};
