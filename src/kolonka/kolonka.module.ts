import { Module } from '@nestjs/common';
import {SequelizeModule} from "@nestjs/sequelize";
import {KolonkasController} from "./kolonka.controller";
import {KolonkasService} from "./kolonka.service";
import {Kolonka} from "./kolonka.models";


@Module({
  controllers: [KolonkasController],
  providers: [KolonkasService],
  imports: [
    SequelizeModule.forFeature([Kolonka])
  ]
})
export class KolonkaModule {}
