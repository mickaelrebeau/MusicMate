import { UserService } from 'src/user/user.service';
import { SignUpDto } from './dtos/signUp.dto';
import { SignInDto } from './dtos/signIn.dto';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private readonly userService;
    private jwtService;
    constructor(userService: UserService, jwtService: JwtService);
    signUp(signUpDto: SignUpDto): Promise<import("../user/model/user.entity").User>;
    signIn(body: SignInDto): Promise<{
        access_token: string;
        userId: string;
    }>;
    hashData(data: string): Promise<string>;
}
