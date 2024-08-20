import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {Kolonka} from "./kolonka.models";
import {createKolonkaDto} from "./dto/create-kolonka.dto";



@Injectable()
export class KolonkasService {

    constructor(@InjectModel(Kolonka) private kolonkaRepository: typeof Kolonka) {
    }

    async createUser(dto: createKolonkaDto){
        const kolonka = await this.kolonkaRepository.create(dto);
        return kolonka
    }

    async getAllUsers() {
        const kolonkas = await this.kolonkaRepository.findAll();
        return kolonkas
    }

}
