import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { envs } from './config';
import { Logger } from '@nestjs/common';


async function bootstrap() {
  const logger = new Logger('Main-Orders-MS');
  const app = await NestFactory.create(AppModule);
  
  await app.listen(envs.port);
  logger.log(`Orders Microservice running on por ${envs.port}`);
}
bootstrap();
