import {Body, HttpException, HttpStatus, Injectable, Post, UnauthorizedException} from '@nestjs/common';
import {createUserDto} from "../users/dto/create-user.dto";
import {UsersService} from "../users/users.service";
import {JwtService} from "@nestjs/jwt";
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {

    constructor(private userService: UsersService,
                private jwtService: JwtService) {
    }


    async login(userDto: createUserDto) {
        const user = await this.validateUser(userDto)
        return this.generateToken(user)
    }


    async registration(userDto: createUserDto) {
        const userByEmail = await this.userService.getUserByEmail(userDto.email)
        if (userByEmail) {
            throw new HttpException('Пользователь с таким email уже зарегистрирован', HttpStatus.BAD_REQUEST)
        }
        const hashPassword = await bcrypt.hash(userDto.password, 13)
        const user = await this.userService.createUser({...userDto, password: hashPassword})
        return this.generateToken(user)
    }

    async generateToken(user) {
        const payLoad = {email: user.email, id: user.id}
        return {token: this.jwtService.sign(payLoad)}
    }

    private async validateUser(userDto: createUserDto) {
        const user = await this.userService.getUserByEmail(userDto.email);
        const passwordEquals = await bcrypt.compare(userDto.password, user.password);
        if (user && passwordEquals) {
            return user;
        } else {
            throw new UnauthorizedException({message: 'Не верный email или пароль о_0?'})
        }
    }
}
