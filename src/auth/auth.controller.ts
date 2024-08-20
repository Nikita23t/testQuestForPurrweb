import {Body, Controller, Post} from '@nestjs/common';
import {createUserDto} from "../users/dto/create-user.dto";
import {AuthService} from "./auth.service";

@Controller('auth')
export class AuthController {

    constructor(private  authService: AuthService) {
    }

    @Post('/signin')
    login(@Body() userDto: createUserDto) {
        return this.authService.login(userDto)
    }

    @Post('/signup')
    registration(@Body() userDto: createUserDto) {
        return this.authService.registration(userDto)
    }
}
