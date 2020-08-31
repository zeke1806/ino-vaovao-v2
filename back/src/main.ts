import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

import { ServerConfigs } from './configs';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get<ConfigService>(ConfigService);
  const serverConfig = configService.get<ServerConfigs>('server');

  await app.listen(serverConfig.port);
  console.log(`server run at ${await app.getUrl()}`);
}
bootstrap();
