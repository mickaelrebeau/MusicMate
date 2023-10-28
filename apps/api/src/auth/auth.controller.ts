import { Body, Controller, Header, Post, UseInterceptors } from '@nestjs/common';
import { RpcSuccessInterceptor } from 'src/intercerptors/RpcSuccessInterceptor';
import { AuthService } from './auth.service';
import { SignUpDto } from './dtos/signUp.dto';
import { SignInDto } from './dtos/signIn.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('auth')
@ApiTags('Auth')
@UseInterceptors(RpcSuccessInterceptor)
export class AuthController {
    constructor(
        private readonly authService: AuthService,
    ) { }
    
    @Post('/signup')
    @Header('Access-Control-Allow-Origin','*')
    @ApiResponse({
        description: 'SignUp user',
    })
    async signUp(@Body() body: SignUpDto) {
        return await this.authService.signUp(body);
    }

    @Post('/signin')
    @Header('Access-Control-Allow-Origin','*')
    @ApiResponse({
        description: 'Login user',
    })
    async signIn(@Body() body: SignInDto) {
        return await this.authService.signIn(body);
    }
}
