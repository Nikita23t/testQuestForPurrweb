import {Body, Controller, Get, Post} from '@nestjs/common';
import {createCommentDto} from "./dto/create-comment.dto";
import {CommentService} from "./comment.service"



@Controller('comment')
export class CommentController {

    constructor(private commentsService: CommentService) {
    }

    @Post()
    create(@Body() commentDto: createCommentDto) {
        return this.commentsService.createComment(commentDto);
    }

    @Get()
    getAll() {
        return this.commentsService.getAllComments();
    }
}
