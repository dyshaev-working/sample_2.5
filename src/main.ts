import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as config from 'config';

const APP_PORT: number = config.get('app.port');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  await app.listen(APP_PORT);
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
