import {NestFactory} from "@nestjs/core";
import {AppModule} from "./app.module";
import * as process from "process";
import {JwtAuthGuard} from "./auth/jwt-auth.guard";
import {ValidationPipe} from "./pipes/validation-pipe";
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";


async function main() {
    const PORT = Number(process.env.PORT) || 8000;
    const app = await NestFactory.create(AppModule)


    const config = new DocumentBuilder()
        .setTitle('Тестовое задание на позицию BACKEND для Purrweb')
        .setDescription('Документация REST API')
        .setVersion('1.0.0')
        .addTag('Nikita')
        .build()
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('/api/docs', app, document)

    app.useGlobalPipes(new ValidationPipe())
    // app.useGlobalGuards(new JwtAuthGuard());

    await app.listen(PORT, () => console.log(`Server start on port: ${PORT}`))
}

main()