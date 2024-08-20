import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {createCommentDto} from "./dto/create-comment.dto";
import {Comment} from "./comment.models";

@Injectable()
export class CommentService {

    constructor(@InjectModel(Comment) private commentRepository: typeof Comment) {
    }

    async createComment(dto: createCommentDto){
        const comment = await this.commentRepository.create(dto);
        return comment
    }

    async getAllComments() {
        const comments = await this.commentRepository.findAll();
        return comments
    }


}
