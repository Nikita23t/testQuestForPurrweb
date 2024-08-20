import { Module } from '@nestjs/common';
import { CommentController } from './comment.controller';
import { CommentService } from './comment.service';
import {SequelizeModule} from "@nestjs/sequelize";
import {Comment} from "./comment.models";


@Module({
  controllers: [CommentController],
  providers: [CommentService],
  imports: [
    SequelizeModule.forFeature([Comment])
  ]
})
export class CommentModule {}
