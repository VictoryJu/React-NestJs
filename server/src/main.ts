import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true, //dto에 정의되지 않은 프로퍼티 넘어올시 오류뱉음
      transform: true,
    }),
  );
  await app.listen(8000);
}
bootstrap();
