"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
const cors = require("cors");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.use(cors({
        origin: 'http://localhost:8080',
        credentials: true,
    }));
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Global example')
        .setDescription('The global API description')
        .setVersion('0.0.1')
        .addTag('Globals')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('/api', app, document);
    await app.listen(3030);
}
bootstrap();
//# sourceMappingURL=main.js.map