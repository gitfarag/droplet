import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { globalInterceptor } from './Interceptor/interceptor';
import { HttpExceptionFlters } from './filters/globalFilters';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const port = process.env.APP_PORT;
  const app = await NestFactory.create(AppModule, {cors: true});
  app.useGlobalInterceptors(new globalInterceptor());
  app.useGlobalPipes(new ValidationPipe({ disableErrorMessages: false }));
  app.useGlobalFilters(new HttpExceptionFlters());
  // swagger
  const options = new DocumentBuilder()
    .setDescription('API description')
    .setVersion('1.0')
    .addBearerAuth()
    .addApiKey({name: "MY-API-KEY", in: "header", type: "apiKey"}, 'apiKey')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api/swagger', app, documentFactory);
  await app.listen(port);
  console.log(`Application is running on: https://localhost:` + port);
}
bootstrap();
