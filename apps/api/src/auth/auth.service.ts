import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { SignUpDto } from './dtos/signUp.dto';
import * as argon2 from 'argon2';
import { SignInDto } from './dtos/signIn.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        private readonly userService: UserService,
        private jwtService: JwtService
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
        const user = await this.userService.getByEmail(body.email);
        const passwordMatches = await argon2.verify(
            user.password,
            body.password,
        );

        if (user.email !== body.email || !passwordMatches) {
            throw new UnauthorizedException();
        }

        const payload = { sub: user.id, username: user.pseudo };
        return {
            access_token: await this.jwtService.signAsync(payload),
            userId: user.id
        };
    }

    hashData(data: string) {
    return argon2.hash(data);
  }
}
