import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as cors from 'cors';
import * as dotenv from 'dotenv';
import { CorsInterceptor } from './intercerptors/CorsInterceptor';

dotenv.config();
async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.use(
    cors({
      // origin: 'http://localhost:8080',
      origin: "https://musicmate.vercel.app/",
      methods: 'GET,PUT,POST,DELETE',
      credentials: true,
    }),
  );

  const config = new DocumentBuilder()
    .setTitle('Global example')
    .setDescription('The global API description')
    .setVersion('0.0.1')
    .addTag('Globals')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/api/doc', app, document);

  app.setGlobalPrefix('api');
  app.useGlobalInterceptors(new CorsInterceptor());
  
  await app.listen(parseInt(process.env.PORT) || 3030);
}
bootstrap();
