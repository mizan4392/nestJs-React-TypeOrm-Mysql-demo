import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as bodyParser from 'body-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.use(bodyParser.json({ limit: '40mb' }));
  app.use(bodyParser.urlencoded({ limit: '40mb', extended: true }));
  await app.listen(4000);
}
bootstrap();
