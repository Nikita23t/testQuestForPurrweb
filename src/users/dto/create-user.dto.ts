import {IsEmail, IsString, Length} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

export class createUserDto {
    @ApiProperty({example: 'example@mail.com', description: 'email пользователя'})
    @IsEmail({}, {message: 'must be email'})
    readonly email: string;

    @ApiProperty({example: 'qwerty123', description: 'пароль пользователя'})
    @IsString({message: 'must be string'})
    @Length(6, 32, {message: '6 < your password < 32'})
    readonly password: string;
}