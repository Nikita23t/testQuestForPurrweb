import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {Card} from "./cards.models";
import {createCardDto} from "./dto/create-card.dto";

@Injectable()
export class CardsService {

    constructor(@InjectModel(Card) private userRepository: typeof Card) {
    }

    async createUser(dto: createCardDto){
        const card = await this.userRepository.create(dto);
        return card
    }

    async getAllUsers() {
        const cards = await this.userRepository.findAll();
        return cards
    }


}
