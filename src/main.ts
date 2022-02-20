import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  console.log(process.env.ping);
  await app.listen(process.env.PORT || 5000);
}
bootstrap();
