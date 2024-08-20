import {Body, Controller, Get, Post} from '@nestjs/common';
import {KolonkasService} from "./kolonka.service";
import {createKolonkaDto} from "./dto/create-kolonka.dto";


@Controller('kolonkas')
export class KolonkasController {

    constructor(private kolonkasService: KolonkasService) {
    }

    @Post()
    create(@Body() kolonkaDto: createKolonkaDto) {
        return this.kolonkasService.createUser(kolonkaDto);
    }

    @Get()
    getAll() {
        return this.kolonkasService.getAllUsers();
    }
}
