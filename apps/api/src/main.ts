import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as dotenv from 'dotenv';

dotenv.config();
async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  
  app.enableCors(
    {
      origin: '*',
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
      credentials: true,
      preflightContinue: false,
      optionsSuccessStatus: 204
    }
  );

  const config = new DocumentBuilder()
    .setTitle('Global example')
    .setDescription('The global API description')
    .setVersion('0.0.1')
    .addTag('Globals')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/api', app, document);
  
  await app.listen(parseInt(process.env.PORT) || 3030);
}
bootstrap();
