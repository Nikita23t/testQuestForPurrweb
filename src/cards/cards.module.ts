import { Module } from '@nestjs/common';
import { CardsController } from './cards.controller';
import { CardsService } from './cards.service';
import {SequelizeModule} from "@nestjs/sequelize";
import {Card} from "./cards.models";

@Module({
  controllers: [CardsController],
  providers: [CardsService],
  imports: [
      SequelizeModule.forFeature([Card])
  ]
})
export class CardsModule {}
