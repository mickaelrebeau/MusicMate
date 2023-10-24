import { AuthService } from './auth.service';
import { SignUpDto } from './dtos/signUp.dto';
import { SignInDto } from './dtos/signIn.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    signUp(body: SignUpDto): Promise<import("../user/model/user.entity").User>;
    signIn(body: SignInDto): Promise<{
        access_token: string;
        userId: string;
    }>;
}
