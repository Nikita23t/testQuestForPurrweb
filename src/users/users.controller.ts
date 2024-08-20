import {Body, Controller, Get, Post, UseGuards, UsePipes} from '@nestjs/common';
import {createUserDto} from "./dto/create-user.dto";
import {UsersService} from "./users.service";
import {JwtAuthGuard} from "../auth/jwt-auth.guard";
import {ValidationPipe} from "../pipes/validation-pipe";
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {Card} from "../cards/cards.models";
import {User} from "./users.models";

@ApiTags('Пользователи')
@Controller('users')
export class UsersController {

    constructor(private usersService: UsersService) {
    }

    @ApiOperation({summary: 'Создание пользователя'})
    @ApiResponse({status: 200, type: User})
    @UsePipes(ValidationPipe)
    @Post()
    create(@Body() userDto: createUserDto) {
        return this.usersService.createUser(userDto);
    }

    @ApiOperation({summary: 'получение всех пользователей'})
    @ApiResponse({status: 200, type: User})
    @UseGuards(JwtAuthGuard)
    @Get()
    getAll() {
        return this.usersService.getAllUsers();
    }
}
