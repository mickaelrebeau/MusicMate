import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { SignUpDto } from './dtos/signUp.dto';
import * as argon2 from 'argon2';
import { SignInDto } from './dtos/signIn.dto';

@Injectable()
export class AuthService {
    constructor(
        private readonly userService: UserService,
    ) { }
    
    async signUp(signUpDto: SignUpDto) {
        const userExist = await this.userService.getByPseudo(
            signUpDto.pseudo,
        );
        const emailExist = await this.userService.getByEmail(
            signUpDto.email,
        );

        if (userExist || emailExist) {
            throw new Error('User already exist');
        }

        const hash = await this.hashData(signUpDto.password);

        const user = await this.userService.create({
            ...signUpDto,
            password: hash,
        });
        return user;
    }

    async signIn(body: SignInDto) {
        try {
            const user = await this.userService.getByEmail(body.email);
            const passwordMatches = await argon2.verify(
                user.password,
                body.password,
            );

            if (user.email !== body.email ||!passwordMatches) {
                throw new UnauthorizedException();
            }

            return user
        } catch (error) {
            throw new NotFoundException(error);
        }
    }

    hashData(data: string) {
    return argon2.hash(data);
  }
}
