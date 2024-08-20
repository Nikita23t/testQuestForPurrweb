import {Module} from "@nestjs/common";
import {SequelizeModule} from "@nestjs/sequelize";
import { UsersModule } from './users/users.module';
import {ConfigModule} from "@nestjs/config";
import * as process from "process";
import {User} from "./users/users.models";
import {CardsModule} from "./cards/cards.module";
import { CommentModule } from './comment/comment.module';
import { KolonkaModule } from './kolonka/kolonka.module';
import {Kolonka} from "./kolonka/kolonka.models";
import {Comment} from "./comment/comment.models";
import {Card} from "./cards/cards.models";
import { AuthModule } from './auth/auth.module';

@Module({
    controllers: [],
    providers: [],
    imports: [
        ConfigModule.forRoot({
            envFilePath: '.env'
        }),
        SequelizeModule.forRoot({
            dialect: 'postgres',
            host: process.env.DB_HOST,
            port: Number(process.env.DB_PORT),
            username: process.env.DB_USERNAME,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
            models: [User, Kolonka, Comment, Card],
            autoLoadModels: true
        }),
        UsersModule, CardsModule, CommentModule, KolonkaModule, AuthModule
    ]
})

export class AppModule {}