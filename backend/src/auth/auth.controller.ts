import { Body, Controller, Post, UseInterceptors } from '@nestjs/common';
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
    @ApiResponse({
        description: 'SignUp user',
    })
    async signUp(@Body() body: SignUpDto) {
        return await this.authService.signUp(body);
    }

    @Post('/signin')
    @ApiResponse({
        description: 'Login user',
    })
    async signIn(@Body() body: SignInDto) {
        console.log(body);
        return await this.authService.signIn(body);
    }
}
