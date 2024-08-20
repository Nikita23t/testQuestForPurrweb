import {Body, Controller, Get, Post} from '@nestjs/common';
import {createCardDto} from "./dto/create-card.dto";
import {CardsService} from "./cards.service";
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {Card} from "./cards.models";

@ApiTags('Карточки')
@Controller('cards')
export class CardsController {

    constructor(private usersService: CardsService) {
    }

    @ApiOperation({summary: 'Создание карточки'})
    @ApiResponse({status: 200, type: Card})
    @Post()
    create(@Body() cardDto: createCardDto) {
        return this.usersService.createUser(cardDto);
    }

    @ApiOperation({summary: 'Показать все карточки'})
    @ApiResponse({status: 200, type: [Card]})
    @Get()
    getAll() {
        return this.usersService.getAllUsers();
    }
}
