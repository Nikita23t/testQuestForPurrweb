import {ApiProperty} from "@nestjs/swagger";
import {IsEmail} from "class-validator";

export class createCardDto {
    @ApiProperty({example: 'example@mail.com', description: 'email пользователя'})
    @IsEmail({}, {message: 'must be email'})
    readonly email: string;

    @ApiProperty({example: 'work', description: 'название карточки'})
    readonly cardName: string;

    @ApiProperty({example: '1', description: 'id пользователя'})
    readonly userId: number;
}